import { Model, Helper } from 'casbin';
import { CasbinAdapter } from './core/adapter';
import { PermissionService, ITransformPermissionToPolicyResult } from './core/permission';

export class NgerCasbinAdapter extends CasbinAdapter {
    constructor(
        public permission: PermissionService
    ) {
        super();
    }
    /**
     * 加载Policy
     * @param model 
     */
    async loadPolicy(model: Model): Promise<void> {
        const permissions = await this.permission.getAllPermission();
        for (const permission of permissions) {
            const police = await this.permission.transformPermissionToPolicy(permission)
            this._loadPolicyLine(police, model);
        }
    }
    /**
     * 格式转换并加载
     * @param permission 
     * @param model 
     */
    private _loadPolicyLine(permission: ITransformPermissionToPolicyResult, model: Model) {
        const result = permission.name + ', ' + [permission.name, permission.addon, permission.addon, permission.action].filter(n => n).join(', ');
        Helper.loadPolicyLine(result, model);
    }
    /**
     * 保存
     * @param model 
     */
    async savePolicy(model: Model): Promise<boolean> {
        return true;
    }

    async addPolicy(sec: string, ptype: string, rule: string[]): Promise<void> { }
    async removePolicy(sec: string, ptype: string, rule: string[]): Promise<void> { }
    async removeFilteredPolicy(sec: string, ptype: string, fieldIndex: number, ...fieldValues: string[]): Promise<void> { }
}
