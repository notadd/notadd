import { ClassDeclaration, SourceFile, Project } from 'ts-morph'
import { GraphqlCreater } from './graphql'
import { isQueryDecorator, isMutationDecorator, isSubscription } from './util'
export function transformClassDeclarationToGraphql(cls: ClassDeclaration, file: SourceFile, project: Project, creater: GraphqlCreater) {
    const methods = cls.getMethods();
    // 扫描每个方法 根据装饰器生成对应的文件
    methods.forEach(mth => {
        const decorators = mth.getDecorators()
        if (isQueryDecorator(decorators)) {
            // 创建Query
            creater.createQuery(mth, file, project)
        }
        else if (isMutationDecorator(decorators)) {
            // 创建Mutation
            creater.createMutation(mth, file, project)
        }
        else if (isSubscription(decorators)) {
            // 创建Subscription
            creater.createSubscription(mth, file, project)
        } else {
            // 啥都不做
        }
    })
}
