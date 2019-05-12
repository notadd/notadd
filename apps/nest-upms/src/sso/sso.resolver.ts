import {
    Query,
    Resolver
} from '@nestjs/graphql';
import { SsoService } from './core/sso.service'

@Resolver()
export class SsoResolver {
    constructor(public sso: SsoService) { }
    /**
     * 通过用户名和密码获取token
     */
    @Query()
    token(user: any) {
        return this.sso.token(user);
    }

    /**
     * 验证token
     */
    @Query()
    verify(token: any) {
        return this.sso.verify(token);
    }


    /**
     * 刷新token
     */
    @Query()
    refreshToken(token: any) {
        return this.sso.refreshToken(token);
    }


    /**
     * 注销
     */
    @Query()
    logout(user: any) {
        return this.sso.logout(user);
    }
}

