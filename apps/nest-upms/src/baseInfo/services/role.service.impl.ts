
import { RoleEntity, PermissionEntity, UserEntity } from '../../typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, SaveOptions } from 'typeorm';
import { RoleService } from '../core/role.service';
import { DataError, RoleNoExistError, ServerError } from '../errors/role.error';
import { InternalServerErrorException } from '@nestjs/common';

export class RoleServiceIpml extends RoleService {
    constructor(
        @InjectRepository(RoleEntity) private readonly roleRepo: Repository<RoleEntity>,
        @InjectRepository(PermissionEntity) private readonly permissionRepo: Repository<PermissionEntity>
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
        * 
        * @param role 删除角色
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
     * 查询单个角色
     * @param where 
     */
    async get(where: Partial<RoleEntity>): Promise<RoleEntity> {
        try {
            return await this.roleRepo.findOneOrFail({ where: where });
        } catch (e) {
            throw new ServerError();
        }
    }
    /**
    * 根据id查询角色
    */
    async getfindRoleById(role_id: number): Promise<RoleEntity> {

        return await this.roleRepo.findOne(role_id);
    }
    /**
     * 更新角色信息
     * todo
     * @param data 
     * @param where 
     */
    async save(role: RoleEntity): Promise<void> {
        try {
            this.roleRepo.save(role);
            // this.roleRepo.update(role.role_id, role)
            // this.roleRepo.createQueryBuilder().update(RoleEntity)
            // .set(role)
            // .where("id = :id", { id: role.role_id })
            // .execute();
        } catch (e) {
            throw new ServerError();
        }
        // let exist = await this.get(where);
        // if (!exist) {
        //     throw new RoleNoExistError();
        // }
        // if (role.name) { exist.name = role.name }
        // if (role.title) (exist.title = role.title)
        // await this.roleRepo.save(exist, where);
    }

    search(where: Partial<RoleEntity>): Promise<void> {
        throw new Error("Method not implemented.");
    }
}
