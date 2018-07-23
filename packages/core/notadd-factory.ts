import { NestApplicationOptions } from "@nestjs/common/interfaces/nest-application-options.interface";
import { FastifyAdapter, NestFactory } from "@nestjs/core";
import { GraphQLFactory } from "@nestjs/graphql";
import { graphiqlFastify, graphqlFastify } from "fastify-graphql";

export class NotaddFactoryStatic {
    public async createApplication(module: any, options?: NestApplicationOptions) {
        const app = await NestFactory.create(module, new FastifyAdapter(), options);
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

        return app;
    }
}

export const NotaddFactory = new NotaddFactoryStatic();
