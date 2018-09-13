import 'reflect-metadata';

export const PERMISSION_DEFINITION = '__permission_definition__';

export function Permission(options: { name: string, identify: string, action: 'create' | 'delete' | 'update' | 'find' }) {
    return (target: any, propertyKey: string) => {
        Reflect.defineMetadata(PERMISSION_DEFINITION, options, target, propertyKey);
    };
}