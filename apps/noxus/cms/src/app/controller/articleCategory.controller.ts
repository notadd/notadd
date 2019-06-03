import { Controller, Post, Body } from "@nestjs/common";
import { ArticleCategoryService } from '../services/articleCategory.service';
import { ArticleCategory } from '@magnus/db';

@Controller('category')
export class ArticleCategoryController {

    constructor(
        public readonly categoryService: ArticleCategoryService,
    ) { }

    // 根据id查询单个分类
    @Post('find')
    CategoryFindOne(@Body() body: { article_category_id: number }): any {
        return this.categoryService.categoryFindOne(body);
    }

    @Post('insert')
    CategoryInsert(@Body() category: ArticleCategory): any {
        return this.categoryService.categorySave(category);
    }
}
