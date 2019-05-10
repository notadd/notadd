import { Module } from '@nestjs/common';
import { PrismaModule } from './../prisma/prisma.module';
import { SsoResolver } from './sso.resolver';

@Module({
    providers: [SsoResolver],
    imports: [PrismaModule],
})
export class SsoModule { }
