import { PermissionService } from '../core/permission.service';
import { InjectRepository } from '@nestjs/typeorm';
import { PermissionEntity } from '../../typeorm';
import { Repository } from 'typeorm';
import { DataError, PermissionIsNullError } from '../errors/error';

export class PermissionServiceImpl extends PermissionService {

    constructor(
        @InjectRepository(PermissionEntity) public readonly permissionRepo: Repository<PermissionEntity>,
    ) { super() }

    /**
     * 添加权限
     * @param permission 添加权限的信息
     */
    async insert(permission: PermissionEntity): Promise<void> {
        if (!(permission.name || permission.pid || permission.type || permission.status)) {
            throw new DataError();
        }
        // 判断type和status的值
        await this.permissionRepo.save(this.permissionRepo.create(permission))
    }

    /**
     * 根据条件获取单个权限信息
     * @param where 查询条件
     */
    async get(where: Partial<PermissionEntity>): Promise<PermissionEntity> {
        if (!where) {
            throw new DataError();
        }
        return await this.permissionRepo.findOne(where);
    }

    /**
     * 更新权限
     * @param permission 更新的权限信息
     * @param where 更新条件
     */
    async save(permission: PermissionEntity, where: Partial<PermissionEntity>): Promise<void> {
        let exist = await this.getPermissionById(where.permission_id);
        if (!exist) {
            throw new PermissionIsNullError();
        }
        if (permission.name) { exist.name = permission.name }
        if (permission.pid) { exist.pid = permission.pid }
        if (permission.value) { exist.value = permission.value }
        if (permission.icon) { exist.icon = permission.icon }
        if (permission.displayorder) { exist.displayorder = permission.displayorder }
        if (permission.status) { exist.status = permission.status }
        await this.permissionRepo.save(exist);
    }

    /**
     * 删除权限
     * @param data 删除的权限信息,根据id删除
     */
    async delete(permission: Partial<PermissionEntity>): Promise<void> {
        if (!(permission || permission.permission_id)) {
            throw new DataError();
        }
        await this.permissionRepo.delete({ permission_id: permission.permission_id });
    }


    /**
     * 根据id查询权限
     * @param permission_id id
     */
    async getPermissionById(permission_id: number): Promise<PermissionEntity> {
        if (!permission_id) {
            throw new DataError();
        }
        return await this.permissionRepo.findOne(permission_id);
    }

    search(where: Partial<PermissionEntity>): Promise<void> {
        throw new Error("Method not implemented.");
    }

}