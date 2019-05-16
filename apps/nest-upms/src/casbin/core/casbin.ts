import { RoleEntity } from '../../typeorm';
export abstract class CasbinService {
    /**
     * 获取所有角色和角色响应的权限
     * get all role and permission
     */
    abstract getAllRoleWithPermission(): Promise<RoleEntity[]>;
}