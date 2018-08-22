import { Observable } from 'rxjs';

export interface RootServiceInterface {
    sayHello(data: { name: string }): Observable<{ msg: string }>;
}