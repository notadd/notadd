import { FastifyAdapter, NestFactory } from "@nestjs/core";
import { GraphQLFactory } from "@nestjs/graphql";
import { graphiqlFastify, graphqlFastify } from "fastify-graphql";

import { ApplicationModule } from "./application.module";

async function bootstrap() {
    const app = await NestFactory.create(ApplicationModule, new FastifyAdapter());
    const graphQLFactory = app.get(GraphQLFactory);
    const typeDefs = graphQLFactory.mergeTypesByPaths("./**/*.types.graphql");
    const schema = graphQLFactory.createSchema({ typeDefs });
    app.register(graphqlFastify, {
        prefix: "/graphql",
        graphql: {
            schema
        }
    });
    app.register(graphiqlFastify, {
        prefix: "/graphiql",
        graphiql: {
            endpointURL: "/graphql"
        }
    });

    await app.listen(3000);
}

bootstrap();