import { Controller } from "@nestjs/common";
import { Resolver, Mutation, Args, Info } from '@nestjs/graphql';
import { MagnusClient, gql} from '@notadd/magnus-client'
import { GrpcMethod } from '@nestjs/microservices';
import { Observable, of } from 'rxjs';
@Resolver()
@Controller()
export class ArticleController {
    constructor(
        public mangusClient: MagnusClient,
    ) { }

    @GrpcMethod()
    @Mutation()
    insertArticle(@Args() args: any): Observable<any> {
        this.mangusClient.mutate({
            mutation: gql`
            insertArticle(){
    
    
            }
            `,
            variables:{}
        })
        return of('123');
    }
}