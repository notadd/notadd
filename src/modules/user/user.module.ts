import 'reflect-metadata';

import { DynamicModule, Global, Inject, Module, OnModuleInit } from '@nestjs/common';
import { PATH_METADATA } from '@nestjs/common/constants';
import { APP_GUARD } from '@nestjs/core';
import { ModulesContainer } from '@nestjs/core/injector/modules-container';
import { MetadataScanner } from '@nestjs/core/metadata-scanner';
import { RESOLVER_TYPE_METADATA } from '@nestjs/graphql/dist/graphql.constants';
import { __ as t, configure as i18nConfigure } from 'i18n';

import { PERMISSION_DEFINITION, RESOURCE_DEFINITION } from '../../common/decorators';
import { Permission, Resource } from '../../common/interfaces';
import { NotaddGrpcClientFactory } from '../../grpc/grpc.client-factory';
import { AuthGurad } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { InfoGroupResolver } from './resolvers/info-group.resolver';
import { InfoItemResolver } from './resolvers/info-item.resolver';
import { OrganizationResolver } from './resolvers/organization.resolver';
import { ResourceResolver } from './resolvers/resource.resolver';
import { RoleResolver } from './resolvers/role.resolver';
import { UserResolver } from './resolvers/user.resolver';

@Global()
@Module({
    providers: [
        { provide: APP_GUARD, useClass: AuthGurad },
        NotaddGrpcClientFactory,
        AuthService,
        InfoGroupResolver,
        InfoItemResolver,
        OrganizationResolver,
        ResourceResolver,
        RoleResolver,
        UserResolver
    ],
    exports: [AuthService]
})
export class UserModule implements OnModuleInit {
    private readonly metadataScanner: MetadataScanner;

    constructor(
        @Inject(ModulesContainer) private readonly modulesContainer: ModulesContainer,
        @Inject(AuthService) private readonly authService: AuthService
    ) {
        this.metadataScanner = new MetadataScanner();
    }

    static forRoot(options: { i18n: 'en-US' | 'zh-CN' }): DynamicModule {
        i18nConfigure({
            locales: ['en-US', 'zh-CN'],
            defaultLocale: options.i18n,
            directory: 'src/i18n'
        });
        return {
            module: UserModule
        };
    }

    async onModuleInit() {
        await this.authService.saveResourcesAndPermissions(this.scanResourcesAndPermissions());
    }

    private scanResourcesAndPermissions() {
        const metadataMap: Map<string, { resource: Resource, permissions: Permission[] }> = new Map();
        this.modulesContainer.forEach(module => {
            module.components.forEach(component => {
                const isResolverOrController =
                    Reflect.getMetadataKeys(component.instance.constructor)
                        .filter(key => [RESOLVER_TYPE_METADATA, PATH_METADATA]
                            .includes(key)).length > 0;

                if (isResolverOrController) {
                    const resource: Resource = Reflect.getMetadata(RESOURCE_DEFINITION, component.instance.constructor);
                    const prototype = Object.getPrototypeOf(component.instance);

                    if (prototype) {
                        const permissions: Permission[] = this.metadataScanner.scanFromPrototype(component.instance, prototype, name => {
                            return Reflect.getMetadata(PERMISSION_DEFINITION, component.instance, name);
                        });

                        if (resource) {
                            resource.name = t(resource.name);
                            permissions.forEach(permission => {
                                permission.name = t(permission.name);
                            });
                            metadataMap.set(resource.identify, { resource, permissions });
                        }
                    }
                }
            });
        });
        return metadataMap;
    }
}