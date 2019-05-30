import { Controller } from "@nestjs/common";
import { Resolver, Mutation, Args, Info } from '@nestjs/graphql';
import { MagnusClient } from '@notadd/magnus-client'
import { GrpcMethod } from '@nestjs/microservices';
import { Observable, of } from 'rxjs';
import { ArticleEntity } from "@noxus/db";
@Resolver()
@Controller()
export class ArticleController {
    constructor(
        public mangusClient: MagnusClient,
    ) { }

    @GrpcMethod()
    @Mutation()
    insertArticle(@Args() args: any,@Info() info: any): Observable<any> {
        this.mangusClient.mutate(info);
        return of('123');
    }
}