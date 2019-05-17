/*
 * @Author: zhangyan 
 * @Date: 2019-05-15 18:54:56 
 * @Last Modified by:   zhangyan 
 * @Last Modified time: 2019-05-15 18:54:56 
 */



import { PermissionEntity, RoleEntity } from '../../typeorm';

interface BasePermise { }

/**
 * 原始权限定义
 */
export interface IPermission extends BasePermise {
    /**
     * 类型
     */
    ptype: 'permission';
    /**
     * 权限分组
     */
    name: string;
    /**
     * 应用名称
     */
    addon: string;
    /**
     * 执行动作、功能
     */
    action: string;
}
export function isPermission(val: any): val is IPermission {
    return val.ptype && val.ptype === 'permission'
}
/**
 * 原始用户组定义
 */
export interface IRole extends BasePermise {
    /**
     * 类型
     */
    ptype: 'role';
    /**
     * 角色名
     */
    name: string;

    /**
     * 权限名
     */
    permission: string;
}
export function isRole(val: any): val is IRole {
    return val.ptype && val.ptype === 'role'
}
export abstract class CasbinService {
    /**
     * 获取所有角色和角色响应的权限
     * get all role and permission
     */
    abstract getAllRoleWithPermission(): Promise<RoleEntity[]>;
}
