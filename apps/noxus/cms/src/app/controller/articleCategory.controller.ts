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

    // 添加一个分类
    @Post('insert')
    CategoryInsert(@Body() category: ArticleCategory): any {
        return this.categoryService.categorySave(category);
    }

    // 删除一个分类
    @Post('delete')
    CategoryDelete(@Body() body: { article_category_id: number }): any {
        return this.categoryService.categoryDelete(body);
    }

    // 更新一个分类
    @Post('update')
    CategoryUpdate(@Body() category: ArticleCategory): any {
        return this.categoryService.categoryUpdate(category);
    }
}
