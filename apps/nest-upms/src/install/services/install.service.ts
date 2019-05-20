import { Controller } from '@nestjs/common';
import { Mutation, Resolver } from '@nestjs/graphql';
import { GrpcMethod } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { join } from 'path';
import { Repository } from 'typeorm';
import { AddonEntity, PermissionEntity, UserEntity, UserPermissionEntity, AddonPermissionEntity } from '../../typeorm';
import { writeFileSync } from 'fs';
export enum PermissionStatus {
    default = 0,
    fail = -1,
    success = 0
}
interface Permission {
    title: string;
    name: string;
    value: string[];
    desc: string;
    status: PermissionStatus;
    icon: string;
    displayorder: number;
}
interface Addon {
    title: string;
    icon: string;
    desc: string;
    name: string;
    permissions: Permission
    appsecret: string;
    pid: number;
}

interface DbConfig {
    host: string;
    port: number;
    username: string;
    password: string;
    dbname: string;
}
interface InstallData {
    /**
     * 管理员账号
     */
    admin: Admin;
    /**
     * 数据库配置
     */
    db: DbConfig,
    /**
     * 所有子系统
     */
    addons: Addon[]
}

interface Admin {
    username: string;
    password: string;
}

interface Config {
    db: DbConfig;
    admin: number[];
}
@Resolver()
@Controller()
export class InstallResolver {

    constructor(
        @InjectRepository(UserEntity) private readonly _user: Repository<UserEntity>,
        @InjectRepository(PermissionEntity) private readonly _permission: Repository<PermissionEntity>,
        @InjectRepository(UserPermissionEntity) private readonly _userPer: Repository<UserPermissionEntity>,
        @InjectRepository(AddonPermissionEntity) private readonly _addonPer: Repository<AddonPermissionEntity>,
        @InjectRepository(AddonEntity) private readonly _addon: Repository<AddonEntity>,
    ) { }

    @Mutation()
    @GrpcMethod()
    async install(data: InstallData): Promise<InstallResult> {
        try {
            // 生成配置文件 ormconfig.json
            await this.writeConfig(join(__dirname, '../../ormconfig.json'), { db: data.db, admin: [] });
            // 启动数据库
            // 添加admin
            const user = await this.addAdmin(data.admin);
            // 应用安装
            await this.addonInstall(data.addons);
            // 重新生成配置文件 ormconfig.json
            this.writeConfig(join(__dirname, '../../ormconfig.json'), { db: data.db, admin: [user.user_id] });
            // 重启应用
            return {
                code: 200, msg: 'success'
            }
        } catch {
            return {
                code: 500, msg: 'fail'
            }
        }
    }

    /**
     * @param path 输出文件的路径及文件名
     * @param data 输出文件的内容
     */
    private writeConfig(path: string, data: Config) {
        writeFileSync(path, JSON.stringify(data));
    }


    /**
     * 添加admin
     * @param username 用户名
     * @param password 密码
     */
    private async addAdmin(admin: Admin): Promise<UserEntity> {
        const user = new UserEntity();
        user.username = admin.username;
        user.password = admin.password; // todo 加盐,密码加密
        user.phone = '';
        user.email = '';
        user.realname = '';
        user.nickname = '';
        user.sex = 0;
        user.openid = 'ce92b3e2-7ab1-11e9-8f9e-2a86e4085a59';
        const userExist = await this._user.save(user);
        // 添加admin权限
        const permission = new PermissionEntity();
        permission.value = ['*'];
        permission.name = '*';
        permission.title = '*';
        permission.icon = '';
        permission.decription = '';
        permission.father_name = 0;
        permission.displayorder = 0;
        permission.status = 1;
        const perExist = await this._permission.save(permission);
        // 添加到关联表
        const userPer = new UserPermissionEntity();
        userPer.openid = userExist.openid;
        userPer.permission_id = 1; // todo 权限id当前无,暂放
        await this._userPer.save(userPer);
        return userExist;
    }

    /**
     * 添加应用
     * @param addons 应用信息
     */
    private async addonInstall(addons: Addon[]) {
        for (let addon of addons) {
            // 添加应用
            const addonEntity = new AddonEntity();
            addonEntity.title = addon.title;
            addonEntity.icon = addon.icon;
            addonEntity.name = addon.name;
            addonEntity.description = addon.desc;
            addonEntity.appsecret = addon.appsecret;
            // addonEntity.pid = addon.pid;
            // 状态默认正常
            addonEntity.status = 1;
            const addonExist = await this._addon.save(addonEntity);
            // 添加应用的权限
            const perEntity = new PermissionEntity();
            perEntity.name = addon.permissions.name;
            perEntity.title = addon.permissions.title;
            perEntity.value = addon.permissions.value;
            perEntity.decription = addon.permissions.desc;
            perEntity.displayorder = addon.permissions.displayorder;
            perEntity.icon = addon.permissions.icon;
            perEntity.status = addon.permissions.status;
            const perExist = await this._permission.save(perEntity);
            // 添加到关联表
            const addonPer = new AddonPermissionEntity();
            addonPer.addon_id = addonExist.appid;
            addonPer.permission_id = 1; // todo 权限当前没有id,先写1
            await this._addonPer.save(addonPer);
        }
    }


}

interface InstallResult {
    code: number;
    msg: string;
}