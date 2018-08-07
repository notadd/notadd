import { FastifyAdapter, NestFactory } from '@nestjs/core';
import { GraphQLFactory } from '@nestjs/graphql';
import * as bodyParser from 'body-parser';
import { fastifyGraphiQL, fastifyGraphQL } from 'fastify-graphql-middleware';

import { AppModule } from './app.module';
import { graphqlConfig } from './configurations';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, new FastifyAdapter());

    if (graphqlConfig.ide.enable) {
        app.use(graphqlConfig.ide.prefix, fastifyGraphiQL({ endpointURL: graphqlConfig.ide.endpointURL }));
    }

    app.use('/graphql', bodyParser.json());

    const graphQLFactory = app.get(GraphQLFactory);
    const typeDefs = graphQLFactory.mergeTypesByPaths(graphqlConfig.typeDefsPath);
    const schema = graphQLFactory.createSchema({ typeDefs });
    app.use('/graphql', fastifyGraphQL(req => ({ schema, rootValue: req })));

    await app.listen(3000);
}

bootstrap();