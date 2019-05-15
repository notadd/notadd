import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { ApplicationModule } from '../../../../src';
import { ArticleService } from '../../../../src/commonServices/core';
import { ArticleMustDataError } from "../../../../src/commonServices/errors/error";
import { ArticleEntity } from '../../../../src/typeorm/entities/article.entity';
describe('ArticleServiceImpl', () => {
    let app: INestApplication;
    let articleService: ArticleService;
    beforeAll(async () => {
        const module = await Test.createTestingModule({
            imports: [ApplicationModule]
        }).compile();
        app = module.createNestApplication();
        articleService = app.get(ArticleService);

        await app.init();
    });

    it(`insert.throw.ArticleMustDataError`, async () => {
        let article = getArticle();
        articleService.insert(article).then(res => {

        }).catch(e => {
            expect(e instanceof ArticleMustDataError).toBeTruthy();
        })
    });

    it(`insert`, async () => {
        let article = getArticle();
        article.title = 'new title';
        articleService.insert(article).then(res => {
            expect(res.title).toEqual('new title');
        }).catch(e => {
            expect(e instanceof ArticleMustDataError).toBeTruthy();
        })
    });






    afterAll(async () => {
        await app.close();
    });
});

export function getArticle(): ArticleEntity {
    let article = new ArticleEntity();
    article.article_category_id = 1;
    article.icon = 'icon';
    article.thumbs = 'thumbs';
    article.description = 'description';
    return article;
}
