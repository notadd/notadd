import { UserService } from '../core/user.service';
import { UserEntity } from '../../typeorm/entities/user.entity';
import { DataError, UserNameExistError, PhoneExistError, EmailFormtError, EmailExistError, UserIsNullError, PhoneFormtError } from '../errors/error';
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
    async insert(user: UserEntity) {
        if (!(user.username || user.password || user.phone || user.email)) {
            throw new DataError();
        }
        // 验证邮箱
        let EmailRegExp = /^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}$/;
        if (!EmailRegExp.test(user.email)) {
            throw new EmailFormtError();
        }
        // 验证手机
        let phoneRegExp = /^[1][3-9][0-9]{9}$/;
        if (!phoneRegExp.test(user.phone)) {
            throw new PhoneFormtError();
        }
        if (await this.userRepo.findOne({ where: { username: user.username } })) {
            throw new UserNameExistError();
        }
        if (await this.userRepo.findOne({ where: { phone: user.phone } })) {
            throw new PhoneExistError();
        }
        if (await this.userRepo.findOne({ where: { email: user.email } })) {
            throw new EmailExistError();
        }
        /** 
         * TODO 加密密码
         * 
         */
        // 添加联盟id和open id
        return await this.userRepo.save(this.userRepo.create(user)); // todo 加密密码
    }

    /**
     * @param user 删除的用户信息
     */
    async delete(user: Partial<UserEntity>) {
        if (!user.user_id) {
            throw new DataError();
        }
        let exist = await this.userRepo.findOne({ where: { user_id: user.user_id } });
        if (!exist) {
            throw new UserIsNullError();
        }
        await this.userRepo.delete({ user_id: user.user_id });
        await this.userRoleRepo.delete({ openid: exist.openid });
        return await this.userPermissionRepo.delete({ openid: exist.openid });
    }


    /**
     * 
     * @param user 更新用户的信息
     * @param where 查询该用户的条件
     */
    async save(user: UserEntity, where: Partial<UserEntity>) {
        let exist = await this.get(where);
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
        return await this.userRepo.save(exist);
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