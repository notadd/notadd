import { ArticleService, MemberService, ArticleCategoryService, ArticleCommentService } from './core';
import { ArticleServiceImpl } from './services/article.service.impl';
import { MemberServiceImpl } from './services/member.service.impl';
import { ArticleCategoryServiceImpl } from './services/articleCategory.service.impl';
import { ArticleCommentServiceImpl } from './services/articleComment.service.impl';

export default [{
    provide: ArticleService,
    useClass: ArticleServiceImpl
},
{
    provide: ArticleCategoryService,
    useClass: ArticleCategoryServiceImpl
}
,
{
    provide: ArticleCommentService,
    useClass: ArticleCommentServiceImpl
},

{
    provide: MemberService,
    useClass: MemberServiceImpl
},

]