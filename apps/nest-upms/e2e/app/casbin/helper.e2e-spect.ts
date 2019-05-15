import { Helper, Enforcer, newModel } from 'casbin';
import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { ApplicationModule } from '../../../src/app.module'
describe('casbin helper', () => {
    let app: INestApplication;
    let enforcer: Enforcer;
    beforeAll(async () => {
        const module = await Test.createTestingModule({
            imports: [ApplicationModule]
        }).compile();
        app = module.createNestApplication();
        enforcer = app.get(Enforcer);
        await app.init();
    });

    it(`loadPolicyLine`, () => {
        const model = newModel()
        const res = Helper.loadPolicyLine(``, model)
        expect(!!enforcer).toEqual(true)
    });

    afterAll(async () => {
        await app.close();
    });
});
