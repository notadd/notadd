import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

import { PERMISSION_DEFINITION } from '../../../common/decorators';

@Injectable()
export class AuthGurad implements CanActivate {
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const gqlCtx = GqlExecutionContext.create(context);

        const user = gqlCtx.getContext().user;

        if (user && user.username === 'sadmin') return true;

        const userPerm: string[] = [];
        user && user.roles.length && user.roles.forEach(role => {
            role.permissions && role.permission.length && role.permissions.forEach(permission => {
                userPerm.push(permission.identify);
            });
        });
        const handlerPerm = Reflect.getMetadata(PERMISSION_DEFINITION, context.getClass().prototype, context.getHandler().name);
        if (handlerPerm && !userPerm.includes(handlerPerm.identify)) {
            return false;
        }
        return true;
    }
}