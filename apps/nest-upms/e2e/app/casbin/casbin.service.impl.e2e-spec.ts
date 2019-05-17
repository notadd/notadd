import { Enforcer } from 'casbin';
import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { ApplicationModule } from '../../../src/app.module'
import { CasbinService } from '../../../src/casbin/core/casbin';

describe('casbinServiceImpl', () => {
    let app: INestApplication;
    let casbinService: CasbinService;
    beforeAll(async () => {
        const module = await Test.createTestingModule({
            imports: [ApplicationModule]
        }).compile();
        app = module.createNestApplication();
        casbinService = app.get(CasbinService);
        await app.init();
    });

    it(`getAllRoleWithPermission`, async () => {
        await casbinService.getAllRoleWithPermission().then(res => {
           
        }).catch(e => { })
    });

    afterAll(async () => {
        await app.close();
    });
});
