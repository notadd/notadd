/*
 * @Author: lijiansheng 
 * @Date: 2019-05-15 18:53:47 
 * @Last Modified by:   lijiansheng 
 * @Last Modified time: 2019-05-15 18:53:47 
 */

import { CasbinService, IPermission, IRole } from '../core/casbin';
import { PermissionEntity, RoleEntity } from '../../typeorm';

export class CasbinServiceImpl extends CasbinService {

    /**
     * 权限数据获取
     * @param permission 
     */
    transformPermissionToPolicy(permission: PermissionEntity): Promise<IPermission | IRole> {
        return null;
    }

    /**
     * 获取所有权限
     */
    getAllPermission(): Promise<PermissionEntity[]> {
        return null;
    }

    /**
     * 清空数据表
     */
    clearTable(): Promise<void> {
        return null;
    }

    /**
     * 从rule获取权限
     * @param rule 
     */
    getPermissionByRule(rule: string): Promise<PermissionEntity> {
        return null;
    }

    /**
     * 保存权限
     * @param {PermissionEntity} permission 
     */
    savePermission(permission: PermissionEntity): Promise<void> {
        return null;
    }

    /**
    * 从rule获取权限
    * @param rule 
    */
    getRoleByRule(rule: string): Promise<RoleEntity> {
        return null;
    }

    /**
     * 保存角色
     * @param {RoleEntity} permission 
     */
    saveRole(role: RoleEntity): Promise<void> {
        return null;
    }

    /**
    * 移除角色
    * @param role 
    */
    removeRoleByName(name: string): Promise<void> {
        return null;
    }

    /**
    * 移除警察
     * @param sec 
     * @param ptype 
     * @param rule 
     */
    removePolicy(sec: string, ptype: string, rule: string[]): Promise<any> {
        return null;
    }

    /**
     * 条件移除警察
     * @param sec 
     * @param ptype 
     * @param fieldIndex 
     * @param fieldValues 
     */
    removeFilteredPolicy(sec: string, ptype: string, fieldIndex: number, ...fieldValues: string[]): Promise<any> {
        return null;
    }


}