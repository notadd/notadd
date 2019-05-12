import { Provider } from '@nestjs/common';
import { SsoResolver } from './sso.resolver';
import { SsoService, AuthService } from './core/index';
import { SsoServiceImpl } from './sso.service.impl';
import { AuthServiceImpl } from './auth.service.impl';
export const ssoProviders: Provider[] = [
    SsoResolver,
    {
        provide: SsoService,
        useClass: SsoServiceImpl
    },
    {
        provide: AuthService,
        useClass: AuthServiceImpl
    }
]
