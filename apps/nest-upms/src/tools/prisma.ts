import { ClassDeclaration, SourceFile, PropertyAssignmentStructure, InterfaceDeclaration, EnumDeclaration, PropertyDeclaration, Project, ObjectLiteralExpression, Decorator } from 'ts-morph'
import { getDocs, clearReturnType, isOneToMany, isManyToOne, isManyToMany, isOneToOne, transformGraphqlType, isUpdateDateColumn, isPrimaryGeneratedColumn, isPrimaryColumn, isCreateDateColumn } from './util'
export class PrismaItem {
    private code: string = ``
    constructor(public cls: ClassDeclaration, public file: SourceFile, public project: Project) {
        const decorators = cls.getDecorators();
        const properties = cls.getProperties();
        const struct = cls.getStructure();
        this.code += `${getDocs(struct)}type ${struct.name} `
        this.code += this.getDbName(decorators)
        this.code += `{\n`;
        properties.map(pro => {
            const decorators = pro.getDecorators();
            const sturct = pro.getStructure();
            const type = sturct.type as string;
            this.code += `${getDocs(sturct, true)}\t${sturct.name}: `;
            this.code += `${this.getType(type, decorators)}${this.getRequire(sturct)} ${this.getDefault(decorators)} ${this.getDbName(decorators)}${this.getDirective(decorators)}\n`
        });
        this.code += `}\n`;
    }
    getDefault(decorators: Decorator[]) {
        let code = ``
        decorators && decorators.map(dec => {
            const call = dec.getCallExpression();
            const args = call.getArguments();
            args && args.map((arg: ObjectLiteralExpression) => {
                if (arg && arg.getProperties) {
                    const properties = arg.getProperties()
                    properties.map(pro => {
                        const s = pro.getStructure() as PropertyAssignmentStructure;
                        if (s.name === 'default') {
                            code += `@default(value: ${this.trimString(s.initializer as string)}) `;
                        }
                    })
                }
            });
        })
        return code.length > 0 ? code : '';
    }
    trimString(s: string) {
        if (s.includes(`'`)) {
            s = s.replace(`'`, ``)
            s = s.replace(`'`, ``)
            return s.length > 0 ? s : `""`;
        } else {
            return s;
        }
    }
    getType(type: string, decorators: Decorator[]) {
        let code = ``
        switch (type) {
            case 'string':
                code += `String`;
                break;
            case 'number':
                if (isPrimaryGeneratedColumn(decorators)) {
                    code += `ID`
                } else {
                    code += `Int`;
                }
                break;
            case 'boolean':
                code += 'Boolean';
                break;
            case 'Float':
                code += 'Float';
                break;
            case 'ID':
                code += 'ID';
                break;
            case 'Date':
                code += 'DateTime';
                break;
            default:
                if (type.endsWith('[]')) {
                    const tName = type.replace('[]', '');
                    code += `[${transformGraphqlType(tName)}]`;
                } else if (type.includes('|')) {
                    throw new Error(`不支持 ${type} 这种格式的数据，请使用简单类型`)
                } else {
                    code += type;
                }
                break;
        }
        return code;
    }
    getRequire(struct: any) {
        let code = ``
        if (!struct.hasQuestionToken) {
            code += `!`;
        }
        return code;
    }
    getDbName(decorators: Decorator[]) {
        let code = ``
        decorators && decorators.map(dec => {
            const call = dec.getCallExpression();
            const args = call.getArguments();
            args && args.map((arg: ObjectLiteralExpression) => {
                if (arg && arg.getProperties) {
                    const properties = arg.getProperties()
                    properties.map(pro => {
                        const s = pro.getStructure() as PropertyAssignmentStructure;
                        if (s.name === 'name') {
                            // code += `@db(${s.initializer as string}) `;
                        }
                    })
                }
            });
        })
        return code.length > 0 ? code : '';
    }

    getDirective(decorators: Decorator[]) {
        let code = ` `;
        if (isPrimaryGeneratedColumn(decorators)) {
            code += `@id`
        } else if (isPrimaryColumn(decorators)) {
            code += `@unique`
        } else if (isCreateDateColumn(decorators)) {
            code += `@createdAt`
        } else if (isUpdateDateColumn(decorators)) {
            code += `@updatedAt`
        } else if (isOneToOne(decorators)) {
            code += `@relation(link: INLINE)`
        } else if (isManyToMany(decorators)) {
            code += `@relation(link: TABLE)`
        } else if (isOneToMany(decorators)) {
            code += `@relation(link: TABLE)`
        } else if (isManyToOne(decorators)) {
            code += `@relation(link: INLINE)`
        }
        return code;
    }

    /**
     * 创建
     */
    create() {
        return this.code;
        // const struct = this.cls.getStructure();
        // let code = ``;
        // code += createEnum(this._enum);
        // code += createType(this._type)
        // code += `${getDocs(struct)}type ${this.name} @db(${this.tablename}) {\n`;
        // let tableName = ''
        // let isArray = false;
        // this._columns.forEach(column => {




        //     code += `\n`;
        // })
        // code += `}\n`
        // return code;
    }
}

function createType(_type: Map<string, InterfaceDeclaration>, typeName: 'type' | 'input' = 'type') {
    let code = ``;
    _type.forEach((item, name) => {
        code += `\n`;
        const itemS = item.getStructure();
        code += `${getDocs(itemS)}\n${typeName} ${name}{\n`;
        let properties = item.getProperties();
        properties.map(pro => {
            const struct = pro.getStructure();
            code += `${getDocs(struct, true)}\t${struct.name}: `;
            if (struct.type === 'string') {
                code += `String`;
            } else if (struct.type === 'number') {
                code += `Int`;
            } else if (struct.type === 'boolean') {
                code += `Boolean`;
            } else if (struct.type === 'Float') {
                code += `Float`;
            } else if (struct.type === 'ID') {
                code += `ID`;
            } else if ((struct.type as string).endsWith('[]')) {
                const tName = (struct.type as string).replace('[]', '');
                code += `[${transformGraphqlType(tName)}]`;
            } else {
                code += struct.type;
            }
            if (!struct.hasQuestionToken) {
                code += `!`;
            }
            code += `\n`;
        })
        code += `}`;
    });
    return code;
}

function createEnum(_enum: Map<string, EnumDeclaration>) {
    let code = ``;
    _enum.forEach((e, name) => {
        const eSt = e.getStructure();
        code += `${getDocs(eSt)}enum ${name} {\n`
        const members = e.getMembers();
        members.map((m, index) => {
            const struct = m.getStructure();
            code += `${getDocs(struct)}\t${struct.name}\n`
        });
        code += `}\n`
    });
    return code;
}
export class PrismaCreator {
    /**
     * 所有的entites
     */
    static entites: Map<string, PrismaItem> = new Map();

    /**
     * 添加Entity
     * @param cls 
     * @param file 
     * @param project 
     */
    addEntity(cls: ClassDeclaration, file: SourceFile, project: Project) {
        const struct = cls.getStructure();
        const prisma = new PrismaItem(cls, file, project);
        PrismaCreator.entites.set(struct.name, prisma);
    }
    /**
     * 创建代码
     */
    static create(): string {
        let code = ``;
        this.entites.forEach(entity => {
            code += entity.create();
        })
        return code;
    }
}