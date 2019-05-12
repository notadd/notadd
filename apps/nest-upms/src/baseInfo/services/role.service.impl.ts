
import { RoleEntity, PermissionEntity } from '../../typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoleService } from '../core/role.service';
import { DataError, RoleExistError, RoleNoExistError } from '../errors/role.error';

export class RoleServiceIpml extends RoleService {
    constructor(
        @InjectRepository(RoleEntity) private readonly roleRepo: Repository<RoleEntity>,
        @InjectRepository(PermissionEntity) private readonly permissionRepo: Repository<PermissionEntity>
    ) { super() }
    /**
         * 添加角色
         * @param role 
         */
    async insert(role: RoleEntity): Promise<void> {
        if (!role.name || !role.create_time || !role.update_time) {
            throw new DataError();
        }
        await this.roleRepo.save(this.roleRepo.create(role));

    }
    /**
        * 
        * @param role 删除角色
     */
    async delete(role: Partial<RoleEntity>): Promise<void> {
        try {
            if (!role.role_id) {
                throw new DataError();
            }
            let existing = await this.roleRepo.findOne({ where: { role_id: role.role_id } });
            if (!existing) {
                throw new RoleNoExistError();
            }
            // console.log(role_id);
            await this.roleRepo.delete({ role_id: role.role_id })

        } catch (e) {
            throw new DataError();

        }

    }
    /**
     * 查询单个角色
     * @param where 
     */
    async get(where: Partial<RoleEntity>): Promise<RoleEntity> {
        return await this.roleRepo.findOne({ where: where });

    }
    /**
    * 根据id查询角色
    */
    async getfindRoleById(role_id: number): Promise<RoleEntity> {
        return await this.roleRepo.findOne(role_id);
    }
    /**
     * 更新角色信息
     * @param data 
     * @param where 
     */
    async save(role: RoleEntity, where: Partial<RoleEntity>): Promise<void> {
        let exist = await this.get(where);
        if (!exist) {
            throw new RoleNoExistError();
        }
        if (role.name) { exist.name = role.name }
        await this.roleRepo.save(exist);
    }

    search(where: Partial<RoleEntity>): Promise<void> {
        throw new Error("Method not implemented.");
    }




}
