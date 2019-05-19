import { Enforcer, newEnforcer, Adapter } from 'casbin'
import { join } from 'path'
import { Provider } from '@nestjs/common';
import { CasbinService } from './core/casbin';
import { NgerCasbinAdapter } from './adapter';
import { CasbinServiceImpl } from './services/casbin.service.impl';

import { AddonServiceImpl } from './services/addon.service.impl';
import { CoreAddon } from './core/addon';

const casbinProviders: Provider[] = [{
    provide: Enforcer,
    useFactory: async (a: Adapter) => {
        const e = await newEnforcer(join(__dirname, 'rbac_model.conf'), a);
        await e.loadPolicy();
        return e;
    },
    inject: [
        NgerCasbinAdapter
    ]
}, {
    provide: NgerCasbinAdapter,
    useFactory: (service: CasbinService) => new NgerCasbinAdapter(service),
    inject: [
        CasbinService
    ]
}, {
    provide: CasbinService,
    useClass: CasbinServiceImpl
},{
provide: CoreAddon,
useClass:AddonServiceImpl
},
];

export default casbinProviders;
