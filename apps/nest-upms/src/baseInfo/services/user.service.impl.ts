import { UserService } from '../core/user.service';
import { UserEntity } from '../../typeorm/entities/user.entity';
import { DataError, UserNameExistError, PhoneExistError, EmileExistError, UserIsNullError } from '../errors/error';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserRoleEntity, UserPermissionEntity, RoleEntity } from '../../typeorm';

export class UserServiceImpl extends UserService {

    constructor(
        @InjectRepository(UserEntity) public readonly userRepo: Repository<UserEntity>,
        @InjectRepository(RoleEntity) public readonly roleRepo: Repository<RoleEntity>,
        @InjectRepository(UserRoleEntity) public readonly userRoleRepo: Repository<UserRoleEntity>,
        @InjectRepository(UserPermissionEntity) public readonly userPermissionRepo: Repository<UserPermissionEntity>,
    ) { super() }

    /**
     * @param user 添加的用户信息
     */
    async insert(user: UserEntity): Promise<void> {
        if (!(user.username || user.password || user.phone || user.email) && user.phone.length !== 11) {
            throw new DataError();
        }
        // 判断邮箱格式和手机格式
        if (await this.userRepo.findOne({ where: { username: user.username } })) {
            throw new UserNameExistError();
        }
        if (await this.userRepo.findOne({ where: { phone: user.phone } })) {
            throw new PhoneExistError();
        }
        if (await this.userRepo.findOne({ where: { email: user.email } })) {
            throw new EmileExistError();
        }
        /** 
         * TODO 加密密码
         * 
         */
        // 添加联盟id和open id
        await this.userRepo.save(this.userRepo.create(user)); // todo 加密密码
    }

    /**
     * @param user 删除的用户信息
     */
    async delete(user: Partial<UserEntity>): Promise<void> {
        if (!user.user_id) {
            throw new DataError();
        }
        let exist = await this.userRepo.findOne({ where: { user_id: user.user_id } });
        if (!exist) {
            throw new UserIsNullError();
        }
        await this.userRepo.delete({ user_id: user.user_id });
        await this.userRoleRepo.delete({ openid: exist.openid });
        await this.userPermissionRepo.delete({ openid: exist.openid });
    }


    /**
     * 
     * @param user 更新用户的信息
     * @param where 查询该用户的条件
     */
    async save(user: UserEntity, where: Partial<UserEntity>): Promise<void> {
        let exist = await this.userRepo.findOne({where: where});
        if (!exist) {
            throw new UserIsNullError();
        }
        if (user.username) { exist.username = user.username }
        if (user.password) {
            // 加密
            // exist.password = user.password;
        }
        if (user.username) { exist.username = user.username }
        if (user.phone) { exist.phone = user.phone }
        if (user.email) { exist.email = user.email }
        if (user.avatar) { exist.avatar = user.avatar }
        await this.userRepo.save(exist);
    }


    /**
     * 获取单个User
     * @param where 查询的条件
     */
    async get(where: Partial<UserEntity>): Promise<UserEntity> {
        return await this.userRepo.findOne(where);
    }

    /**
     * 根据Id获取单个User
     * @param id 根据Id查询
     */
    async getUserById(user_id: number): Promise<UserEntity> {
        if (!user_id) {
            throw new DataError();
        }
        return await this.userRepo.findOne(user_id);
    }

    search(where: Partial<UserEntity>): Promise<void> {
        throw new Error("Method not implemented.");
    }
}