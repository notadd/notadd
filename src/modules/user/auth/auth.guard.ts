import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

import { PERMISSION_DEFINITION } from '../../../common/decorators';

@Injectable()
export class AuthGurad implements CanActivate {
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const gqlCtx = GqlExecutionContext.create(context);

        const user = gqlCtx.getContext().user;

        if (user && user.username === 'sadmin') return true;

        let userPerm: string[] = [];
        if (user && user.roles.length) {
            user.roles.forEach(role => {
                user.personalPermissions.filter(pp => pp.status === 0).forEach(pp => {
                    role.permissions.splice(role.permissions.indexOf(role.permissions.find(p => p.id === pp.permission.id)), 1);
                });

                if (role.permissions && role.permissions.length) {
                    role.permissions.forEach(permission => {
                        userPerm.push(permission.identify);
                    });
                }

                userPerm.push(...user.personalPermissions.filter(pp => pp.status === 1).map(pp => pp.permission.identify));
            });
        }
        userPerm = [...new Set(userPerm)];

        const handlerPerm = Reflect.getMetadata(PERMISSION_DEFINITION, context.getClass().prototype, context.getHandler().name);
        if (handlerPerm && !userPerm.includes(handlerPerm.identify)) {
            return false;
        }
        return true;
    }
}