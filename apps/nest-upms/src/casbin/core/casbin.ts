import { RoleEntity } from '../../typeorm';
export abstract class CasbinService {
    /**
     * 获取所有角色和角色响应的权限
     */
    abstract getAllRoleWithPermission(): Promise<RoleEntity[]>;
}
