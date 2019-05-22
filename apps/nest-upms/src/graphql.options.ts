import { GqlOptionsFactory, GqlModuleOptions } from '@nestjs/graphql';
import { Injectable } from '@nestjs/common';
import { join } from 'path';

@Injectable()
export class GraphqlOptions implements GqlOptionsFactory {
    createGqlOptions(): Promise<GqlModuleOptions> | GqlModuleOptions {
        return {
            typePaths: ['./**/*.graphql'],
            path: '/',
            installSubscriptionHandlers: true,
            resolverValidationOptions: {
                requireResolversForResolveType: false,
            },
            definitions: {
                path: join(__dirname, 'graphql.schema.d.ts'),
                outputAs: 'class',
            }
        };
    }
}
