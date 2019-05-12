import { JwtStrategy } from '../auth';
import { UserEntity, AccessTokenEntity } from '../typeorm'
export class JwtStrategyImpl extends JwtStrategy {
    async validate(payload: AccessTokenEntity): Promise<UserEntity> {
        return undefined;
    }
}