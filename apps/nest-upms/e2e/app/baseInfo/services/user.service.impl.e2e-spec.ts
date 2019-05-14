import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { ApplicationModule } from '../../../../src';
import { UserService } from '../../../../src/baseInfo/core';
import { UserEntity } from '../../../../src/typeorm';
import { UserIsNullError, UserNameExistError } from '../../../../src/baseInfo/errors/error';
describe('UserServiceImpl', () => {
    let app: INestApplication;
    let userService: UserService;
    beforeAll(async () => {
        const module = await Test.createTestingModule({
            imports: [ApplicationModule]
        }).compile();
        app = module.createNestApplication();
        userService = app.get(UserService);

        /** 新增用户 */
        let user = new UserEntity();
        user.username = 'ququ';
        user.password = '123456';
        user.phone = '13588888888';
        user.email = 'ququ@qq.com';
        user.unionid = 'unionid3';
        user.salt = '666666';
        user.realname = 'ququ';
        user.nickname = 'ququ';
        user.avatar = 'avatar';
        user.sex = 1;
        user.openid = 'd34e0c7a-7529-11e9-8f9e-2a85a4085b59';
        userService.insert(user).then(res => { }).catch(e => { });
        await app.init();
    });

    // // 新增用户
    it(`insert`, async () => {
        let user = new UserEntity();
        user.username = 'mumu';
        user.password = '123456';
        user.phone = '13568888888';
        user.email = 'mumu@qq.com';
        user.unionid = 'unionid2';
        user.salt = '666666';
        user.realname = 'mumu';
        user.nickname = 'mumu';
        user.avatar = 'avatar';
        user.sex = 1;
        user.openid = 'd34e0c7a-7529-11e9-8f9e-2a85a4185b59';
        await userService.insert(user).then(res => {
            expect(res.email).toEqual('mumu@qq.com');
        }).catch(e => {
            expect(e instanceof UserNameExistError).toBeTruthy();
        });
    });

    /** 更新用户 */
    it(`save`, async () => {
        let newUser = new UserEntity();
        // 修改用户的邮箱
        newUser.email = 'mumu1@qq.com';
        userService.save(newUser, { username: 'mumu' }).then((res) => {
            expect(res.email).toBe('mumu1@qq.com')
        }).catch(e => {
            expect(e instanceof UserIsNullError).toBe(true)
        });
    });

    /** 获取用户 */
    it(`get`, async () => {
        let user = await userService.get({ username: 'mumu' });
        let user2 = await userService.get({ phone: '13568888888' })
        expect(user).toEqual(user2);
    });

    /** 删除用户 */
    it(`delete`, async () => {
        let user = await userService.get({ username: 'ququ' });
        userService.delete(user).then(res => {
            expect(res.affected).toEqual(1);
        }).catch(e => { })
    });

    afterAll(async () => {
        await app.close();
    });

});


