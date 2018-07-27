import { FastifyAdapter, NestFactory } from '@nestjs/core';
import { GraphQLFactory } from '@nestjs/graphql';
import { graphiqlFastify, graphqlFastify } from 'fastify-graphql';

import { AppModule } from './app.module';
import { graphqlConfig } from './configurations';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, new FastifyAdapter());
    const graphQLFactory = app.get(GraphQLFactory);
    const typeDefs = graphQLFactory.mergeTypesByPaths(graphqlConfig.typeDefsPath);
    const schema = graphQLFactory.createSchema({ typeDefs });
    app.register(graphqlFastify, {
        prefix: graphqlConfig.prefix,
        graphql: {
            schema
        }
    });
    // If graphQL IDE enabled, then register the graphiql Fastify plugin.
    if (graphqlConfig.ide.enable) {
        app.register(graphiqlFastify, {
            prefix: graphqlConfig.ide.prefix,
            graphiql: {
                endpointURL: graphqlConfig.ide.endpoint
            }
        });
    }

    await app.listen(3000);
}

bootstrap();