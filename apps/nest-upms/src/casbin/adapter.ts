import { CasbinService } from './core/casbin';
import { Adapter, Model, Helper } from 'casbin';
/**
 * 类型 types
 * p 定义权限 (define permission)
 * g 定义角色 (define role)
 */
type PType = 'p' | 'g';
// 名称 (name)
type Subject = string;
// 地址(address) addon.name
type Object = string;
// 操作(action) read,write,all
type Action = string;
// 组织 (origainzation)
type Domain = string;
// 规则(role)
type PolicyDefineRule = [PType, Domain, Subject, Object, Action];
type AddPolicyRule = [Domain, Subject, Object, Action];
type RemovePolicyRule = [Domain, Subject, Object, Action];

export class NgerCasbinAdapter implements Adapter {
    constructor(
        public casbin: CasbinService
    ) { }
    /**
     * 加载(load) Policy
     * 从数据库中查询(from db query)role，permission
     * 组合成(combine) casbin
     * @param model 
     */
    async loadPolicy(model: Model): Promise<void> {
        // 从数据库中查询所有角色和角色对应的权限
        // from db query all role and permission
        const roles = await this.casbin.getAllRoleWithPermission();
        roles.map(role => {
            const { permissions } = role;
            permissions.map(permission => {
                const addon = permission.fromAddon;
                const vals = permission.value;
                vals.map(val => {
                    const line = `p, ${role.name}, ${addon.name}.${permission.name}, ${val}`
                    Helper.loadPolicyLine(line, model);
                });
            });
        });
    }
    /**
     * 保存  save
     * @param model 
     */
    async savePolicy(model: Model): Promise<boolean> {
        // 暂时不支持这样添加权限
        // not use
        return true;
    }
    /**
     * 添加警察
     * @param sec 
     * @param ptype 
     * @param rule 
     */
    async addPolicy(sec: string, ptype: PType, rule: AddPolicyRule): Promise<void> {
        // 保存到数据库
        // save data to db
        return;
    }
    /**
     * 删除警察  delete policy
     * @param sec 
     * @param ptype 
     * @param rule 
     */
    async removePolicy(sec: string, ptype: PType, rule: RemovePolicyRule): Promise<void> {
        // 移除警察 暂时不用实现
        // remove policy 
    }
    /**
     * 条件删除警察
     * remove policy by filter
     * @param sec 
     * @param ptype 
     * @param fieldIndex 
     * @param fieldValues 
     */
    async removeFilteredPolicy(sec: string, ptype: PType, fieldIndex: number, ...fieldValues: string[]): Promise<void> {
        // 条件移除 暂时不用
        // remove by filter
        if (ptype === 'g') {
            // 移除 用户表
            // remove user
        } else {
            // 移除 角色表
            // remove role
        }
    }
}
