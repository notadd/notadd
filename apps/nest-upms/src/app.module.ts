import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import baseInfoProviders from './baseInfo';
import { GraphqlOptions } from './graphql.options';
import { ssoProviders } from './sso';
// GqlModuleOptions
@Module({
  imports: [
    // AuthModule.forRoot(JwtStrategyImpl),
    GraphQLModule.forRootAsync({
      useClass: GraphqlOptions,
    }),
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5432,
    //   database: 'test_ci',
    //   username: 'postgres',
    //   password: 'postgres',
    //   synchronize: true,
    //   entities: entity
    // }),
  ],
  controllers: [
    // SsoResolver,
    // InstallResolver
  ],
  providers: [
    // InstallResolver,
    // ...coreProviders,
    ...ssoProviders,
    ...baseInfoProviders,
    // ...commonServicesProviders,
    // ...casbinProviders
  ]
})
export class ApplicationModule { }
