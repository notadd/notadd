
type Name = [string];
type Origain = [string];
type Addon = [string];
type Action = [string];

type Permission = [Name, Origain, Addon, Action];

export interface CasbinPermission {
    ast: {
        policy: Permission[];
    };
    ptype: string;
}