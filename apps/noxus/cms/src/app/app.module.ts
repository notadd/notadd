import { Module } from '@nestjs/common';
import { MagnusClientModule } from '@magnus/client';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleController } from './controller/article.controller';
import { ArticleService } from './services/article.service';
import { ArticleCategoryService } from './services/articleCategory.service';
import { ArticleCategoryController } from './controller/articleCategory.controller';

@Module({
  imports: [
    MagnusClientModule.forRoot(__dirname)
  ],
  controllers: [
    AppController,
    ArticleController,
    ArticleCategoryController
  ],
  providers: [
    AppService, 
    ArticleService,
    ArticleCategoryService,
  ],
})
export class AppModule { }
