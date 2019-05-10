import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddonEntity, AddonPermissionEntity, PermissionEntity } from './entities'
@Module({
    imports: [
        TypeOrmModule.forFeature([
            AddonEntity,
            AddonPermissionEntity,
            PermissionEntity
        ])
    ]
})
export class TypeormModule { }

