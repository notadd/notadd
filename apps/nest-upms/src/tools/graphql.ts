import { MethodDeclaration, SourceFile, InterfaceDeclaration, ParameterDeclaration, Project, MethodDeclarationStructure, EnumDeclaration } from 'ts-morph'
import { clearReturnType, transformGraphqlType } from './util'
export class GraphqlCreater {
    private _query: Map<string, MethodDeclarationStructure> = new Map();
    private _mutation: Map<string, MethodDeclarationStructure> = new Map();
    private _subscription: Map<string, MethodDeclarationStructure> = new Map();
    private _type: Map<string, InterfaceDeclaration> = new Map();
    private _directive: Map<string, any> = new Map();
    private _unions: Map<string, any> = new Map();
    private _inputs: Map<string, InterfaceDeclaration> = new Map();
    private _enum: Map<string, EnumDeclaration> = new Map();
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
                const properties = inter.getProperties();
                properties.map(pro => {
                    const struct = pro.getStructure();
                    const type = struct.type as string;
                    // 检查数组
                    if (type.endsWith('[]')) {
                        const tName = type.replace('[]', '')
                        this.createInput(tName, parameter, file)
                    } else if (type.indexOf('|')) {
                        const types = type.split('|');
                        types.map(t => {
                            this.createInput(t, parameter, file)
                        });
                    } else {
                        this.createInput(type, parameter, file)
                    }
                })
            }
            const _enum = file.getEnum(name);
            if (_enum) {
                this._enum.set(name, _enum);
            }
        }
    }
    createType(name: any, file: SourceFile) {
        name = clearReturnType(name)
        if (typeof name === 'string') {
            const inter = file.getInterface(name);
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
            }
            const _enum = file.getEnum(name);
            if (_enum) {
                this._enum.set(name, _enum);
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
        return `${createEnum(this._enum)}\n${type}\n${input}\n${unions}\n${query}\n${mutation}\n${subscription}\n`;
    }
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

function getDocs(eSt: any, withT: boolean = false) {
    let desc = ``;
    eSt.docs = eSt.docs || [];
    eSt.docs.map(doc => {
        if (typeof doc === 'string') {
            desc += doc;
        } else {
            desc += doc.description
        }
    });
    return desc.length > 0 ? `${withT ? `\t` : ``}"""${desc}"""\n` : ``;
}

function createEnum(_enum: Map<string, EnumDeclaration>) {
    let code = ``;
    _enum.forEach((e, name) => {
        const eSt = e.getStructure();
        code += `${getDocs(eSt)}enum ${name} {\n`
        const members = e.getMembers();
        members.map((m, index) => {
            const struct = m.getStructure();
            code += `\t${getDocs(struct)}\t${struct.name}\n`
        });
        code += `}\n`
    });
    return code;
}
/**
 * subscription
 * @param _subscription 
 */
function createSubscription(_subscription: Map<string, MethodDeclarationStructure>) {
    let code = `type Subscription{\n`;
    _subscription.forEach(sub => {
        code += `\t${getDocs(sub)}\t${sub.name}`
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
function createMutation(_mutation: Map<string, MethodDeclarationStructure>) {
    let code = `type Mutation{\n`;
    _mutation.forEach(muta => {
        code += `\t${getDocs(muta)}\t${muta.name}`
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

function createType(_type: Map<string, InterfaceDeclaration>, typeName: 'type' | 'input' = 'type') {
    let code = ``;
    _type.forEach((item, name) => {
        code += `\n`;
        const itemS = item.getStructure();
        code += `${getDocs(itemS)}${typeName} ${name}{\n`;
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

function createQuery(_query: Map<string, MethodDeclarationStructure>): string {
    // query
    let code = `type Query {\n`;
    _query.forEach((query: MethodDeclarationStructure) => {
        code += `\t${getDocs(query)}\t${query.name}`
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