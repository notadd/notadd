import { CasbinService } from './core/casbin';
import { Adapter, Model, Helper } from 'casbin';
/**
 * 类型
 * p 定义权限
 * g 定义角色
 */
type PType = 'p' | 'g';
// 名称
type Subject = string;
// 地址 addon.name
type Object = string;
// 操作 read,write,all
type Action = string;
// 组织 
type Domain = string;
// 规则
type PolicyDefineRule = [PType, Domain, Subject, Object, Action];
type AddPolicyRule = [Domain, Subject, Object, Action];
type RemovePolicyRule = [Domain, Subject, Object, Action];

export class NgerCasbinAdapter implements Adapter {
    constructor(
        public casbin: CasbinService
    ) { }
    /**
     * 加载Policy
     * 从数据库中查询role，permission
     * 组合成casbin
     * @param model 
     */
    async loadPolicy(model: Model): Promise<void> {
        // 从数据库中查询所有角色和角色对应的权限
        const roles = await this.casbin.getAllRoleWithPermission();
        roles.map(role => {
            const { permissions } = role;
            permissions.map(permission => {
                const addon = permission.fromAddon;
                const vals = permission.value;
                vals.map(val => {
                    const line = `p, ${role.name}, ${addon.name}.${permission.name}, ${val}`
                    Helper.loadPolicyLine(line, model);
                })
            })
        });
    }
    /**
     * 保存
     * @param model 
     */
    async savePolicy(model: Model): Promise<boolean> {
        // 暂时不支持这样添加权限
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
        return;
    }
    /**
     * 删除警察
     * @param sec 
     * @param ptype 
     * @param rule 
     */
    async removePolicy(sec: string, ptype: PType, rule: RemovePolicyRule): Promise<void> {
        // 移除警察
    }
    /**
     * 条件删除警察
     * @param sec 
     * @param ptype 
     * @param fieldIndex 
     * @param fieldValues 
     */
    async removeFilteredPolicy(sec: string, ptype: PType, fieldIndex: number, ...fieldValues: string[]): Promise<void> {
        // 条件移除
        if (ptype === 'g') {
            // 移除 用户表
        } else {
            // 移除 角色表
        }
    }
}
