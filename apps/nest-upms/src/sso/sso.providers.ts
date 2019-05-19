import { Provider } from '@nestjs/common';
import { AuthServiceImpl } from './auth.service.impl';
import { AuthService, SsoService } from './core/index';
import { SsoResolver } from './sso.resolver';
import { SsoServiceImpl } from './sso.service.impl';
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

