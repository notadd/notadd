import { ArticleService } from './core';
import { ArticleServiceImpl } from './services/article.service.impl';

export default [{
    provide: ArticleService,
    useClass: ArticleServiceImpl
},

]