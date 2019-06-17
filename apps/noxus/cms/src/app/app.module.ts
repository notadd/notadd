import { Module } from '@nestjs/common';
import { MagnusClientModule } from '@magnus/client';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleController } from './controller/article.controller';
import { ArticleService } from './services/article.service';

@Module({
  imports: [
    MagnusClientModule.forRoot(__dirname)
    
  ],
  controllers: [
    AppController,
    ArticleController
  ],
  providers: [
    AppService, 
    ArticleService],
})
export class AppModule { }
