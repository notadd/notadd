import { GqlOptionsFactory, GqlModuleOptions } from '@nestjs/graphql';
import { Injectable } from '@nestjs/common';
import { join } from 'path';
import {
    GraphQLOptions,
    runHttpQuery,
    convertNodeHttpToRequest,
} from 'apollo-server-core';
import { IncomingMessage, ServerResponse } from 'http'
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
            },
            bodyParserConfig: {
                reviver: (key: string, value: any) => {
                    console.log(`bodyParserConfig`, { key, value })
                },
                verify: (req: IncomingMessage, res: ServerResponse, buf: Buffer, encoding: string) => {
                    console.log({ encoding });
                }
            }
        };
    }
}
