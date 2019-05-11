import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { GraphqlOptions } from './graphql.options';
import { TypeormModule } from './typeorm/index'
@Module({
  imports: [
    TypeormModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '192.168.1.238',
      port: 5432,
      username: 'prisma',
      password: 'prisma',
      database: 'prisma',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    GraphQLModule.forRootAsync({
      useClass: GraphqlOptions,
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class ApplicationModule { }
