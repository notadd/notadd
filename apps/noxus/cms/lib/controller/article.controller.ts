import { Controller } from "@nestjs/common";
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { GrpcMethod } from '@nestjs/microservices';
import { Article } from '@noxus/db';
import { Observable, of, from } from 'rxjs';
import { ArticleService } from '../service/article.service';
import { map } from 'rxjs/operators';
@Resolver()
@Controller()
export class ArticleController {
    constructor(
        public articleService: ArticleService,
    ) { }

    @Mutation()
    @GrpcMethod()
    articleFindOne(@Args() article: Article): Observable<any> {
        return from(this.articleService.articleFindOne(article))
            .pipe(
                map(res => {
                    return {
                        res
                    }
                })
            )
    }
}