import {
    Query,
    Resolver
} from '@nestjs/graphql';
import { SsoService } from './core/sso.service';
import { UserEntity, AccessTokenEntity, RefreshTokenEntity } from '../typeorm';

@Resolver()
export class SsoResolver {
    constructor(public sso: SsoService) { }
    /**
     * 通过用户名和密码获取token
     */
    @Query()
    async token(user: UserEntity) {
        return await this.sso.token(user);
    }

    /**
     * 验证token
     */
    @Query()
    verify(token: AccessTokenEntity) {
        return this.sso.verify(token);
    }

    /**
     * 刷新token
     */
    @Query()
    refreshToken(token: RefreshTokenEntity) {
        return this.sso.refreshToken(token);
    }
    /**
     * 注销
     */
    @Query()
    logout(user: UserEntity) {
        return this.sso.logout(user);
    }
}
