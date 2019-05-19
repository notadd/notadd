import { PermissionService } from '../core/permission.service';
import { InjectRepository } from '@nestjs/typeorm';
import { PermissionEntity } from '../../typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { PermissionMustDataNullError, PermissionIsNullError, PermissionNameExistError } from '../errors/error';

export class PermissionServiceImpl extends PermissionService {

    constructor(
        @InjectRepository(PermissionEntity) public readonly permissionRepo: Repository<PermissionEntity>,
    ) { super() }

    clear() {
        return this.permissionRepo.clear();
    }

    /**
     * 添加权限
     * @param permission 添加权限的信息
     */
    async insert(permission: PermissionEntity) {
        if (!permission.name) {
            throw new PermissionMustDataNullError();
        }
        if (await this.get({ name: permission.name })) {
            throw new PermissionNameExistError();
        }
        // 判断type和status的值
        return await this.permissionRepo.save(this.permissionRepo.create(permission))
    }

    /**
     *Get individual permission information based on criteria
     *@param where query condition
     */ 
    async get(where: Partial<PermissionEntity>): Promise<PermissionEntity> {
        return await this.permissionRepo.findOne(where);
    }

    /**
     *Update permissions
     *@param permission Updated permission information
     *@param where update conditions
     */ 
    async save(permission: PermissionEntity, where: Partial<PermissionEntity>) {
        let exist = await this.get(where);
        if (!exist) {
            throw new PermissionIsNullError();
        }
        //Determine whether the permission name exists in the database 
        if (permission.name) { exist.name = permission.name }
        // if (permission.pid) { exist.pid = permission.pid }
        if (permission.icon) { exist.icon = permission.icon }
        if (permission.displayorder) { exist.displayorder = permission.displayorder }
        if (permission.status) { exist.status = permission.status }
        return await this.permissionRepo.save(exist);
    }

    /**
     *Delete permission
     *@param data Deleted permission information, deleted according to id
     */ 
    async delete(permission: Partial<PermissionEntity>): Promise<DeleteResult> {
        return await this.permissionRepo.delete({ name: permission.name });
    }

    search(where: Partial<PermissionEntity>): Promise<void> {
        throw new Error("Method not implemented.");
    }

}