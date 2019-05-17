import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity, AccessTokenEntity, RefreshTokenEntity, EXPRES_TIME } from '../typeorm';
import { SsoService, AuthService } from './core/index';

@Injectable()
export class SsoServiceImpl extends SsoService {
    constructor(
        @InjectRepository(UserEntity) private _user: Repository<UserEntity>,
        @InjectRepository(AccessTokenEntity) private _accessToken: Repository<AccessTokenEntity>,
        @InjectRepository(RefreshTokenEntity) private _refreshToken: Repository<RefreshTokenEntity>,
        private _auth: AuthService
    ) {
        super();
    }
    /**
     * 注销登录
     */
    async logout(user: UserEntity) {
        // 清空缓存
        // 更新数据库
        await this._accessToken.update({
            openid: user.openid
        }, { status: -1 });
    }
    /**
     * 刷新acces token过期时间
     */
    async refreshToken(refreshToken: RefreshTokenEntity) {
        const expiresIn = new Date(new Date().setDate(new Date().getTime() + EXPRES_TIME));
        const accessToken = refreshToken.token;
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
    verify(token: AccessTokenEntity) {
        return this._user.findOneOrFail({
            openid: token.openid
        })
    }
    /**
     * 根据用户名和密码获取access token
     */
    token(user: UserEntity) {
        return this._auth.createToken(user)
    }
}