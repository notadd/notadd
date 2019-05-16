import { CasbinService, IPermission, IRole, isPermission } from './core/casbin';
import { Adapter, Model, Helper } from 'casbin';

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
                permission.from_addon_id
            })
        });
        for (const role of roles) {
            const police = await this.casbin.transformPermissionToPolicy(permission)
            this._loadPolicyLine(police, model);
        }
    }
    /**
     * 格式转换并加载
     * @param permission 
     * @param model 
     */
    private _loadPolicyLine(val: IPermission | IRole, model: Model) {
        if (isPermission(val)) {
            const result = `p,` + [val.name, val.addon, val.addon, val.action].filter(n => n).join(', ');
            Helper.loadPolicyLine(result, model);
        } else {
            const result = `g, ${val.name},${val.permission}`;
            Helper.loadPolicyLine(result, model);
        }
    }
    /**
     * 保存
     * @param model 
     */
    async savePolicy(model: Model): Promise<boolean> {
        await this.casbin.clearTable();
        /**
         * 保存权限
         */
        let permissions = model.model.get('p');
        for (const [ptype, ast] of permissions) {
            for (const rule of ast.policy) {
                await Promise.all(rule.map(async r => {
                    const permission = await this.casbin.getPermissionByRule(r)
                    await this.casbin.savePermission(permission);
                }))
            }
        }
        /**
         * 保存角色
         */
        let roles = model.model.get('g');
        for (const [ptype, ast] of roles) {
            for (const rule of ast.policy) {
                await Promise.all(rule.map(async r => {
                    const role = await this.casbin.getRoleByRule(r)
                    await this.casbin.saveRole(role);
                }))
            }
        }
        return true;
    }
    /**
     * 添加警察
     * @param sec 
     * @param ptype 
     * @param rule 
     */
    async addPolicy(sec: string, ptype: 'permission' | 'role', rule: string[]): Promise<void> {
        if (ptype === 'permission') {
            await Promise.all(rule.map(async r => {
                const permission = await this.casbin.getPermissionByRule(r)
                await this.casbin.savePermission(permission);
            }));
        } else {
            await Promise.all(rule.map(async r => {
                const role = await this.casbin.getRoleByRule(r)
                await this.casbin.saveRole(role);
            }))
        }
    }
    /**
     * 删除警察
     * @param sec 
     * @param ptype 
     * @param rule 
     */
    async removePolicy(sec: string, ptype: 'permission' | 'role', rule: string[]): Promise<void> {
        return this.casbin.removeRoleByName()
        return await this.casbin.removePolicy(sec, ptype, rule)
    }
    /**
     * 条件删除警察
     * @param sec 
     * @param ptype 
     * @param fieldIndex 
     * @param fieldValues 
     */
    async removeFilteredPolicy(sec: string, ptype: string, fieldIndex: number, ...fieldValues: string[]): Promise<void> {
        return await this.casbin.removeFilteredPolicy(sec, ptype, fieldIndex, ...fieldValues);
    }
}
