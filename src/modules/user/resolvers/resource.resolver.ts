import { Inject } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';

import { Permission, Resource } from '../../../common/decorators';
import { CommonResult } from '../../../common/interfaces/common-result.interface';
import { NotaddGrpcClientFactory } from '../../../grpc/grpc.client-factory';

@Resolver()
@Resource({ name: 'resource_manage', identify: 'resource:manage' })
export class ResourceResolver {
    onModuleInit() {
        this.resourceServiceInterface = this.notaddGrpcClientFactory.userModuleClient.getService('ResourceService');
    }

    constructor(
        @Inject(NotaddGrpcClientFactory) private readonly notaddGrpcClientFactory: NotaddGrpcClientFactory
    ) { }

    private resourceServiceInterface;

    @Query('findResources')
    @Permission({ name: 'find_resources', identify: 'resource:findResources', action: 'read' })
    async findResources(req, body: { systemModuleId: number }): Promise<CommonResult> {
        return this.resourceServiceInterface.findResources(body).toPromise();
    }
}