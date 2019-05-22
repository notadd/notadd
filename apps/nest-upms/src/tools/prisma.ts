import { ClassDeclaration, SourceFile, PropertyDeclaration, Project } from 'ts-morph'
import { getDocs, transformGraphqlType, isPrimaryGeneratedColumn, isPrimaryColumn } from './util'
export class PrismaItem {
    private _columns: Map<string, PropertyDeclaration> = new Map();
    private name: string;
    constructor(public cls: ClassDeclaration, public file: SourceFile, public project: Project) {
        const properties = cls.getProperties();
        const struct = cls.getStructure();
        this.name = struct.name;
        properties.map(pro => {
            const sturct = pro.getStructure();
            this._columns.set(sturct.name, pro);
        });
    }
    /**
     * 创建
     */
    create() {
        const struct = this.cls.getStructure();
        let code = `${getDocs(struct)}type ${this.name}{\n`;
        this._columns.forEach(column => {
            const struct = column.getStructure();
            code += `${getDocs(struct, true)}\t${struct.name}: `;
            const decorators = column.getDecorators()
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
            } else if ((struct.type as string).includes('|')) {
                throw new Error(`不支持 ${struct.type} 这种格式的数据，请使用简单类型`)
            } else {
                code += struct.type;
            }
            if (!struct.hasQuestionToken) {
                code += `!`;
            }
            if (isPrimaryColumn(decorators) || isPrimaryGeneratedColumn(decorators)) {
                code += ` @unique`
            }
            code += `\n`;
        })
        code += `}\n`
        return code;
    }
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