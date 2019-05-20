import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminLoginPage } from './login'
import { AdminRegisterPage } from './register'
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from "apollo-angular-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { NgZorroAntdModule, NzFormModule } from 'ng-zorro-antd'
import { WebAdminInstallPage, AddonSetting, DbSetting, UserSetting } from './install'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [
        NzFormModule,
        NgZorroAntdModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([{
            path: 'login',
            component: AdminLoginPage
        }, {
            path: 'register',
            component: AdminRegisterPage
        }, {
            path: 'install',
            component: WebAdminInstallPage
        }]),
        ApolloModule,
        HttpLinkModule
    ],
    declarations: [
        AdminLoginPage,
        AdminRegisterPage,
        WebAdminInstallPage,
        AddonSetting,
        DbSetting,
        UserSetting
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