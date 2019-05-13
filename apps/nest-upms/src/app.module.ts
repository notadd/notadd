import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormModule } from './typeorm/index';
import { ssoProviders } from './sso';
import { AuthModule } from './auth';
import { JwtStrategyImpl } from './sso/jwt.strategy.impl';
import coreProviders from './core/index';
import baseInfoProviders from './baseInfo';

@Module({
  imports: [
    TypeormModule,
    AuthModule.forRoot(JwtStrategyImpl),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'prisma',
      password: 'prisma',
      database: 'prisma',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    // GraphQLModule.forRootAsync({
    //   useClass: GraphqlOptions,
    // })
  ],
  controllers: [],
  providers: [
    ...coreProviders,
    ...ssoProviders,
    ...baseInfoProviders
  ]
})
export class ApplicationModule { }
