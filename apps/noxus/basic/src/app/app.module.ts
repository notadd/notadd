import { Module } from '@nestjs/common';
import { MagnusClientModule } from '@magnus/client'

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MagnusClientModule.forRoot(__dirname)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
