import { Inject, OnModuleInit } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';

import { Permission, Resource } from '../../../common/decorators';
import { notadd_module_user } from '../../../grpc/generated';
import { NotaddGrpcClientFactory } from '../../../grpc/grpc.client-factory';

@Resolver()
@Resource({ name: 'system_module_manage', identify: 'systemModule:manage' })
export class SystemModuleResolver implements OnModuleInit {
    onModuleInit() {
        this.systemModuleService = this.notaddGrpcClientFactory.userModuleClient.getService('SystemModuleService');
    }

    constructor(
        @Inject(NotaddGrpcClientFactory) private readonly notaddGrpcClientFactory: NotaddGrpcClientFactory
    ) { }

    private systemModuleService: notadd_module_user.SystemModuleService;

    @Query('findSystemModules')
    @Permission({ name: 'find_system_modules', identify: 'systemModule:findSystemModules', action: 'read' })
    async findSystemModules(req, body: { pageNumber: number, pageSize: number }) {
        return this.systemModuleService.findSystemModules(body).toPromise();
    }
}