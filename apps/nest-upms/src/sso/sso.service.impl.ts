import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccessTokenEntity, EXPRES_TIME, RefreshTokenEntity, UserEntity } from '../typeorm';
import { AuthService, SsoService } from './core/index';
import { UserService } from '../baseInfo/core';

@Injectable()
export class SsoServiceImpl extends SsoService {

    constructor(
        @InjectRepository(UserEntity) private _user: Repository<UserEntity>,
        @InjectRepository(AccessTokenEntity) private _accessToken: Repository<AccessTokenEntity>,
        @InjectRepository(RefreshTokenEntity) private _refreshToken: Repository<RefreshTokenEntity>,
        private _userService: UserService,
        private _auth: AuthService
    ) {
        super();
    }
    /**
     * 注销登录
     */
    async logout(access_token: string): Promise<void> {
        // 清空缓存
        // 更新数据库
        await this._accessToken.update({
            access_token
        }, { status: -1 });
    }
    /**
     * 刷新acces token过期时间
     */
    async refreshToken(access_token: string): Promise<void> {
        const accessToken = await this.getTokenByAccessToken(access_token);
        const refreshToken = await this._refreshToken.findOne({ where: { token: accessToken } });
        const expiresIn = new Date(new Date().setDate(new Date().getTime() + EXPRES_TIME));
        await this._accessToken.update({
            access_token: accessToken.access_token
        }, { expires_in: expiresIn });
        await this._refreshToken.update({
            refresh_token: refreshToken.refresh_token
        }, { expires_in: expiresIn });
    }
    /**
     * 验证access token 获取用户信息
     **/
    async verify(access_token: string): Promise<UserEntity> {
        const token = await this.getTokenByAccessToken(access_token);
        return await this._user.findOneOrFail({
            openid: token.openid
        })
    }
    /**
     * 根据用户名和密码获取access token
     */
    async token(username: string, password: string): Promise<AccessTokenEntity> {
        const user = await this._userService.get({ username, password });
        if (!user) {
            
        }
        return this._auth.createToken(user);
    }

    /**
     * 根据授权凭证获取token信息
     * @param access_token 
     */
    async getTokenByAccessToken(access_token: string): Promise<AccessTokenEntity> {
        return await this._accessToken.findOne(access_token);
    }
}