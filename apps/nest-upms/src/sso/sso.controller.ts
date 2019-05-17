/*
 * @Author: lijiansheng 
 * @Date: 2019-05-17 15:53:17 
 * @Last Modified by: lijiansheng
 * @Last Modified time: 2019-05-17 16:02:04
 */

import { Controller } from '@nestjs/common';
import { Observable, from } from 'rxjs';
import { SsoService } from './core/sso.service';
import { GrpcMethod } from '@nestjs/microservices';
import { map } from 'rxjs/operators';
import { AccessTokenEntity, UserEntity } from '../typeorm';

@Controller()
export class SsoController {
    constructor(public sso: SsoService) { }

    @GrpcMethod('SsoService')
    token(body: { username: string, password: string }): Observable<AccessTokenEntity> {
        console.log(body.password)
        return from(this.sso.token(body.username, body.password))
            .pipe(
                map(res => {
                    return res;
                }),
            );
    }

    @GrpcMethod('SsoService')
    verify(body: { access_token: string }): Observable<UserEntity> {
        return from(this.sso.verify(body.access_token))
            .pipe(
                map(res => {
                    return res;
                }),
            )
    }

    @GrpcMethod('SsoService')
    refreshToken(body: { refresh_token: string }): Observable<void> {
        return from(this.sso.refreshToken(body.refresh_token))
            .pipe(
                map(res => {
                    return res;
                })
            )
    }

    @GrpcMethod('SsoService')
    logout(body: { access_token: string }): Observable<void> {
        return from(this.sso.logout(body.access_token))
            .pipe(
                map(res => {
                    return res;
                })
            )
    }
}