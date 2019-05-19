import { MethodDeclaration, SourceFile, Project, MethodDeclarationStructure } from 'ts-morph'
export class GraphqlCreater {
    private _query: any[] = [];
    private _mutation: any[] = [];
    private _subscription: any[] = [];
    private _type: any[] = [];
    private _directive: any[] = [];
    private _unions: any[] = [];


    createQuery(mth: MethodDeclaration, file: SourceFile, project: Project) {
        const structure = mth.getStructure();
        const parameters = mth.getParameters();
        parameters.map(par => {
            const structure = par.getStructure();
            this.createType(structure.type, file)
        });
        this.createType(structure.returnType, file)
        this._query.push(structure)
    }
    createType(name: any, file: SourceFile) {
        name = clearReturnType(name)
        if (typeof name === 'string') {
            const inter = file.getInterface(name);
            if (inter) {
                const struct = inter.getStructure();
                this._type.push(struct)
            } else {
                const type = file.getTypeAlias(name);
                if (type) {
                    const str = type.getStructure();
                    const strs = (str.type as string).split('|').map(str => str.trim())
                    strs.map(s => this.createType(s, file))
                    this._unions.push(str);
                }
            }
        }
    }
    createMutation(mth: MethodDeclaration, file: SourceFile, project: Project) {
        const structure = mth.getStructure();
        const parameters = mth.getParameters();
        parameters.map(par => {
            const structure = par.getStructure();
            this.createType(structure.type, file)
        });
        this.createType(structure.returnType, file)
        this._mutation.push(structure)
    }
    createSubscription(mth: MethodDeclaration, file: SourceFile, project: Project) {
        const structure = mth.getStructure();
        const parameters = mth.getParameters();
        parameters.map(par => {
            const structure = par.getStructure();
            this.createType(structure.type, file)
        });
        this.createType(structure.returnType, file)
        this._subscription.push(structure)
    }
    create(): string {
        const query = createQuery(this._query);
        const type = createType(this._type);
        const mutation = createMutation(this._mutation)
        const subscription = createSubscription(this._subscription)
        const unions = createUnion(this._unions)
        return `${type}\n${unions}\n${query}\n${mutation}\n${subscription}\n`;
    }
}

export default new GraphqlCreater()

function clearReturnType(type: any) {
    if (typeof type === 'string') {
        return type.replace(/.*<(.*?)>/, '$1')
    }
    return type;
}

function createUnion(_unions: any[]) {
    let code = ``
    _unions.map(union => {
        code += `union ${union.name} = ${union.type}`
    });
    return code;
}

function createSubscription(_subscription: any[]) {
    let code = `type Subscription{\n`;
    _subscription.map(sub => {
        code += `\t${sub.name}`
        const parameters = sub.parameters;
        if (parameters.length > 0) {
            code += `(`
            parameters.map(par => {
                code += `${par.name}: ${par.type},\n`
            })
            code += `): ${clearReturnType(sub.returnType)}\n`
        } else {
            code += `: ${clearReturnType(sub.returnType)}\n`
        }
    });
    code += `}`
    return code;
}

function createMutation(_mutation: any[]) {
    let code = `type Mutation{\n`;
    _mutation.map(muta => {
        code += `\t${muta.name}`
        const parameters = muta.parameters;
        if (parameters.length > 0) {
            code += `(`
            parameters.map(par => {
                code += `${par.name}: ${par.type},`
            })
            code += `): ${clearReturnType(muta.returnType)}\n`
        } else {
            code += `: ${clearReturnType(muta.returnType)}\n`
        }
    });
    code += `}`;
    return code;
}

function createType(_type: any[]) {
    let code = ``;
    _type.map(type => {
        code += `\n`;
        code += `type ${type.name}{\n`
        const properties = type.properties;
        properties.map(pro => {
            code += `\t${pro.name}: `;
            if (pro.type === 'string') {
                code += `String`
            } else if (pro.type === 'number') {
                code += `Int`
            } else if (pro.type === 'boolean') {
                code += `Boolean`
            } else if (pro.type === 'Float') {
                code += `Float`
            } else if (pro.type === 'ID') {
                code += `ID`
            } else {
                debugger;
            }
            if (!pro.hasQuestionToken) {
                code += `!\n`
            }
        })
        code += `}`;
    });
    return code;
}

function createQuery(_query: any[]): string {
    // query
    let code = `type Query {\n`;
    _query.map((query: MethodDeclarationStructure) => {
        if (query.parameters.length > 0) {
            code += `\t${query.name}(${query.parameters.map(par => {
                return `${par.name}:${par.type}`
            })}):${clearReturnType(query.returnType)}\n`;
        } else {
            code += `\t${query.name}:${clearReturnType(query.returnType)}\n`;
        }
    })
    code += `}`
    return code
}