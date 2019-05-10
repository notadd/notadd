export abstract class SsoService {
    /**
     * 注销登录
     */
    abstract logout(): any;
    /**
     * 刷新acces token过期时间
     */
    abstract refreshToken(): any;
    /**
     * 验证access token 获取用户信息
     **/
    abstract verify(): any;
    /**
     * 根据用户名和密码获取access token
     */
    abstract token(): any;
}

