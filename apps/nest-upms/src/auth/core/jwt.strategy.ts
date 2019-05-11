import { UserEntity, AccessTokenEntity } from '../../typeorm/index'
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
const __PassportStrategy: any = PassportStrategy(Strategy);
export abstract class JwtStrategy extends __PassportStrategy {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'secretKey',
        });
    }
    // token to user
    abstract validate(payload: AccessTokenEntity): Promise<UserEntity>;
}