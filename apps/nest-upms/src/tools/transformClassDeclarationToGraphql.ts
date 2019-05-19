import { ClassDeclaration, SourceFile, Project, Decorator } from 'ts-morph'
import creater from './graphql'
export function transformClassDeclarationToGraphql(cls: ClassDeclaration, file: SourceFile, project: Project) {
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
export const isQueryDecorator = isDecorator('Query');
export const isMutationDecorator = isDecorator('Mutation');
export const isSubscription = isDecorator('Subscription')
export function isDecorator(name: string) {
    return (decorators: Decorator[]): boolean => {
        return !!decorators.find(dec => {
            const call = dec.getCallExpression();
            const exp = call.getExpression();
            return exp.getText() === name;
        })
    }
}