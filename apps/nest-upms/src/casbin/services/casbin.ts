import { CasbinService } from '../core/casbin';
import { RoleEntity } from '../../typeorm';
export class CasbinServiceImpl extends CasbinService {
    /**
     * 获取所有角色和角色响应的权限
     * get all role and permission
     */
    async getAllRoleWithPermission(): Promise<RoleEntity[]> { 
        return []
    }
}