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
     * 权限数据获取
     * @param permission 
     */
    abstract transformPermissionToPolicy(permission: PermissionEntity): Promise<IPermission | IRole>;
    /**
     * 获取所有权限
     */
    abstract getAllPermission(): Promise<PermissionEntity[]>;

    /**
     * 清空数据表
     */
    abstract clearTable(): Promise<void>;


    /**
     * 从rule获取权限
     * @param rule 
     */
    abstract getPermissionByRule(rule: string): Promise<PermissionEntity>;

    /**
     * 保存权限
     * @param {PermissionEntity} permission 
     */
    abstract savePermission(permission: PermissionEntity): Promise<void>;

    /**
    * 从rule获取权限
    * @param rule 
    */
    abstract getRoleByRule(rule: string): Promise<RoleEntity>;

    /**
     * 保存角色
     * @param {RoleEntity} permission 
     */
    abstract saveRole(role: RoleEntity): Promise<void>;

    /**
     * 移除角色
     * @param role 
     */
    abstract removeRoleByName(name: string): Promise<void>;
    /**
     * 移除警察
     * @param sec 
     * @param ptype 
     * @param rule 
     */
    abstract removePolicy(sec: string, ptype: string, rule: string[]): Promise<any>;
    /**
     * 条件移除警察
     * @param sec 
     * @param ptype 
     * @param fieldIndex 
     * @param fieldValues 
     */
    abstract removeFilteredPolicy(sec: string, ptype: string, fieldIndex: number, ...fieldValues: string[]): Promise<any>;
}

