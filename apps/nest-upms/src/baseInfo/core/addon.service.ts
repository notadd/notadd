import { BaseService } from './base.service'
import { AddonEntity } from '../../typeorm';
export abstract class AddonService extends BaseService<AddonEntity> {
    /**
     * 给应用添加权限
     * @returns Promise
     */
    abstract addPermission(): Promise<void>;
    /**
    * 给应用减权限
    * @returns Promise
    */
    abstract removePermission(): Promise<void>;

    /**
     * 批量给应用添加权限
     * @returns Promise
     */
    abstract addPermissions(): Promise<void>;
    /**
    * 批量给应用减权限
    * @returns Promise
    */
    abstract removePermissions(): Promise<void>;
}