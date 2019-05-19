import { UserEntity, AccessTokenEntity } from '../../typeorm'
export abstract class SsoService {
    /**
     * 注销登录
     */
    abstract logout(access_token: string): Promise<void>;
    /**
     * 刷新acces token过期时间
     */
    abstract refreshToken(access_token: string): Promise<void>
    /**
     * 验证access token 获取用户信息
     **/
    abstract verify(access_token: string): Promise<UserEntity>;
    /**
     * 根据用户名和密码获取access token
     */
    abstract token(username: string, password: string): Promise<AccessTokenEntity>;

    /**
     * 根据用户名获取用户信息
     */
    abstract getUserByNameAndPsd(username: string, password: string): Promise<UserEntity>;

    /**
     * 根据access_token获取token信息
     */
    abstract getTokenByAccessToken(access_token: string): Promise<AccessTokenEntity>;
}
