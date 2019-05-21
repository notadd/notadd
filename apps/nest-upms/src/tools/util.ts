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


export function transformProtoType(type: string) {
    switch (type) {
        case 'number':
        case 'Number':
            return 'int32';
        case 'any':
            return 'Any';
        case 'boolean':
        case 'Boolean':
            return 'bool';
        case 'Float':
            return 'float';
        case "ID":
        case "Int32":
            return 'int32';
        case 'Int64':
            return 'int64';
        case 'Uint32':
            return 'unit32';
        case 'Uint64':
            return 'unit64';
        case 'Sint32':
            return 'sint32';
        case 'Sint64':
            return 'sint64';
        case 'Fixed32':
            return 'fixed32';
        case 'Fixed64':
            return 'fixed64';
        case 'Sfixed32':
            return 'sfixed32';
        case 'Sfixed64':
            return 'sfixed64';
        case 'Bytes':
            return 'bytes';
        case 'Double':
            return 'double';
        default:
            return type;
    }
}

export function transformGraphqlType(type: string) {
    switch (type) {
        case "string":
        case "String":
            return "String";
        case "Int32":
        case 'Int64':
        case "number":
        case "Number":
        case 'Uint32':
        case 'Uint64':
        case 'Sint32':
        case 'Sint64':
            return "Int";
        case "ID":
            return 'ID';
        case 'Sfixed32':
        case 'Sfixed64':
        case 'Fixed32':
        case 'Fixed64':
        case 'Float':
            return 'Float';
        case "boolean":
        case "Boolean":
            return "Boolean";
        default:
            return type;
    }
}