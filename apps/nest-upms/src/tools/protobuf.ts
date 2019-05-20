import { MethodDeclaration, SourceFile, InterfaceDeclaration, Project, MethodDeclarationStructure } from 'ts-morph'
import { clearReturnType } from './util';
import { upperFirst } from 'lodash';
export class ProtobufCreater {
    static _message: Map<string, InterfaceDeclaration> = new Map();
    static _service: Map<string, Map<string, MethodDeclaration>> = new Map();

    createMessage(name: string, file: SourceFile) {
        name = clearReturnType(name)
        if (typeof name === 'string') {
            const inter = file.getInterface(name);
            if (inter) {
                ProtobufCreater._message.set(name, inter)
            }
        }
    }

    createService(name: string, mth: MethodDeclaration, file: SourceFile, project: Project) {
        const structure = mth.getStructure() as MethodDeclarationStructure;
        const parameters = mth.getParameters();
        parameters.map(par => {
            const structure = par.getStructure();
            this.createMessage(structure.type as string, file)
        });
        this.createMessage(structure.returnType as string, file)
        const service = ProtobufCreater._service.get(name) || new Map();
        service.set(structure.name, mth)
        ProtobufCreater._service.set(name, service)
    }

    create() {
        let message = ``, service = ``;
        if (ProtobufCreater._message.size > 0) {
            message += createMessage(ProtobufCreater._message);
        }
        if (ProtobufCreater._service.size > 0) {
            service += createService(ProtobufCreater._service)
        }
        return `syntax = "proto3";\npackage notadd;\n${message}\n${service}\n`
    }
}

function transformType(type: string) {
    switch (type) {
        case 'number':
            return 'int32';
        default:
            return type;
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
            if ((struct.type as string).endsWith('[]')) {
                const tName = (struct.type as string).replace('[]', '')
                code += `repeat ${transformType(tName)}`
            } else {
                code += `\t${transformType(struct.type as string)} ${struct.name} = ${index + 1}`
                code += `;\n`
            }
        })
        code += `}\n`
    })
    return code;
}

function createService(_service: Map<string, Map<string, MethodDeclaration>>) {
    let code = ``;
    _service.forEach((items, serviceName) => {
        code += `service ${serviceName}{\n`;
        items.forEach(item => {
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
        });
        code += `}`
        code += `\n`;
    });
    return code
}
