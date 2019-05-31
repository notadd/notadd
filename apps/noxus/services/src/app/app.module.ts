import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MagnusClientModule } from '@magnus/client'

@Module({
  imports: [
    MagnusClientModule.forRoot(__dirname)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
