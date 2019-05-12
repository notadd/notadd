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
    token() {
        return this.sso.token();
    }

    /**
     * 验证token
     */
    @Query()
    verify() {
        return this.sso.verify();
    }


    /**
     * 刷新token
     */
    @Query()
    refreshToken() {
        return this.sso.refreshToken();
    }


    /**
     * 注销
     */
    @Query()
    logout() {
        return this.sso.logout();
    }
}

