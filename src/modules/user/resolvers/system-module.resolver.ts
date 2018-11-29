import { Inject, OnModuleInit } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';

import { Permission, Resource } from '../../../common/decorators';
import { CommonResult } from '../../../common/interfaces/common-result.interface';
import { NotaddGrpcClientFactory } from '../../../grpc/grpc.client-factory';

@Resolver()
@Resource({ name: 'system_module_manage', identify: 'systemModule:manage' })
export class SystemModuleResolver implements OnModuleInit {
    onModuleInit() {
        this.systemModuleServiceInterface = this.notaddGrpcClientFactory.userModuleClient.getService('SystemModuleService');
    }

    constructor(
        @Inject(NotaddGrpcClientFactory) private readonly notaddGrpcClientFactory: NotaddGrpcClientFactory
    ) { }

    private systemModuleServiceInterface;

    @Query('findSystemModules')
    @Permission({ name: 'find_system_modules', identify: 'systemModule:findSystemModules', action: 'read' })
    async findSystemModules(): Promise<CommonResult> {
        return this.systemModuleServiceInterface.findSystemModules().toPromise();
    }
}