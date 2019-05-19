import { MethodDeclaration, SourceFile, InterfaceDeclaration, Project, MethodDeclarationStructure } from 'ts-morph'
import { clearReturnType } from './util';
import { upperFirst } from 'lodash';
export class ProtobufCreater {
    private _message: Map<string, InterfaceDeclaration> = new Map();
    private _service: Map<string, MethodDeclaration> = new Map();
    private _name: string;

    setName(name: string) {
        this._name = name;
    }

    createMessage(name: string, file: SourceFile) {
        name = clearReturnType(name)
        if (typeof name === 'string') {
            const inter = file.getInterface(name);
            if (inter) {
                this._message.set(name, inter)
            }
        }
    }

    createService(mth: MethodDeclaration, file: SourceFile, project: Project) {
        const structure = mth.getStructure() as MethodDeclarationStructure;
        const parameters = mth.getParameters();
        parameters.map(par => {
            const structure = par.getStructure();
            this.createMessage(structure.type as string, file)
        });
        this.createMessage(structure.returnType as string, file)
        this._service.set(structure.name, mth)
    }

    create() {
        let message = ``, service = ``;
        if (this._message.size > 0) {
            message += createMessage(this._message);
        }
        if (this._service.size > 0) {
            service += createService(this._service, this._name)
        }
        return `syntax = "proto3";\npackage ${this._name};\n${message}\n${service}\n`
    }
}

function createMessage(_message: Map<string, InterfaceDeclaration>) {
    let code = ``;
    _message.forEach(item => {
        const structure = item.getStructure();
        code += `message ${structure.name}{\n`
        const properties = item.getProperties();
        properties.map((pro, index) => {
            const struct = pro.getStructure();
            code += `\t${struct.type} ${struct.name} = ${index + 1}`
            code += `;\n`
        })
        code += `}\n`
    })
    return code;
}

function createService(_service: Map<string, MethodDeclaration>, serviceName: string) {
    let code = `service ${serviceName}{\n`;
    _service.forEach(item => {
        const structure = item.getStructure() as MethodDeclarationStructure;
        code += `\trpc ${upperFirst(structure.name)} (`;
        let parameters = item.getParameters();
        parameters.map((pro, index) => {
            const struct = pro.getStructure();
            code += `${struct.type}`
            if (index !== parameters.length - 1) {
                code += `,`
            }
        })
        code += `) returns (${clearReturnType(structure.returnType)});\n`;
    })
    code += `}`
    code += `\n`;
    return code
}
