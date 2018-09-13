import { Inject, Injectable } from '@nestjs/common';
import { GqlModuleOptions, GqlOptionsFactory } from '@nestjs/graphql';
import * as GraphQLJSON from 'graphql-type-json';

import { AuthService } from './modules/user/auth/auth.service';

@Injectable()
export class GraphQLConfigService implements GqlOptionsFactory {
    constructor(
        @Inject(AuthService) private readonly authService: AuthService
    ) { }

    createGqlOptions(): GqlModuleOptions {
        return {
            typePaths: ['./**/*.types.graphql'],
            resolvers: { JSON: GraphQLJSON },
            context: async ({ req }) => {
                const user = await this.authService.validateUser(req);
                return { user };
            }
        };
    }
}