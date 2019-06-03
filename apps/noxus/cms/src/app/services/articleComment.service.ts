import { Injectable } from '@nestjs/common';
import { MagnusClient } from '@notadd/magnus-client';

@Injectable()
export class ArticleCommentService {
    constructor(
        public readonly client: MagnusClient,
    ) { }

    
}