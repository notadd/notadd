import { Controller } from '@nestjs/common';
import { Mutation, Resolver, Args } from '@nestjs/graphql';
import { GrpcMethod } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { join } from 'path';
import { Repository } from 'typeorm';
import { AddonEntity, PermissionEntity, UserEntity, AddonPermissionEntity } from '../../typeorm';
import { writeFileSync } from 'fs';
import { Observable, of } from 'rxjs';
import { UserService, PermissionService } from '../../baseInfo/core';
export enum PermissionStatus {
    default = 0,
    fail = -1,
    success = 1
}
// 123
interface Permission {
    // 权限中文名
    title: string;
    /** 权限英文名 */
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
    type: string;
    host: string;
    port: number;
    username: string;
    password: string;
    dbname: string;
    entity: string[];
    synchronize: boolean;
}
interface InstallData {
    admin: Admin;
    /**
     * 数据库配置
     */
    db: DbConfig,
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
        @InjectRepository(AddonPermissionEntity) private readonly _addonPer: Repository<AddonPermissionEntity>,
        @InjectRepository(AddonEntity) private readonly _addon: Repository<AddonEntity>,
        private readonly _userService: UserService,
        private readonly _perService: PermissionService,
    ) { }

    @Mutation()
    @GrpcMethod('InstallResolver')
    async install(@Args('data') data: InstallData): Promise<InstallResult> {
        try {
            // 生成配置文件 ormconfig.json
            await this.writeConfig(join(__dirname, '../../ormconfig.json'), { db: data.db, admin: [] });
            // 启动数据库
            // 添加admin
            const user = await this.addAdmin(data.admin);
            // 应用安装
            await this.saveAddon(data.addons);
            // 重新生成配置文件 ormconfig.json
            this.writeConfig(join(__dirname, '../../ormconfig.json'), { db: data.db, admin: [user.user_id] });
            // 重启应用
            return {
                code: 200, msg: 'success'
            }
        } catch (e) {
            console.log(e)
            return {
                code: 500, msg: `fail`
            }
        }
    }

    @Mutation()
    @GrpcMethod('InstallResolver')
    installAddon(@Args('data') data: Addon): Observable<InstallResult> {
        // try {
        //     let addon: Addon[] = [data];
        //     await this.saveAddon(addon);
        //     return {
        //         code: 200, msg: 'success'
        //     }
        // } catch (e) {
        //     return {
        //         code: 500, msg: `fail ${e.message}`
        //     }
        // }
        return of({
            code: 200, msg: `success`
        })
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
        user.phone = '18888888888';
        user.email = 'admin@gmail.com';
        user.realname = '';
        user.nickname = '';
        user.unionid = '';
        user.salt = '';
        user.avatar = ''
        user.sex = 0;
        user.openid = 'ce92b3e2-7ab1-11e9-8f9e-2a86e4085a59';
        // 添加admin权限
        const permission = new PermissionEntity();
        permission.value = ['*'];
        permission.name = 'public1';
        permission.title = '*';
        permission.icon = '';
        permission.decription = '';
        permission.father_name = 'addon';
        permission.displayorder = 0;
        permission.status = 1;
        user.permissions = [];
        user.permissions.push(permission);
        await this._perService.insert(permission);
        const userExist = await this._userService.insert(user);
        return userExist;
    }

    /**
     * 添加应用
     * @param addons 应用信息
     */
    private async saveAddon(addons: Addon[]) {
        for (let addon of addons) {
            // 添加应用
            const addonEntity = new AddonEntity();
            addonEntity.title = addon.title;
            addonEntity.icon = addon.icon;
            addonEntity.name = addon.name;
            addonEntity.description = addon.desc;
            addonEntity.appsecret = addon.appsecret;
            addonEntity.status = 1;
            // 添加应用的权限
            const permission = new PermissionEntity();
            permission.name = addon.permissions.name;
            permission.title = addon.permissions.title;
            permission.value = addon.permissions.value;
            permission.decription = addon.permissions.desc;
            permission.displayorder = addon.permissions.displayorder;
            permission.icon = addon.permissions.icon;
            permission.status = addon.permissions.status;
            addonEntity.permissions = [];
            addonEntity.permissions.push(permission);
            const addonExist = await this._addon.save(addonEntity);
            // const perExist = await this._permission.save(perEntity);
        }
    }


}

// 安装结果
interface InstallResult {
    /**
     * 状态码
     */
    code: number;
    // 消息
    msg: string;
}