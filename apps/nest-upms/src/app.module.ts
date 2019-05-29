import { Module } from '@nestjs/common';
import baseInfoProviders from './baseInfo';
import { ssoProviders } from './sso';
import { MagnusServerModule, MAGNUS_CONFIG } from '@notadd/magnus';
import entity from './typeorm'
@Module({
  imports: [
    MagnusServerModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'test_ci',
      username: 'postgres',
      password: 'postgres',
      synchronize: true,
      entities: entity
    }),
    // AuthModule.forRoot(JwtStrategyImpl),
    
  ],
  controllers: [
    // SsoResolver,
    // InstallResolver
  ],
  providers: [
    {
      provide: MAGNUS_CONFIG,
      useValue: {}
    },
    // InstallResolver,
    // ...coreProviders,
    ...ssoProviders,
    ...baseInfoProviders,
    // ...commonServicesProviders,
    // ...casbinProviders
  ]
})
export class ApplicationModule { }
