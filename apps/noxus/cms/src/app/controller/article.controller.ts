import { Controller, Get, Inject, Param } from "@nestjs/common";
import { ArticleService } from '../services/article.service';

@Controller()
export class ArticleController {
    constructor(
        @Inject(ArticleService)public readonly articleService: ArticleService,
    ) { }

    @Get(':id')
    findOneArticle(@Param('id') title: string): any {
        return this.articleService.findOneArticle(title);
    }
}