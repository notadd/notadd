import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth';
import baseInfoProviders from './baseInfo';
import casbinProviders from './casbin/providers';
import commonServicesProviders from './commonServices/index';
import coreProviders from './core/index';
import { GraphqlOptions } from './graphql.options';
import { ssoProviders } from './sso';
import { JwtStrategyImpl } from './sso/jwt.strategy.impl';
import { SsoResolver } from './sso/sso.resolver';
import allEntities from './typeorm'
// type: 'postgres',
// host: 'localhost',
// port: 5432,
// username: 'postgres',
// password: 'postgres',
// database: 'test_ci',
@Module({
  imports: [
    AuthModule.forRoot(JwtStrategyImpl),
    TypeOrmModule.forRoot({
      type: 'cockroachdb',
      host: '192.168.1.144',
      port: 26257,
      username: 'root',
      password: 'root',
      database: 'defaultdb',
      logging: false,
      entities: [
        ...allEntities
      ],
      synchronize: true,
    }),
    GraphQLModule.forRootAsync({
      useClass: GraphqlOptions,
    }),
    TypeOrmModule.forFeature([
      ...allEntities
    ])
  ],
  controllers: [
    SsoResolver
  ],
  providers: [
    ...coreProviders,
    ...ssoProviders,
    ...baseInfoProviders,
    ...commonServicesProviders,
    ...casbinProviders
  ]
})
export class ApplicationModule { }
