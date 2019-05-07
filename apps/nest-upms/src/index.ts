import { Module, DynamicModule } from "@nestjs/common";
import { NestUpmsConfig, JwtStrategy } from './abstracts/index'
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
export class NestUpmsRootModule { }

@Module({})
export class NestUpmsModule {
    static forRoot(jwtStrategy: JwtStrategy): DynamicModule {
        return {
            module: NestUpmsRootModule,
            providers: [
                { provide: JwtStrategy, useValue: jwtStrategy }
            ],
            exports: [JwtStrategy],
        }
    }
    static forChild(jwtStrategy: JwtStrategy): DynamicModule {
        return {
            module: NestUpmsModule,
            providers: [
                { provide: JwtStrategy, useValue: jwtStrategy }
            ],
            exports: [JwtStrategy],
        }
    }
}
