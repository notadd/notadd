import { PermissionService } from '../core/permission.service';
import { InjectRepository } from '@nestjs/typeorm';
import { PermissionEntity } from '../../typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { PermissionMustDataNullError, PermissionIsNullError, IdIsNullError, PermissionNameExistError } from '../errors/error';

export class PermissionServiceImpl extends PermissionService {

    constructor(
        @InjectRepository(PermissionEntity) public readonly permissionRepo: Repository<PermissionEntity>,
    ) { super() }

    clear(){
        return this.permissionRepo.clear();
    }

    /**
     * 添加权限
     * @param permission 添加权限的信息
     */
    async insert(permission: PermissionEntity) {
        if (!permission.name || !permission.type || !permission.status) {
            throw new PermissionMustDataNullError();
        }
        if (await this.get({ name: permission.name })) {
            throw new PermissionNameExistError();
        }
        // 判断type和status的值
        return await this.permissionRepo.save(this.permissionRepo.create(permission))
    }

    /**
     * 根据条件获取单个权限信息
     * @param where 查询条件
     */
    async get(where: Partial<PermissionEntity>): Promise<PermissionEntity> {
        return await this.permissionRepo.findOne(where);
    }

    /**
     * 更新权限
     * @param permission 更新的权限信息
     * @param where 更新条件
     */
    async save(permission: PermissionEntity, where: Partial<PermissionEntity>) {
        let exist = await this.get(where);
        if (!exist) {
            throw new PermissionIsNullError();
        }
        // 判断数据库中是否已有该权限名
        if (permission.name) { exist.name = permission.name }
        if (permission.pid) { exist.pid = permission.pid }
        if (permission.value) { exist.value = permission.value }
        if (permission.icon) { exist.icon = permission.icon }
        if (permission.displayorder) { exist.displayorder = permission.displayorder }
        if (permission.status) { exist.status = permission.status }
        return await this.permissionRepo.save(exist);
    }

    /**
     * 删除权限
     * @param data 删除的权限信息,根据id删除
     */
    async delete(permission: Partial<PermissionEntity>): Promise<DeleteResult> {
        return await this.permissionRepo.delete({ permission_id: permission.permission_id });
    }

    search(where: Partial<PermissionEntity>): Promise<void> {
        throw new Error("Method not implemented.");
    }

}