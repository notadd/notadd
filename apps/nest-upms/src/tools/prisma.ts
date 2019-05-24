import { ClassDeclaration, SourceFile, InterfaceDeclaration, EnumDeclaration, PropertyDeclaration, Project } from 'ts-morph'
import { getDocs, clearReturnType, isOneToMany, isManyToOne, isManyToMany, isOneToOne, transformGraphqlType, isUpdateDateColumn, isPrimaryGeneratedColumn, isPrimaryColumn, isCreateDateColumn } from './util'
export class PrismaItem {
    private _columns: Map<string, PropertyDeclaration> = new Map();
    private _enum: Map<string, EnumDeclaration> = new Map();
    private _type: Map<string, InterfaceDeclaration> = new Map();
    private name: string;
    constructor(public cls: ClassDeclaration, public file: SourceFile, public project: Project) {
        const properties = cls.getProperties();
        const struct = cls.getStructure();
        this.name = struct.name;
        properties.map(pro => {
            const sturct = pro.getStructure();
            this._columns.set(sturct.name, pro);
            const type = sturct.type as string;
            this.createType(type, file)
        });
    }

    createType(name: any, file: SourceFile) {
        name = clearReturnType(name)
        if (typeof name === 'string') {
            const inter = file.getInterface(name);
            const _enum = file.getEnum(name);
            if (inter) {
                this._type.set(name, inter)
                const properties = inter.getProperties();
                properties.map(pro => {
                    const struct = pro.getStructure();
                    const type = struct.type as string;
                    // 检查数组
                    if (type.endsWith('[]')) {
                        const tName = type.replace('[]', '')
                        this.createType(tName, file)
                    } else if (type.indexOf('|')) {
                        const types = type.split('|');
                        types.map(t => {
                            this.createType(t, file)
                        });
                    } else {
                        this.createType(type, file)
                    }
                })
            } else if (_enum) {
                this._enum.set(name, _enum);
            } else {
                if (['number', 'string', 'Date'].includes(name)) {

                }
            }
        }
    }
    /**
     * 创建
     */
    create() {
        const struct = this.cls.getStructure();
        let code = ``;
        code += createEnum(this._enum);
        code += createType(this._type)
        code += `${getDocs(struct)}type ${this.name}{\n`;
        let tableName = ''
        this._columns.forEach(column => {
            const struct = column.getStructure();
            code += `${getDocs(struct, true)}\t${struct.name}: `;
            const decorators = column.getDecorators()
            tableName = struct.type as string;
            if (struct.type === 'string') {
                code += `String`;
            } else if (struct.type === 'number') {
                if (isPrimaryGeneratedColumn(decorators)) {
                    code += `ID`
                } else {
                    code += `Int`;
                }
            } else if (struct.type === 'boolean') {
                code += `Boolean`;
            } else if (struct.type === 'Float') {
                code += `Float`;
            } else if (struct.type === 'ID') {
                code += `ID`;
            } else if (struct.type === 'Date') {
                code += `DateTime`
            } else if ((struct.type as string).endsWith('[]')) {
                const tName = (struct.type as string).replace('[]', '');
                code += `[${transformGraphqlType(tName)}]`;
                tableName = transformGraphqlType(tName);
            } else if ((struct.type as string).includes('|')) {
                throw new Error(`不支持 ${struct.type} 这种格式的数据，请使用简单类型`)
            } else {
                code += struct.type;
            }
            if (!struct.hasQuestionToken) {
                code += `!`;
            }
            code += ` `
            if (isPrimaryGeneratedColumn(decorators)) {
                code += `@id`
            } else if (isPrimaryColumn(decorators)) {
                code += ` @unique`
            } else if (isCreateDateColumn(decorators)) {
                code += `@createdAt`
            } else if (isUpdateDateColumn(decorators)) {
                code += `@updatedAt`
            } else if (isOneToOne(decorators)) {
                code += `@relation(name: "${tableName}")`
            } else if (isManyToMany(decorators)) {
                code += `@relation(name: "${tableName}")`
            } else if (isOneToMany(decorators)) {
                code += `@relation(name: "${tableName}")`
            } else if (isManyToOne(decorators)) {
                code += `@relation(name: "${tableName}")`
            }
            code += `\n`;
        })
        code += `}\n`
        return code;
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