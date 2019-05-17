import { UserEntity, AccessTokenEntity, RefreshTokenEntity } from '../../typeorm'
export abstract class SsoService {
    /**
     * 注销登录
     */
    abstract logout(user: UserEntity): Promise<void>;
    /**
     * 刷新acces token过期时间
     */
    abstract refreshToken(token: RefreshTokenEntity): Promise<void>
    /**
     * 验证access token 获取用户信息
     **/
    abstract verify(token: AccessTokenEntity): Promise<UserEntity>;
    /**
     * 根据用户名和密码获取access token
     */
    abstract token(user: UserEntity): Promise<AccessTokenEntity>;
}
