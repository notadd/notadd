import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { ApplicationModule } from '../../../../src';
import { UserServiceImpl } from '../../../../src/baseInfo/services/user.service.impl';
import { UserEntityCreateInput } from '../../../../src/prisma';
describe('UserServiceImpl', () => {
    let app: INestApplication;
    let userService: UserServiceImpl;
    beforeAll(async () => {
        const module = await Test.createTestingModule({
            imports: [ApplicationModule]
        }).compile();
        app = module.createNestApplication();
        userService = app.get(UserServiceImpl);
        /** 新增用户 */
        let user = GetUser('mumu', '15188776655', 'mumu@qq.com');
        const result = await userService.insert(user)
        console.log(result)
        // /** 新增用户 */
        // let user2 = GetUser('mack', '16188776655', 'mack@qq.com');peError: Cannot read property 'result' of undefined
        // user2.unionid = 'union2';
        // user2.openid = 'd34e0c7a-7529-11e9-8f9e-2a85a4185b58';
        // await userService.insert(user2).then(res => { }).catch(e => { });
        await app.init();
    });

    /** 获取用户 */
    it(`get`, async () => {
        await userService.get({ user_id: 1 }).then(res => {
            // expect(res.phone).toEqual('15188776655')
            console.log('----------------')
            console.log(res.openid.toString())
        })
    });

    // /** 新增用户,校验必填信息异常 */
    // it(`insert.throw.UserMustDataIsNullError`, async () => {
    //     let user = GetUser('', '15188776655', 'mumu@qq.com');
    //     await userService.insert(user).then(res => {
    //         expect(res.phone).toEqual('1588776655');
    //     }).catch(e => {
    //         expect(e instanceof UserMustDataNullError).toBeTruthy();
    //     });
    // });

    // /** 新增用户,校验手机格式异常 */
    // it(`insert.throw.PhoneFormtError`, async () => {
    //     let user = GetUser('mumu', '1588776655', 'mumu@qq.com');
    //     await userService.insert(user).then(res => {
    //         expect(res.phone).toEqual('1588776655');
    //     }).catch(e => {
    //         expect(e instanceof PhoneFormtError).toBeTruthy();
    //     });
    // });

    // /** 新增用户,校验邮箱格式异常 */
    // it(`insert.throw.EmailFormtError`, async () => {
    //     let user = GetUser('mumu', '15188776655', 'mumuqq.com');
    //     await userService.insert(user).then(res => {
    //         expect(res.email).toEqual('mumuqq.com');
    //     }).catch(e => {
    //         expect(e instanceof EmailFormtError).toBeTruthy();
    //     });
    // });

    // /** 新增用户,校验用户名已存在异常 */
    // it(`insert.throw.UserNameExistError`, async () => {
    //     let user = GetUser('mumu', '15188776655', 'mumu@qq.com');
    //     await userService.insert(user).then(res => {
    //         expect(res.email).toEqual('mumu@qq.com');
    //     }).catch(e => {
    //         expect(e instanceof UserNameExistError).toBeTruthy();
    //     });
    // });

    // /** 新增用户,校验电话已存在异常 */
    // it(`insert.throw.PhoneExistError`, async () => {
    //     let user = GetUser('mumu2', '15188776655', 'mumu@qq.com');
    //     await userService.insert(user).then(res => {
    //         expect(res.email).toEqual('mumu@qq.com');
    //     }).catch(e => {
    //         expect(e instanceof Error).toBeTruthy();
    //     });
    // });

    // /** 新增用户,校验邮箱已存在异常 */
    // it(`insert.throw.EmailExistError`, async () => {
    //     let user = GetUser('mumu2', '15088776655', 'mumu@qq.com');
    //     await userService.insert(user).then(res => {
    //         expect(res.email).toEqual('mumu@qq.com');
    //     }).catch(e => {
    //         expect(e instanceof Error).toEqual(true);
    //     });
    // });

    // /** 更新用户 */
    // it(`save.throw.UserIsNullError`, async () => {
    //     let newUser = new UserEntity();
    //     newUser.sex = 1;
    //     await userService.save(newUser, { username: 'test' }).then((res) => {
    //         expect(res.sex).toBe(1);
    //     }).catch(e => {
    //         expect(e instanceof UserIsNullError).toBe(true);
    //     });
    // });

    // /** 更新用户 */
    // it(`save`, async () => {
    //     let newUser = new UserEntity();
    //     newUser.sex = 1;
    //     userService.save(newUser, { username: 'mumu' }).then((res) => {
    //         expect(res.sex).toBe(1);
    //     }).catch(e => { });
    // });


    // /** 删除用户 */
    // it(`delete`, async () => {
    //     let user = await userService.get({ username: 'mack' });
    //     userService.delete(user).then(res => {
    //         expect(res.affected).toEqual(1);
    //     }).catch(e => {

    //     });
    // });

    // /** 删除用户 */
    // it(`delete.Throw.IdIsNullError`, async () => {
    //     let user = GetUser('mack', '16188776655', 'mack@qq.com');
    //     userService.delete(user).then(res => {
    //         expect(res.affected).toEqual(1);
    //     }).catch(e => {
    //         expect(e instanceof IdIsNullError).toBe(true);
    //     })
    // });

    afterAll(async () => {
        await app.close();
    });

});

export function GetUser(username: string, phone: string, email: string): UserEntityCreateInput {
    return {
        username: username,
        password: '123456',
        phone: phone,
        email: email,
        sex: 1,
        salt: 'test_salt',
        unionid: 'union1',
        realname: 'test',
        nickname: 'test',
        openid: 'd34e0c7a-7529-11e9-8f9e-2a85a4185b59',
        avatar: 'avatar',
    }
}


