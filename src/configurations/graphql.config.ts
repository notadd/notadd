export const graphqlConfig = {
    typeDefsPath: './**/*.types.graphql',
    prefix: '/graphql',
    ide: {
        enable: true,
        prefix: '/graphiql',
        endpoint: '/graphql'
    }
};