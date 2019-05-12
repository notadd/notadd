import { UserEntity, AccessTokenEntity } from '../../typeorm'
export abstract class AuthService {
    /**
     * 根据user创建token
     * @param  {UserEntity} user
     * @returns Promise<AccessTokenEntity>
     */
    abstract createToken(user: UserEntity): Promise<AccessTokenEntity>;
}