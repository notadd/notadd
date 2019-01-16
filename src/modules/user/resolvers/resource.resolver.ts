import { Inject, OnModuleInit } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';

import { Permission, Resource } from '../../../common/decorators';
import { nt_module_user } from '../../../grpc/generated';
import { NotaddGrpcClientFactory } from '../../../grpc/grpc.client-factory';

@Resolver()
@Resource({ name: 'resource_manage', identify: 'resource:manage' })
export class ResourceResolver implements OnModuleInit {
    onModuleInit() {
        this.resourceService = this.notaddGrpcClientFactory.userModuleClient.getService('ResourceService');
    }

    constructor(
        @Inject(NotaddGrpcClientFactory) private readonly notaddGrpcClientFactory: NotaddGrpcClientFactory
    ) { }

    private resourceService: nt_module_user.ResourceService;

    @Query('findResources')
    @Permission({ name: 'find_resources', identify: 'resource:findResources', action: 'read' })
    async findResources(@Args() args: { systemModuleId: number, pageNumber: number, pageSize: number }) {
        return this.resourceService.findResources(args).toPromise();
    }
}