/*
 * @Author: lijiansheng 
 * @Date: 2019-05-15 18:53:47 
 * @Last Modified by: lijiansheng
 * @Last Modified time: 2019-05-16 15:38:40
 */

import { CasbinService } from '../core/casbin';
import { RoleEntity, PermissionEntity, RolePermissionEntity, AddonPermissionEntity, AddonEntity } from '../../typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export class CasbinServiceImpl extends CasbinService {

    constructor(
        @InjectRepository(RoleEntity) public readonly roleRepo: Repository<RoleEntity>,
        @InjectRepository(PermissionEntity) public readonly perRepo: Repository<PermissionEntity>,
        @InjectRepository(AddonEntity) public readonly addonRepo: Repository<AddonEntity>,
        @InjectRepository(RolePermissionEntity) public readonly rolePerRepo: Repository<RolePermissionEntity>,
        @InjectRepository(AddonPermissionEntity) public readonly addonPerRepo: Repository<AddonPermissionEntity>,
    ) { super() }

    async getAllRoleWithPermission(): Promise<RoleEntity[]> {
        // 临时
        let roles = await this.roleRepo.find();
        for (let role of roles) {
            // 拿到角色对应的权限id
            let permissionIds = await this.rolePerRepo.find({ where: { role_id: role.role_id }});
            // 根据权限id查询对应权限
            for (let perId of permissionIds) {
                let permission = await this.perRepo.findOne({ where: { role_id: perId.role_id } })
                // 根据权限id查询该权限所有应用的id
                let addonIds = await this.addonPerRepo.find({ where: { permission_id: permission } })
                for (let addonId of addonIds) {
                    let addon = await this.addonRepo.findOne({ where: { appid: addonId } })
                    // 将应用存入权限
                    permission.addons.push(addon);
                }
                // 将权限放入角色
                role.permissions.push(permission);
            }
        }
        return roles;
    }

}