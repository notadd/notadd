import { PermissionEntity } from '../../typeorm';

export interface ITransformPermissionToPolicyResult {
    name: string;
    addon: string;
    action: string;
}
export abstract class PermissionService {
    /**
     * 权限数据获取
     * @param permission 
     */
    abstract transformPermissionToPolicy(permission: PermissionEntity): Promise<ITransformPermissionToPolicyResult>;

    /**
     * 获取所有权限
     */
    abstract getAllPermission(): Promise<PermissionEntity[]>;
}

