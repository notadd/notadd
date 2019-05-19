import { CanActivate, ExecutionContext } from '@nestjs/common'
import { Observable } from 'rxjs';
export class CasbinGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        
        return false;
    }
}