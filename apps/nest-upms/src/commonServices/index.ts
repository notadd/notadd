import { ArticleService, MemberService } from './core';
import { ArticleServiceImpl } from './services/article.service.impl';
import { MemberServiceImpl } from './services/member.service.impl';

export default [{
    provide: ArticleService,
    useClass: ArticleServiceImpl
},
{
    provide: MemberService,
    useClass: MemberServiceImpl
},

]