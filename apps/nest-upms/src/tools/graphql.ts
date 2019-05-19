import { MethodDeclaration, SourceFile, Project, MethodDeclarationStructure } from 'ts-morph'
export class GraphqlCreater {
    private _query: Map<string, any> = new Map();
    private _mutation: Map<string, any> = new Map();
    private _subscription: Map<string, any> = new Map();
    private _type: Map<string, any> = new Map();
    private _directive: Map<string, any> = new Map();
    private _unions: Map<string, any> = new Map();

    createQuery(mth: MethodDeclaration, file: SourceFile, project: Project) {
        const structure = mth.getStructure() as MethodDeclarationStructure;
        const parameters = mth.getParameters();
        parameters.map(par => {
            const structure = par.getStructure();
            this.createType(structure.type, file)
        });
        this.createType(structure.returnType, file)
        this._query.set(structure.name, structure)
    }
    createType(name: any, file: SourceFile) {
        name = clearReturnType(name)
        if (typeof name === 'string') {
            const inter = file.getInterface(name);
            if (inter) {
                const struct = inter.getStructure();
                this._type.set(struct.name, struct)
            } else {
                const type = file.getTypeAlias(name);
                if (type) {
                    const str = type.getStructure();
                    const strs = (str.type as string).split('|').map(str => str.trim())
                    strs.map(s => this.createType(s, file))
                    this._unions.set(str.name, str);
                }
            }
        }
    }
    createMutation(mth: MethodDeclaration, file: SourceFile, project: Project) {
        const structure = mth.getStructure() as MethodDeclarationStructure;
        const parameters = mth.getParameters();
        parameters.map(par => {
            const structure = par.getStructure();
            this.createType(structure.type, file)
        });
        this.createType(structure.returnType, file)
        this._mutation.set(structure.name, structure)
    }
    createSubscription(mth: MethodDeclaration, file: SourceFile, project: Project) {
        const structure = mth.getStructure() as MethodDeclarationStructure;
        const parameters = mth.getParameters();
        parameters.map(par => {
            const structure = par.getStructure();
            this.createType(structure.type, file)
        });
        this.createType(structure.returnType, file)
        this._subscription.set(structure.name, structure)
    }
    create(): string {
        let query = ``, type = ``, mutation = ``, subscription = ``, unions = ``;
        if (this._query.size > 0) {
            query = createQuery(this._query);
        }
        if (this._type.size > 0) {
            type = createType(this._type);
        }
        if (this._mutation.size > 0) {
            mutation = createMutation(this._mutation);
        }
        if (this._subscription.size > 0) {
            subscription = createSubscription(this._subscription);
        }
        if (this._unions) {
            unions = createUnion(this._unions);
        }
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

function createUnion(_unions: Map<string, any>) {
    let code = ``
    _unions.forEach(union => {
        code += `union ${union.name} = ${union.type}`
    });
    return code;
}

function createSubscription(_subscription: Map<string, any>) {
    let code = `type Subscription{\n`;
    _subscription.forEach(sub => {
        code += `\t${sub.name}`
        const parameters = sub.parameters;
        if (parameters.length > 0) {
            code += `(`
            parameters.map((par, index) => {
                if (index === parameters.length - 1) {
                    code += `${par.name}: ${par.type}`
                } else {
                    code += `${par.name}: ${par.type}, `
                }
            })
            code += `): ${clearReturnType(sub.returnType)}\n`
        } else {
            code += `: ${clearReturnType(sub.returnType)}\n`
        }
    });
    code += `}`
    return code;
}

function createMutation(_mutation: Map<string, any>) {
    let code = `type Mutation{\n`;
    _mutation.forEach(muta => {
        code += `\t${muta.name}`
        const parameters = muta.parameters;
        if (parameters.length > 0) {
            code += `(`
            parameters.map((par, index) => {
                if (index === parameters.length - 1) {
                    code += `${par.name}: ${par.type}`
                } else {
                    code += `${par.name}: ${par.type}, `
                }
            })
            code += `): ${clearReturnType(muta.returnType)}\n`
        } else {
            code += `: ${clearReturnType(muta.returnType)}\n`
        }
    });
    code += `}`;
    return code;
}

function createType(_type: Map<string, any>) {
    let code = ``;
    _type.forEach(type => {
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

function createQuery(_query: Map<string, any>): string {
    // query
    let code = `type Query {\n`;
    _query.forEach((query: MethodDeclarationStructure) => {
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