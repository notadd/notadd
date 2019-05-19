import { ClassDeclaration, SourceFile, Project } from 'ts-morph'
import { isGrpcMethod } from './util'
import { ProtobufCreater } from './protobuf'
export function transformClassDeclarationToProto(cls: ClassDeclaration, file: SourceFile, project: Project, creater: ProtobufCreater) {
    const methods = cls.getMethods();
    const structor = cls.getStructure();
    // 扫描每个方法 根据装饰器生成对应的文件
    methods.forEach(mth => {
        const decorators = mth.getDecorators()
        if (isGrpcMethod(decorators)) {
            creater.createService(structor.name, mth, file, project);
        }
    });
}
