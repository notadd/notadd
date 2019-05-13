import ts from 'typescript'
import { RoleService } from '../../../../src/baseInfo/core';
import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { ApplicationModule, RoleEntity } from '../../../../src';
import { DataError } from '../../../../src/baseInfo/errors/role.error';
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
            expect(result).toBe(void 0);
        }).catch(e => {
            expect(e instanceof DataError).toBe(true);
        });
    });

    it(`delete`, async () => {
        const role = await roleService.get({ title: '苹果' });
        const res = await roleService.delete(role);
    });

    it(`save`, async () => {
        /** 修改角色 */

        /** 创建更新的一个应用 */
        let role: RoleEntity = new RoleEntity();
        role.name = 'wzry';
        role.title = 'hpjy';
        role.description = '你的酒馆对我打了烊,子弹在我心头上了膛';
        role.create_time = new Date();
        role.update_time = new Date();
        //从数据库获取一个应用
        const where = await roleService.get({ title: 'boss' });
        expect(!!where).toBe(true)
        // 执行更新
        const res = await roleService.save(role, where);
        expect(res).toBe(void 0);
    });

    it(`get`, async () => {
        const add = await roleService.get({ name: 'role1' });
        expect(add).toBe(void 0);
    });

    afterAll(async () => {
        await app.close();
    });
});
