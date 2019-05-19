import { MethodDeclaration, SourceFile, Project, MethodDeclarationStructure } from 'ts-morph'
export class GraphqlCreater {
    private _query: Map<string, any> = new Map();
    private _mutation: Map<string, any> = new Map();
    private _subscription: Map<string, any> = new Map();
    private _type: Map<string, any> = new Map();
    private _directive: Map<string, any> = new Map();
    private _unions: Map<string, any> = new Map();
    private _inputs: Map<string, any> = new Map();

    createQuery(mth: MethodDeclaration, file: SourceFile, project: Project) {
        const structure = mth.getStructure() as MethodDeclarationStructure;
        const parameters = mth.getParameters();
        parameters.map(par => {
            const structure = par.getStructure();
            this.createInput(structure.type, file)
        });
        this.createType(structure.returnType, file)
        this._query.set(structure.name, structure)
    }
    createInput(name: any, file: SourceFile) {
        name = clearReturnType(name)
        if (typeof name === 'string') {
            const inter = file.getInterface(name);
            if (inter) {
                const struct = inter.getStructure();
                this._inputs.set(struct.name, struct)
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
            this.createInput(structure.type, file)
        });
        this.createType(structure.returnType, file)
        this._mutation.set(structure.name, structure)
    }
    createSubscription(mth: MethodDeclaration, file: SourceFile, project: Project) {
        const structure = mth.getStructure() as MethodDeclarationStructure;
        const parameters = mth.getParameters();
        parameters.map(par => {
            const structure = par.getStructure();
            this.createInput(structure.type, file)
        });
        this.createType(structure.returnType, file)
        this._subscription.set(structure.name, structure)
    }
    create(): string {
        let query = ``, type = ``, mutation = ``, subscription = ``, unions = ``, input = ``;
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
        if (this._inputs) {
            input = createInput(this._inputs)
        }
        return `${type}\n${input}\n${unions}\n${query}\n${mutation}\n${subscription}\n`;
    }
}

export default new GraphqlCreater()

function createInput(_type: Map<string, any>) {
    let code = ``;
    _type.forEach(type => {
        code += `\n`;
        code += `input ${type.name}{\n`
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
                code += `!`
            }
            code += `\n`
        })
        code += `}`;
    });
    return code;
}

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
                code += `${par.name}: ${par.type}`
                if (!par.hasQuestionToken) {
                    code += `!`
                }
                if (index !== parameters.length - 1) {
                    code += `, `
                }
            });
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
                code += `${par.name}: ${par.type}`
                if (!par.hasQuestionToken) {
                    code += `!`
                }
                if (index !== parameters.length - 1) {
                    code += `, `
                }
            });
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
                code += `!`
            }
            code += `\n`
        })
        code += `}`;
    });
    return code;
}

function createQuery(_query: Map<string, any>): string {
    // query
    let code = `type Query {\n`;
    _query.forEach((query: MethodDeclarationStructure) => {
        code += `\t${query.name}`
        const parameters = query.parameters;
        if (parameters.length > 0) {
            code += `(`
            parameters.map((par, index) => {
                code += `${par.name}: ${par.type}`
                if (!par.hasQuestionToken) {
                    code += `!`
                }
                if (index !== parameters.length - 1) {
                    code += `, `
                }
            });
            code += `): ${clearReturnType(query.returnType)}\n`
        } else {
            code += `: ${clearReturnType(query.returnType)}\n`
        }
    })
    code += `}`
    return code
}