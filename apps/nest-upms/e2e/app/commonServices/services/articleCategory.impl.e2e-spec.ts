/*
 * @Author: lijiansheng 
 * @Date: 2019-05-21 10:22:30 
 * @Last Modified by: lijiansheng
 * @Last Modified time: 2019-05-21 15:33:46
 */
import { INestApplication } from "@nestjs/common";
import { Test } from "@nestjs/testing";
import { ApplicationModule } from "../../../../src";
import { ArticleCategoryService } from "../../../../src/commonServices/core";
import { ArticleCategoryEntity } from "../../../../src/typeorm/entities/articleCategory.entity";

describe('ArticleCategoryServiceImpl', () => {
    let app: INestApplication;
    let categoryService: ArticleCategoryService;
    beforeAll(async () => {
        const module = await Test.createTestingModule({
            imports: [ApplicationModule]
        }).compile();
        app = module.createNestApplication();
        categoryService = app.get(ArticleCategoryService);
        await categoryService.clear();

        await categoryService.insert(getArticleCategory('交通新闻', 'Traffic news'))
            .then(res => { }).catch(e => { })
        await categoryService.insert(getArticleCategory('大众生活', 'public life'))
            .then(res => { }).catch(e => { })
        await app.init();
    })

    // Add a category, because the title is '', throw an exception
    it(`insert.throw.ArticleCategoryMustDataError`, async () => {
        await categoryService.insert(getArticleCategory(``, ``)).then(res => {
            expect(res.name).toBe(``);
        }).catch(e => {
            expect(e instanceof Error).toBe(true);
        })
    });

    // Add a category, because the title already exists in the database, throw an exception
    it(`insert.thorw.ArticleCategoryTitleError`, async () => {
        await categoryService.insert(getArticleCategory(`交通新闻`, 'Traffic news')).then(res => {
            expect(res.name).toEqual(`Traffic news`);
        }).catch(e => {
            expect(e instanceof Error).toBe(true);
        })
    });

    // Update the category, because there is no such category in the database, throw an exception
    it(`save.thorw.ArticleCategoryNullError`, async () => {
        let newCategory = getArticleCategory(`城市生活`, `city life`);
        let oldCategory = getArticleCategory(`城市天气`, `city weather`);
        await categoryService.save(newCategory, oldCategory).then(res => {
            expect(res.name).toEqual(`city life`);
        }).catch(e => {
            expect(e instanceof Error).toBe(true);
        })
    });

    // Update category succeeded, public life => city life
    it(`save`, async () => {
        let newCategory = getArticleCategory(`城市生活`, `city life`);
        let oldCategory = getArticleCategory(`大众生活`, `public life`);
        await categoryService.save(newCategory, oldCategory).then(res => {
            expect(res.name).toEqual(`city life`);
        })
    });

    // Delete category
    it(`delete`, async () => {
        let category = getArticleCategory(`交通新闻`, `Traffic news`);
        await categoryService.delete(category).then(res => {
            expect(res.affected).toEqual(1);
        })
    });

    // Get a category
    it(`get`, async () => {
        await categoryService.get({ icon: 'icon' }).then(res => {
            expect(res.icon).toEqual('icon');
        })
    });


    afterAll(async () => {
        await app.close();
    });

});

function getArticleCategory(title: string, name: string): ArticleCategoryEntity {
    let articleCategory = new ArticleCategoryEntity();
    articleCategory.title = title;
    articleCategory.name = name;
    articleCategory.icon = 'icon';
    articleCategory.description = 'description';
    return articleCategory;
}