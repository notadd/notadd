import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddonEntity } from './entities/addon.entity'
import { AddonPermissionEntity } from './entities/addonPermission.entity'
import { LoggerEntity } from './entities/logger.entity'
import { OrganizationEntity } from './entities/organization.entity'
import { PermissionEntity } from './entities/permission.entity'
import { RefreshTokenEntity } from './entities/refreshToken.entity'
import { RoleEntity } from './entities/role.entity'
import { RolePermissionEntity } from './entities/rolePermision.entity'
import { UserEntity } from './entities/user.entity'
import { UserOrganizationEntity } from './entities/userOrganization.entity'
import { UserPermissionEntity } from './entities/userPermission.entity'
import { UserRoleEntity } from './entities/userRole.entity'
import { AccessTokenEntity, EXPRES_TIME } from './entities/accessToken.entity'
import { ArticleEntity } from './entities/article.entity';
import { CategoryEntity } from './entities/category.entity';
import { CommentEntity } from './entities/comment.entity';


@Module({
    imports: [
        TypeOrmModule.forFeature([
            AddonEntity,
            AddonPermissionEntity,
            LoggerEntity,
            OrganizationEntity,
            PermissionEntity,
            RefreshTokenEntity,
            RoleEntity,
            RolePermissionEntity,
            UserEntity,
            UserOrganizationEntity,
            UserPermissionEntity,
            UserRoleEntity,
            AccessTokenEntity,
            ArticleEntity,
            CategoryEntity,
            CommentEntity
        ])
    ]
})
export class TypeormModule { }

export {
    AccessTokenEntity,
    AddonEntity,
    AddonPermissionEntity,
    LoggerEntity,
    OrganizationEntity,
    PermissionEntity,
    RefreshTokenEntity,
    RoleEntity,
    RolePermissionEntity,
    UserEntity,
    UserOrganizationEntity,
    UserPermissionEntity,
    UserRoleEntity,
    EXPRES_TIME
}