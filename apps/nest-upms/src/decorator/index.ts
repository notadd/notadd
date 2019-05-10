export interface Permission {
    // 名称
    name: string;
    // 类型 
    type: number;
    // 值
    permission_value: string;
}

export interface PermissionDecorator {
    new(): Permission;
    (): Permission;
}

export const Permission = () => { }

