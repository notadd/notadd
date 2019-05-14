import { RoleService } from '../../../../src/baseInfo/core';
import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { ApplicationModule, RoleEntity } from '../../../../src';
import { ServerError, DataError } from '../../../../src/baseInfo/errors/role.error';

describe('RoleServiceImpl', () => {
    let app: INestApplication;
    let roleService: RoleService;
    beforeAll(async () => {
        const module = await Test.createTestingModule({
            imports: [ApplicationModule]
        }).compile();
        app = module.createNestApplication();
        roleService = app.get(RoleService);
        await app.init();
    })

    it(`insert`, async () => {
        const role = new RoleEntity();
        role.name = 'role1';
        role.title = 'iphone';
        role.description = 'ddd';
        role.create_time = new Date();
        role.update_time = new Date();
        roleService.insert(role).then((result) => {
            expect(result.name).toEqual('role1');
        }).catch(e => {
            expect(e instanceof DataError).toEqual(true);
        });
    });

    it(`delete`, async () => {
        roleService.delete({ title: 'iphone' }).then(res => {
            expect(res.affected).toEqual(1)
        }).catch(e => {
            expect(e instanceof ServerError).toEqual(true);
        });
    });

    it(`save`, async () => {
        /** 修改角色 */
        /** 创建更新的一个应用 */
        let role: RoleEntity = new RoleEntity();
        role.name = 'wzry';
        role.title = 'hpjy';
        role.description = 'dddd';
        role.create_time = new Date();
        role.update_time = new Date();
        //从数据库获取一个应用
        roleService.save(role, { title: 'boss' }).then(res => {
            expect(res.title).toBe('hpjy');
        }).catch(e => {
            console.log(e)
            expect(e instanceof ServerError).toEqual(true)
        });
    });

    it(`get`, async () => {
        roleService.get({ name: 'role1' }).then(res => {
            expect(res.name).toEqual(`role1`);
        }).catch(e => { 
            expect(e instanceof ServerError).toEqual(true)
        });
    });

    afterAll(async () => {
        await app.close();
    });
});
