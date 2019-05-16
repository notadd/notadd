
import { RoleEntity, PermissionEntity, UserEntity } from '../../typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, SaveOptions } from 'typeorm';
import { RoleService } from '../core/role.service';
import { DataError, RoleNoExistError, ServerError } from '../errors/role.error';
import { InternalServerErrorException } from '@nestjs/common';

export class RoleServiceIpml extends RoleService {
    constructor(
        @InjectRepository(RoleEntity) public readonly roleRepo: Repository<RoleEntity>,
        @InjectRepository(PermissionEntity) public readonly permissionRepo: Repository<PermissionEntity>
    ) { super() }
    /**
         * 添加角色
         * @param role 
         */
    async insert(role: RoleEntity) {
        if (!role.name || !role.title || !role.description) {
            throw new DataError();
        }
        return await this.roleRepo.save(role);
    }
    /**
     *@param role delete role
     */
    async delete(role: Partial<RoleEntity>) {
        try {
            if (!role.role_id) {
                throw new DataError();
            }
            let existing = await this.roleRepo.findOneOrFail({ role_id: role.role_id });
            if (!existing) {
                throw new RoleNoExistError();
            }
            // console.log(role_id);
            return await this.roleRepo.delete({ role_id: role.role_id })
        } catch (e) {
            throw new DataError();
        }

    }
    /**
     *Query a single role
     *@param where
     */
    async get(where: Partial<RoleEntity>): Promise<RoleEntity> {
        try {
            return await this.roleRepo.findOneOrFail({ where: where });
        } catch (e) {
            throw new ServerError();
        }
    }
    /**
    *Query role based on id
    */
    async getfindRoleById(role_id: number): Promise<RoleEntity> {
        return await this.roleRepo.findOne(role_id);
    }
    /**
     * Update role information
     * todo
     * @param data
     * @param where
     */
    async save(role: RoleEntity) {
        try {
            return this.roleRepo.save(role);
        } catch (e) {
            throw new ServerError();
        }
    }

    search(where: Partial<RoleEntity>): Promise<void> {
        throw new Error("Method not implemented.");
    }
}
