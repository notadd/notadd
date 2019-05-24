import { Decorator } from 'ts-morph'
export const isQueryDecorator = isDecorator('Query');
export const isMutationDecorator = isDecorator('Mutation');
export const isSubscription = isDecorator('Subscription')
export const isGrpcMethod = isDecorator('GrpcMethod');

/**
 * typeorm
 */
export const isEntity = isDecorator('Entity');
export const isColumn = isDecorator('Column');
export const isPrimaryGeneratedColumn = isDecorator('PrimaryGeneratedColumn');
export const isPrimaryColumn = isDecorator('PrimaryColumn');
export const isCreateDateColumn = isDecorator('CreateDateColumn');
export const isUpdateDateColumn = isDecorator('UpdateDateColumn');
export const isOneToOne = isDecorator('OneToOne');
export const isOneToMany = isDecorator('OneToMany');
export const isManyToOne = isDecorator('ManyToOne');
export const isManyToMany = isDecorator('ManyToMany');

export function getDocs(eSt: any, withT: boolean = false) {
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