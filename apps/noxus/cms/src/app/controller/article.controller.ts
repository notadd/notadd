import { Controller, Get , Param, Post, Body } from "@nestjs/common";
import { ArticleService } from '../services/article.service';
import { Article } from '@magnus/db';

@Controller('article')
export class ArticleController {
    constructor(
        public readonly articleService: ArticleService,
    ) { }

    // 根据id查找单个
    @Post('find')
    articleFindOne(@Body() body: { article_id: number }): any {
        return this.articleService.articleFindOne(body);
    }

    // 根据titie查询多个
    @Get(':title')
    articleFind(@Param('title') title: string): any {
        return this.articleService.articleFind({ title });
    }

    // 保存
    @Post('save')
    articleSave(@Body() article: Article): any {
        return this.articleService.articleSave(article);
    }
    // 更新
    @Post('update')
    articleUpdate(@Body() article: Article): any {
        return this.articleService.articleUpdate(article);
    }

    // 删除
    @Post('delete')
    articleDelete(@Body() body: { article_id: number }): any {
        return this.articleService.articleDelete(body);
    }
}