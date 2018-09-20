import 'reflect-metadata';

import { DynamicModule, Global, Inject, Module, OnModuleInit } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ModulesContainer } from '@nestjs/core/injector/modules-container';
import { MetadataScanner } from '@nestjs/core/metadata-scanner';
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
        this.scanResourcesAndPermissions();
        await this.authService.saveResourcesAndPermissions(this.scanResourcesAndPermissions());
    }

    private scanResourcesAndPermissions() {
        const metadataMap: Map<string, { name: string, resource: Resource[] }> = new Map();
        this.modulesContainer.forEach((moduleValue, moduleKey) => {
            for (const [componentKey, componentKeyValue] of [...moduleValue.components, ...moduleValue.routes]) {
                const isResolverOrController =
                    Reflect.getMetadataKeys(componentKeyValue.instance.constructor)
                        .filter(key => ['graphql:resolver_type', 'path']
                            .includes(key)).length > 0;

                if (isResolverOrController) {
                    const resource: Resource = Reflect.getMetadata(RESOURCE_DEFINITION, componentKeyValue.instance.constructor);
                    const prototype = Object.getPrototypeOf(componentKeyValue.instance);

                    if (resource && prototype) {
                        const permissions: Permission[] = this.metadataScanner.scanFromPrototype(componentKeyValue.instance, prototype, name => {
                            return Reflect.getMetadata(PERMISSION_DEFINITION, componentKeyValue.instance, name);
                        });
                        resource.permissions = permissions;

                        if (metadataMap.has(moduleKey)) {
                            metadataMap.get(moduleKey).name = t(moduleValue.metatype.name);
                            metadataMap.get(moduleKey).resource.push(resource);
                        } else {
                            metadataMap.set(moduleKey, { name: t(moduleValue.metatype.name), resource: [resource] });
                        }
                    }
                }
            }
        });
        return metadataMap;
    }
}