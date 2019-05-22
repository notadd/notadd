/*
 * @Author: lijiansheng 
 * @Date: 2019-05-21 15:14:02 
 * @Last Modified by: lijiansheng
 * @Last Modified time: 2019-05-21 16:05:35
 */
import { INestApplication } from "@nestjs/common";
import { Test } from "@nestjs/testing";
import { ApplicationModule, ArticleCommentEntity } from "../../../../src";
import { ArticleCommentService } from "../../../../src/commonServices/core";

describe('ArticleCategoryServiceImpl', () => {
    let app: INestApplication;
    let commentService: ArticleCommentService;
    beforeAll(async () => {
        const module = await Test.createTestingModule({
            imports: [ApplicationModule]
        }).compile();
        app = module.createNestApplication();
        commentService = app.get(ArticleCommentService);
        await commentService.clear();
        // test get
        await commentService.insert(getComment(`This article is awesome`, 1))
            .then(res => { }).catch(e => { })
        // test delete
        await commentService.insert(getComment(`This is today's news`, 2))
            .then(res => { }).catch(e => { })
        // test save
        await commentService.insert(getComment('this is a test comment', 3))
            .then(res => { }).catch(e => { })
        await app.init();
    })

    // Add a comment, because content can't be empty, throw an exception
    it(`insert.thorw.ArticleCommentMustDataError`, async () => {
        await commentService.insert(getComment('', 1)).then(res => {
            expect(res.content).toEqual('');
        }).catch(e => {
            expect(e instanceof Error).toBe(true);
        })
    });

    // Update the comment, because the database does not have the comment, throw an exception
    it(`save.throw.ArticleCommentNullError`, async () => {
        let newComment = getComment(`This is today's news`, 1);
        let oldComment = getComment(`This is yesterday's news`, 5);
        await commentService.save(newComment, oldComment).then(res => {
            expect(res.content).toEqual('');
        }).catch(e => {
            expect(e instanceof Error).toBe(true);
        })
    });

    it(`save`, async () => {
        let comment = getComment('this is a test comment', 3)
        let newComment = getComment('update comment', 3);
        await commentService.save(newComment, comment).then(res => {
            expect(res.content).toEqual('update comment');
        })
    });

    it(`delete`, async () => {
        await commentService.delete({ article_id: 2 }).then(res => {
            expect(res.affected).toEqual(1);
        })
    });

    it(`get`, async () => {
        await commentService.get({ content: 'This article is awesome' }).then(res => {
            expect(res.content).toEqual('This article is awesome');
        })
    });

    it(`getByUser`, async () => {
        await commentService.getByUser({ openid: 'd34e0c7a-7529-11e9-8f9e-2a85a4185b59' }).then(res => {
            expect(res[0].pid).toEqual(1);
        })
    });

    it(`getByArticle`, async () => {
        await commentService.getByArticle({ article_id: 1 }).then(res => {
            expect(res[0].pid).toEqual(1);
        })
    });

    afterAll(async () => {
        await app.close();
    });
})

function getComment(content: string, article_id: number): ArticleCommentEntity {
    let comment = new ArticleCommentEntity();
    comment.content = content;
    comment.article_id = article_id;
    comment.pid = 1;
    comment.from_user_id = 'd34e0c7a-7529-11e9-8f9e-2a85a4185b59';
    return comment;
}