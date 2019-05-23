import { MethodDeclaration, SourceFile, EnumDeclaration, InterfaceDeclaration, Project, MethodDeclarationStructure } from 'ts-morph'
import { clearReturnType, transformProtoType } from './util';
import { upperFirst } from 'lodash';
export class ProtobufCreater {
    static _message: Map<string, InterfaceDeclaration> = new Map();
    static _service: Map<string, Map<string, MethodDeclaration>> = new Map();
    static _enum: Map<string, EnumDeclaration> = new Map();
    createMessage(name: string, file: SourceFile) {
        name = clearReturnType(name)
        if (typeof name === 'string') {
            const inter = file.getInterface(name);
            if (inter) {
                ProtobufCreater._message.set(name, inter);
                // 检查复合对象
                const properties = inter.getProperties();
                properties.map(pro => {
                    const struct = pro.getStructure();
                    const type = struct.type as string;
                    // 检查数组
                    if (type.endsWith('[]')) {
                        const tName = type.replace('[]', '')
                        this.createMessage(tName, file)
                    } else if (type.indexOf('|')) {
                        const types = type.split('|');
                        types.map(t => {
                            this.createMessage(t, file)
                        });
                    } else {
                        this.createMessage(type, file)
                    }
                })
            }
            const _enum = file.getEnum(name);
            if (_enum) {
                ProtobufCreater._enum.set(name, _enum)
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

    static create() {
        let message = ``, service = ``, empty = `message EmptyMessage{}`;
        if (ProtobufCreater._message.size > 0) {
            message += createMessage(ProtobufCreater._message, ProtobufCreater._enum);
        }
        if (ProtobufCreater._service.size > 0) {
            service += createService(ProtobufCreater._service)
        }
        return `syntax = "proto3";\npackage notadd;\n${empty}\n${message}\n${service}\n`
    }
}


function createMessage(_message: Map<string, InterfaceDeclaration>, _enum: Map<string, EnumDeclaration>) {
    let code = ``;
    _message.forEach(item => {
        const structure = item.getStructure();
        code += `message ${structure.name}{\n`
        const properties = item.getProperties();
        properties.map((pro, index) => {
            const struct = pro.getStructure();
            const type = struct.type as string;
            if (type.endsWith('[]')) {
                const tName = (struct.type as string).replace('[]', '')
                const typeName = transformProtoType(tName);
                // 判断是否引入enum
                code += createEnum(_enum, typeName)
                code += `\trepeated ${typeName} ${struct.name} = ${index + 1}`
                code += `;\n`;
            } else {
                // 判断是否引入enum
                const typeName = transformProtoType(struct.type as string);
                code += createEnum(_enum, typeName)
                code += `\t${typeName} ${struct.name} = ${index + 1}`
                code += `;\n`
            }
        })
        code += `}\n`
    })
    return code;
}

function createEnum(_enum: Map<string, EnumDeclaration>, requireName?: string) {
    let code = ``;
    if (requireName) {
        const name = requireName;
        const e = _enum.get(requireName);
        if (e) {
            code += `\tenum ${name} {\n`
            const members = e.getMembers();
            members.map((m, index) => {
                const struct = m.getStructure();
                code += `\t\t${struct.name} = ${index};\n`
            });
            code += `\t}\n`
        }
    } else {
        _enum.forEach((e, name) => {
            code += `enum ${name} {\n`
            const members = e.getMembers();
            members.map((m, index) => {
                const struct = m.getStructure();
                code += `\t${struct.name} = ${index};\n`
            });
            code += `}\n`
        });
    }
    return code;
}

function createService(_service: Map<string, Map<string, MethodDeclaration>>) {
    let code = ``;
    _service.forEach((items, serviceName) => {
        code += `service ${serviceName}{\n`;
        items.forEach(item => {
            const structure = item.getStructure() as MethodDeclarationStructure;
            let parameters = item.getParameters();
            if (parameters.length > 0) {
                code += `\trpc ${upperFirst(structure.name)} (`;
                parameters.map((pro, index) => {
                    const struct = pro.getStructure();
                    code += `${struct.type}`
                    if (index !== parameters.length - 1) {
                        code += `,`
                    }
                })
                code += `) returns (${clearReturnType(structure.returnType)}) {}\n`;
            } else {
                code += `\trpc ${upperFirst(structure.name)}(EmptyMessage) returns (${clearReturnType(structure.returnType)});\n`
            }
        });
        code += `}`
        code += `\n`;
    });
    return code
}
