import { Provider } from '@nestjs/common';
import { SsoResolver } from './sso.resolver';
export const ssoProviders: Provider[] = [
    SsoResolver
];