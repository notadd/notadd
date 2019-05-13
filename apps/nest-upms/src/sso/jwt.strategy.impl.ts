import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { JwtStrategy } from '../auth';
import { UserEntity, AccessTokenEntity } from '../typeorm'
export class JwtStrategyImpl extends JwtStrategy {
    constructor(
        // @InjectRepository(UserEntity) private _user: Repository<UserEntity>,
    ) {
        super();
    }
    /**
     * 验证令牌
     * @param  {AccessTokenEntity} payload
     * @returns Promise<UserEntity>
     */
    async validate(payload: AccessTokenEntity): Promise<UserEntity> {
        // return this._user.findOneOrFail({
        //     openid: payload.openid
        // });
        return undefined;
    }
}