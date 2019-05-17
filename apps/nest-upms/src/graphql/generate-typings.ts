import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
    typePaths: [join(__dirname, '**/*.graphql')],
    path: join(__dirname, 'src/graphql.schema.ts'),
    outputAs: 'class',
});
