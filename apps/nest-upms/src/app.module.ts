import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entitys/user.entity';
import { Role } from './entitys/role.entity';
import { RolePermission } from './entitys/role.permision';
import { UserRole } from './entitys/user.role.entity';
import { UserPermission } from './entitys/user.permission';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '192.168.1.238',
      port: 5432,
      username: 'prisma',
      password: 'prisma',
      database: 'prisma',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([
      User, Role, RolePermission, UserRole, UserPermission
    ])
  ],
  controllers: [AppController, UserController],
  providers: [AppService]
})
export class ApplicationModule { }
