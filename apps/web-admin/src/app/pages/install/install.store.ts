import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

export interface Permission {
    title: string;
    name: string;
    value: string[];
}
export interface Addon {
    title: string;
    logo: string;
    desc: string;
    permission: Permission[];
}

export interface Db {
    host: string;
    port: number;
    username: string;
    password: string;
    dbname: string;
}

export interface Admin {
    username: string;
    password: string;
}
import gql from 'graphql-tag';

@Injectable()
export class InstallStore {
    data: {
        admin: Admin,
        db: Db,
        addons: Addon[]
    } = {
            admin: {
                username: 'admin',
                password: '123456'
            },
            db: {
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'postgres',
                dbname: 'test_ci'
            },
            addons: [{
                title: '模块中心',
                logo: '',
                desc: '子系统的安装卸载更新',
                permission: [{
                    title: '模块安装',
                    name: 'module.install',
                    value: ['module.install']
                }, {
                    title: '模块卸载',
                    name: 'module.uninstall',
                    value: ['module.uninstall']
                }, {
                    title: '模块更新',
                    name: 'module.upgrade',
                    value: ['module.upgrade']
                }]
            }, {
                title: '单点登录',
                logo: '',
                desc: '用于多系统统一登录',
                permission: [{
                    title: '用户注册',
                    name: 'user.register',
                    value: ['user.register']
                }, {
                    title: '用户登录',
                    name: 'user.login',
                    value: ['user.login']
                }, {
                    title: '用户注销',
                    name: 'user.delete',
                    value: ['user.delete']
                }, {
                    title: '退出登录',
                    name: 'user.logout',
                    value: ['user.logout']
                }, {
                    title: '修改密码',
                    name: 'user.forget',
                    value: ['user.forget']
                }]
            }]
        };
    constructor(private _apollo: Apollo) {

    }

    finish() {
        const mutation = gql`
        mutation install($install: InstallData!) {
            install(data: $install) {
                code,
                msg
            }
        }`;
        this._apollo.mutate({
            mutation: mutation,
            variables: {
                install: this.data
            }
        }).subscribe(console.log);
    }
}