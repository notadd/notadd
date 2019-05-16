import { Enforcer, newEnforcer, Adapter } from 'casbin'
import { join } from 'path'
import { Provider } from '@nestjs/common';
import { CasbinService } from './core/casbin';
import { CasbinServiceImpl } from './services/casbin.service.impl';

const casbinProviders: Provider[] = [{
    provide: Enforcer,
    useFactory: async (a: Adapter) => {
        const e = await newEnforcer(join(__dirname, 'rbac_model.conf'), a);
        await e.loadPolicy();
        return e;
    },
    inject: [
        CasbinService
    ]
}, {
    provide: CasbinService,
    useClass: CasbinServiceImpl
}];
export default casbinProviders;
