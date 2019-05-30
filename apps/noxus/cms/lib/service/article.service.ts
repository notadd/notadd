import { MagnusClient } from '@notadd/magnus-client'
import { ArticleEntity } from '@noxus/db';
export class ArticleService {
    constructor(
        public client: MagnusClient<ArticleEntity>
    ) { }

}