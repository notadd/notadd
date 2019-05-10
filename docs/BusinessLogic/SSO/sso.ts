import * as t from './types'
export class Sso {

    /**
     * 登录
     */
    login() { }

    /**
     * token
     */
    token() { 
        
    }

    /**
     * 验证token
     */
    verify(): t.RefreshToken {
        return undefined;
    }

    /**
     * 刷新token
     */
    refreshToken(): t.RefreshToken {
        return undefined;
    }


    /**
     * 注销
     */
    logout() { }

}