import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { AuthenticationError } from 'apollo-server-core';
import { __ as t } from 'i18n';
import * as jwt from 'jsonwebtoken';

import { Permission, Resource } from '../../../common/interfaces';
import { NotaddGrpcClientFactory } from '../../../grpc/grpc.client-factory';

@Injectable()
export class AuthService implements OnModuleInit {
    onModuleInit() {
        this.authServiceInterface = this.notaddGrpcClientFactory.userModuleClient.getService('ResourceService');
        this.userServiceInterface = this.notaddGrpcClientFactory.userModuleClient.getService('UserService');
    }

    constructor(
        @Inject(NotaddGrpcClientFactory) private readonly notaddGrpcClientFactory: NotaddGrpcClientFactory
    ) { }

    private authServiceInterface;
    private userServiceInterface;

    async validateUser(req: any) {
        /**
         * whitelist
         */
        if (req.body && ['IntrospectionQuery', 'login', 'adminLogin', 'register'].includes(req.body.operationName)) {
            return;
        }

        let token = req.headers.authorization as string;
        if (!token) {
            throw new AuthenticationError(t('Request header lacks authorization parameters，it should be: Authorization or authorization'));
        }

        if (['Bearer ', 'bearer '].includes(token.slice(0, 7))) {
            token = token.slice(7);
        } else {
            throw new AuthenticationError(t('The authorization code prefix is incorrect. it should be: Bearer or bearer'));
        }

        try {
            const decodedToken = <{ username: string }>jwt.verify(token, 'secretKey');
            const { data } = await this.userServiceInterface.findOneWithRolesAndPermissions({ username: decodedToken.username }).toPromise();
            return data;
        } catch (error) {
            if (error instanceof jwt.JsonWebTokenError) {
                throw new AuthenticationError(t('The authorization code is incorrect'));
            }
            if (error instanceof jwt.TokenExpiredError) {
                throw new AuthenticationError(t('The authorization code has expired'));
            }
        }
    }

    async saveResourcesAndPermissions(metadataMap: Map<string, { resource: Resource, permissions: Permission[] }>) {
        const obj = {};
        metadataMap.forEach((v, k) => obj[k] = v);
        await this.authServiceInterface.saveResourcesAndPermissions({ metadata: JSON.stringify(obj) }).toPromise();
    }
}