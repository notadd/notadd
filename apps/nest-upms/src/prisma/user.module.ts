import { PrismaModule } from './prisma.module';
import { UserController } from './user.controller';
import { Module } from '@nestjs/common';

@Module({
    imports: [PrismaModule],
    controllers: [UserController],
    providers: [],
})

export class UserModule { }