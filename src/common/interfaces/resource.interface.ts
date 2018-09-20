import { Permission } from './permission.interface';

export interface Resource {
    name: string;
    readonly identify: string;
    permissions: Permission[];
}