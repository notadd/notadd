import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { SsoResolver } from './sso.resolver';
import { SsoService, AuthService } from './core/index'
import { SsoServiceImpl } from './sso.service.impl'
import { AuthServiceImpl } from './auth.service.impl'

@Module({
    providers: [
        SsoResolver,
        {
            provide: SsoService,
            useClass: SsoServiceImpl
        },
        {
            provide: AuthService,
            useClass: AuthServiceImpl
        }
    ],
    imports: [PrismaModule],
})
export class SsoModule { }
