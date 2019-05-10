import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { SsoResolver } from './sso.resolver';
import { SsoService } from './sso.service'
import { SsoServiceImpl } from './sso.service.impl'

@Module({
    providers: [
        SsoResolver,
        {
            provide: SsoService,
            useClass: SsoServiceImpl
        }
    ],
    imports: [PrismaModule],
})
export class SsoModule { }
