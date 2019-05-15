import { Enforcer } from 'casbin';
import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { ApplicationModule } from '../../../src/app.module'
describe('casbin', () => {
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

    it(`enforcer should exist`, () => {
        expect(!!enforcer).toEqual(true)
    });

    afterAll(async () => {
        await app.close();
    });
});
