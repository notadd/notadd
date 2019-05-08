import { Module, DynamicModule, Type } from "@nestjs/common";
import { JwtStrategy } from './abstracts/index'
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
    static forRoot(jwtStrategy: Type<JwtStrategy>): DynamicModule {
        return {
            module: NestUpmsRootModule,
            providers: [
                { provide: JwtStrategy, useClass: jwtStrategy }
            ],
            exports: [JwtStrategy],
        }
    }
<<<<<<< HEAD
    static forChild(jwtStrategy: Type): DynamicModule {
=======
    static forChild(jwtStrategy: Type<JwtStrategy>): DynamicModule {
>>>>>>> aedb8c32b9820cba9c260e718ded3c75939a6bef
        return {
            module: NestUpmsModule,
            providers: [
                { provide: JwtStrategy, useClass: jwtStrategy }
            ],
            exports: [JwtStrategy],
        }
    }
}
