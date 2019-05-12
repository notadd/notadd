import { Module, DynamicModule, Type } from "@nestjs/common";
import { JwtStrategy } from './core/index'
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
            secretOrPrivateKey: 'secretKey',
            signOptions: {
                expiresIn: 3600,
            },
        }),
    ]
})
export class AuthRootModule { }

@Module({})
export class AuthModule {
    static forRoot(jwtStrategy: Type<JwtStrategy>): DynamicModule {
        return {
            module: AuthRootModule,
            providers: [
                { provide: JwtStrategy, useClass: jwtStrategy }
            ]
        }
    }
    static forChild(jwtStrategy: Type<JwtStrategy>): DynamicModule {
        return {
            module: AuthModule,
            providers: [
                { provide: JwtStrategy, useClass: jwtStrategy }
            ]
        }
    }
}
