import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminLoginPage } from './login'
import { AdminRegisterPage } from './register'
import gql from 'graphql-tag';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from "apollo-angular-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
@NgModule({
    imports: [
        RouterModule.forChild([{
            path: 'login',
            component: AdminLoginPage
        }, {
            path: 'register',
            component: AdminRegisterPage
        }]),
        ApolloModule,
        HttpLinkModule
    ],
    declarations: [
        AdminLoginPage,
        AdminRegisterPage
    ],
    providers: [
        {
            provide: APOLLO_OPTIONS,
            useFactory: (httpLink: HttpLink) => {
                return {
                    cache: new InMemoryCache(),
                    link: httpLink.create({
                        uri: "http://localhost:9000/graphql"
                    })
                }
            },
            deps: [HttpLink]
        }
    ]
})
export class PagesModule { }