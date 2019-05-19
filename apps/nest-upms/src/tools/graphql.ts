import { MethodDeclaration, SourceFile, InterfaceDeclaration, ParameterDeclaration, Project, MethodDeclarationStructure } from 'ts-morph'
export class GraphqlCreater {
    private _query: Map<string, any> = new Map();
    private _mutation: Map<string, any> = new Map();
    private _subscription: Map<string, any> = new Map();
    private _type: Map<string, InterfaceDeclaration> = new Map();
    private _directive: Map<string, any> = new Map();
    private _unions: Map<string, any> = new Map();
    private _inputs: Map<string, any> = new Map();

    createQuery(mth: MethodDeclaration, file: SourceFile, project: Project) {
        const structure = mth.getStructure() as MethodDeclarationStructure;
        const parameters = mth.getParameters();
        parameters.map(par => {
            const structure = par.getStructure();
            this.createInput(structure.type, par, file)
        });
        this.createType(structure.returnType, file)
        this._query.set(structure.name, structure)
    }
    createInput(name: any, parameter: ParameterDeclaration, file: SourceFile) {
        name = clearReturnType(name)
        if (typeof name === 'string') {
            const inter = file.getInterface(name);
            if (inter) {
                this._inputs.set(name, inter)
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
                this._type.set(name, inter)
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
            this.createInput(structure.type, par, file)
        });
        this.createType(structure.returnType, file)
        this._mutation.set(structure.name, structure)
    }
    createSubscription(mth: MethodDeclaration, file: SourceFile, project: Project) {
        const structure = mth.getStructure() as MethodDeclarationStructure;
        const parameters = mth.getParameters();
        parameters.map(par => {
            const structure = par.getStructure();
            this.createInput(structure.type, par, file)
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

/**
 * return
 */
function clearReturnType(type: any) {
    if (typeof type === 'string') {
        return type.replace(/.*<(.*?)>/, '$1')
    }
    return type;
}
/**
 * union
 * @param _unions 
 */
function createUnion(_unions: Map<string, any>) {
    let code = ``
    _unions.forEach(union => {
        code += `union ${union.name} = ${union.type}`
    });
    return code;
}
/**
 * subscription
 * @param _subscription 
 */
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
/**
 * mutation
 * @param _mutation 
 */
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
/**
 * input
 * @param _type 
 */
function createInput(_type: Map<string, InterfaceDeclaration>) {
    return createType(_type, 'input')
}

function transformType(type: string) {
    switch (type) {
        case "string":
        case "String":
            return "String";
        case "number":
        case "Number":
            return "Int";
        case "boolean":
        case "Boolean":
            return "Boolean";
        default:
            return type;
    }
}
function createType(_type: Map<string, InterfaceDeclaration>, typeName: 'type' | 'input' = 'type') {
    let code = ``;
    _type.forEach((item, name) => {
        code += `\n`;
        code += `${typeName} ${name}{\n`;
        let properties = item.getProperties();
        properties.map(pro => {
            const struct = pro.getStructure();
            code += `\t${struct.name}: `;
            if (struct.type === 'string') {
                code += `String`
            } else if (struct.type === 'number') {
                code += `Int`
            } else if (struct.type === 'boolean') {
                code += `Boolean`
            } else if (struct.type === 'Float') {
                code += `Float`
            } else if (struct.type === 'ID') {
                code += `ID`
            } else if ((struct.type as string).endsWith('[]')) {
                const tName = (struct.type as string).replace('[]', '')
                code += `[${transformType(tName)}]`
            } else {
                debugger;
            }
            if (!struct.hasQuestionToken) {
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