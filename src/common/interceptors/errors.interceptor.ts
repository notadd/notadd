import { ExecutionContext, HttpException, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorsInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, calls$: Observable<any>): Observable<any> {
        return calls$.pipe(catchError((error, caught) => {
            if (error instanceof HttpException) {
                return Promise.resolve({
                    code: error.getStatus(),
                    message: error.getResponse()
                });
            }
            if (error.code && error.details) {
                return Promise.resolve({
                    code: error.code,
                    message: error.details
                });
            }
        }));
    }
}