import { SsoService } from './sso.service'

export class SsoServiceImpl extends SsoService {
    /**
     * 注销登录
     */
    logout(): any { }
    /**
     * 刷新acces token过期时间
     */
    refreshToken(): any { }
    /**
     * 验证access token 获取用户信息
     **/
    verify(): any { }
    /**
     * 根据用户名和密码获取access token
     */
    token(): any { }
}