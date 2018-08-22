import { Inject, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { GraphQLFactory, GraphQLModule } from '@nestjs/graphql';
import { ApolloServer } from 'apollo-server-express';

import { AppResolver } from './app.resolver';
import { ErrorsInterceptor } from './common/interceptors/errors.interceptor';
import { NotaddGrpcClientFactory } from './grpc/grpc.client-factory';

@Module({
    imports: [
        GraphQLModule
    ],
    providers: [
        {
            provide: APP_INTERCEPTOR,
            useClass: ErrorsInterceptor
        },
        NotaddGrpcClientFactory,
        AppResolver
    ],
    exports: []
})
export class AppModule {
    constructor(
        @Inject(GraphQLFactory) private readonly graphQLFactory: GraphQLFactory
    ) { }

    configureGraphQL(app: any) {
        const typeDefs = this.graphQLFactory.mergeTypesByPaths('./**/*.types.graphql');
        const schema = this.graphQLFactory.createSchema({ typeDefs });

        const server = new ApolloServer({
            schema,
            context: async ({ req }) => {
                return { req };
            },
            playground: {
                settings: {
                    'editor.theme': 'light',
                    'editor.cursorShape': 'line'
                }
            }
        });
        server.applyMiddleware({ app });
    }
}