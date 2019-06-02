import { Controller, Get, Inject, Param, Post, Body, Delete } from "@nestjs/common";
import { ArticleService } from '../services/article.service';
import { Article } from '@magnus/db';

@Controller('article')
export class ArticleController {
    constructor(
        @Inject(ArticleService) public readonly articleService: ArticleService,
    ) { }

    // 根据id查找单个
    @Post('post')
    articleFindOne(@Body() body: { article_id: number }): any {
        console.log(typeof (body.article_id))
        return this.articleService.articleFindOne(body);
    }

    // 根据titie查询多个
    @Get(':title')
    articleFind(@Param('title') title: string): any {
        return this.articleService.articleFind({ title });
    }

    // 保存
    @Post()
    articleSave(@Body() article: Article): any {
        return this.articleService.ArticleSave(article);
    }

    // 删除
    @Delete(':id')
    articleDelete(@Param('id') article_id: number): any {
        console.log(article_id)
        return this.articleService.ArticleDelete({ article_id });
    }
}