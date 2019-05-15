import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { ApplicationModule } from '../../../../src';
import { ArticleService } from '../../../../src/commonServices/core';
import { ArticleMustDataError, ArticleTitleError, ArticleNullError } from "../../../../src/commonServices/errors/error";
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
        await articleService.clear();

        // test insert,get
        let newArticle = getArticle('new title');
        await articleService.insert(newArticle).then(res => {}).catch(e => {})

        // test delete
        let oldArticle = getArticle('old title');
        await articleService.insert(oldArticle).then(res => {}).catch(e => {})

        // test save
        let article = getArticle('test save title');
        await articleService.insert(article).then(res => {}).catch(e => {})

        await app.init();
    });

    // 添加文章,但因title为''所以抛异常
    it(`insert.throw.ArticleMustDataError`, async () => {
        let article = getArticle('');
        await articleService.insert(article).then(res => {
            expect(!res.title).toBeTruthy()
        }).catch(e => {
            expect(e instanceof ArticleMustDataError).toEqual(true);
        })
    });

    // 添加文章,但因title存在所以抛异常
    it(`insert.throw.ArticleTitleError`, async () => {
        let article = getArticle('new title');
        await articleService.insert(article).then(res => {
            expect(res.title).toEqual('new title');
        }).catch(e => {
            expect(e instanceof ArticleTitleError).toEqual(true);
        })
    });

    it(`insert`, async () => {
        let article = getArticle('remember me');
        await articleService.insert(article).then(res => {
            expect(res.title).toEqual('remember me');
        }).catch(e => {
            expect(e instanceof ArticleTitleError).toEqual(true);
        })
    });

    it(`get`, async() => {
        await articleService.get({title: 'new title'}).then(res => {
            expect(res.title).toEqual('new title');
        }).catch(e => { })
    });
    
    // 更改了分类id为2
    it(`save`, async() => {
        let article = getArticle('new title');
        article.article_category_id = 2;
        await articleService.save(article, {title: 'new title'}).then(res => {
            expect(res.article_category_id).toBe(2)
        }).catch(e => { })
    });
    
    // 更改了分类id为2,因为数据库无title title标题文章所以异常
    it(`save.throw.ArticleNullError`, async() => {
        let article = getArticle('new title');
        article.article_category_id = 2;
        await articleService.save(article, {title: 'title title'}).then(res => {})
        .catch(e => {
            expect(e instanceof ArticleNullError).toEqual(true)
        })
    });

    // 更改了title为test save title,因为数据库已有所以抛异常
    it(`save.throw.ArticleTitleError`, async() => {
        let article = getArticle('test save title');
        await articleService.save(article, {title: 'new title'}).then(res => {})
        .catch(e => {
            expect(e instanceof ArticleTitleError).toEqual(true)
        })
    });

    it(`delete`, async() => {
        await articleService.delete({title: 'old title'}).then(res => {
            expect(res.affected).toBe(1);
        }).catch(e => {})
    });




    afterAll(async () => {
        await app.close();
    });
});

export function getArticle(title: string): ArticleEntity {
    let article = new ArticleEntity();
    article.title = title;
    article.article_category_id = 1;
    article.icon = 'icon';
    article.thumbs = 'thumbs';
    article.description = 'description';
    return article;
}
