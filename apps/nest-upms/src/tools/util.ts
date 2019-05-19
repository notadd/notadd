import { Decorator } from 'ts-morph'
export const isQueryDecorator = isDecorator('Query');
export const isMutationDecorator = isDecorator('Mutation');
export const isSubscription = isDecorator('Subscription')
export const isGrpcMethod = isDecorator('GrpcMethod');
export function isDecorator(name: string) {
    return (decorators: Decorator[]): boolean => {
        return !!decorators.find(dec => {
            const call = dec.getCallExpression();
            const exp = call.getExpression();
            return exp.getText() === name;
        })
    }
}


/**
 * return
 */
export function clearReturnType(type: any) {
    if (typeof type === 'string') {
        return type.replace(/.*<(.*?)>/, '$1')
    }
    return type;
}

export function transformType(type: string) {
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