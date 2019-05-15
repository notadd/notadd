import { Enforcer, newEnforcer } from 'casbin'
import { join } from 'path'
import { Provider } from '@nestjs/common';

const casbinProviders: Provider[] = [{
    provide: Enforcer,
    useFactory: async () => {
        return await newEnforcer(join(__dirname, 'rbac_model.conf'), '');
    },
    inject: []
}];

export default casbinProviders;
