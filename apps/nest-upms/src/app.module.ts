import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AuthModule } from './auth';
import baseInfoProviders from './baseInfo';
import casbinProviders from './casbin/providers';
import commonServicesProviders from './commonServices/index';
import coreProviders from './core/index';
import { GraphqlOptions } from './graphql.options';
import { ssoProviders } from './sso';
import { JwtStrategyImpl } from './sso/jwt.strategy.impl';
import { SsoResolver } from './sso/sso.resolver';
import { InstallResolver } from './install/services/install.service';
import { UserServiceImpl } from './baseInfo/services/user.service.impl';
import { TypeOrmModule } from '@nestjs/typeorm';
import entity from './typeorm/index';
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
