import { createProject } from './project'
import { transformClassDeclarationToProto } from './transformClassDeclarationToProto';
import { transformClassDeclarationToGraphql } from './transformClassDeclarationToGraphql';
import { GraphqlCreater } from './graphql'
import fs from 'fs';
import { join } from 'path';
const root = process.cwd();
import { ProtobufCreater } from './protobuf';
import { PrismaCreator } from './prisma';
import { transformEntityToPrisma } from './transformEntityToPrisma';
export function build(path: string, output: string) {
    const project = createProject();
    project.addExistingSourceFiles(path)
    const sourceFiles = project.getSourceFiles(path);
    sourceFiles.forEach(file => {
        const classes = file.getClasses();
        // 拿到所有的class
        classes.forEach(cls => {
            const decorators = cls.getDecorators();
            decorators.forEach(dec => {
                const callExp = dec.getCallExpression()
                const expression = callExp.getExpression();
                const text = expression.getText();
                if (text === 'Controller') {
                    // 如果是Controller 解析成proto
                    const creater = new ProtobufCreater();
                    transformClassDeclarationToProto(cls, file, project, creater)
                } else if (text === 'Resolver') {
                    // 如果是Resolver 解析成graphql
                    const creater = new GraphqlCreater();
                    transformClassDeclarationToGraphql(cls, file, project, creater)

                } else if (text === 'Entity') {
                    // 解析Typeorm Entity
                    const creater = new PrismaCreator();
                    transformEntityToPrisma(cls, file, project, creater)
                } else {
                    // 不用处理
                }
                return true;
            })
        });
        const graphql = GraphqlCreater.create();
        fs.writeFileSync(join(root, 'apps/nest-upms/src/main.graphql'), graphql)
        const proto = ProtobufCreater.create();
        fs.writeFileSync(join(root, 'apps/nest-upms/src/main.proto'), proto)
        const prisma = PrismaCreator.create();
        fs.writeFileSync(join(root, 'apps/nest-upms/src/main.prisma'), prisma)
    })
}
