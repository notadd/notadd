import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AuthService, UserEntity, ApplicationModule } from '../../../../src'
describe('AuthService', () => {
    let app: INestApplication;
    let authService: AuthService;
    
    beforeAll(async () => {
        const module = await Test.createTestingModule({
            imports: [ApplicationModule]
        }).compile();
        app = module.createNestApplication();
        authService = app.get(AuthService);
        await app.init();
    });

    it(`createToken`, async () => {
        /** 用户信息 */
        let user: UserEntity = {} as UserEntity;
        user.username = `imeepos4d`;
        user.password = `123456`;
        user.openid = `fromUser`;
        const token = await authService.createToken(user).then(token =>{
            expect(token.access_token.length).toBe(212);
            expect(token.openid).toBe('fromUser')
        }).catch(e => {
            
        })
    });

    afterAll(async () => {
        await app.close();
    });
});

