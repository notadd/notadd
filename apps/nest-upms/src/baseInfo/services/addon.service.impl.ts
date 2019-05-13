import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddonEntity } from '../../typeorm';
import { AddonService } from '../core/addon.service';
import { AddonIsNullError, DataError, AddonNameError } from '../errors/error';

export class AddonServiceImpl extends AddonService {

    constructor(
        @InjectRepository(AddonEntity) public readonly addonRepo: Repository<AddonEntity>,
    ) { super() }

    addPermission(): Promise<void> {
        throw new Error("Method not implemented.");
    }

    removePermission(): Promise<void> {
        throw new Error("Method not implemented.");
    }

    addPermissions(): Promise<void> {
        throw new Error("Method not implemented.");
    }

    removePermissions(): Promise<void> {
        throw new Error("Method not implemented.");
    }


    async get(where: Partial<AddonEntity>): Promise<AddonEntity> {
        if (!where) {
            throw new DataError();
        }
        return await this.addonRepo.findOne(where);

    }

    /**
     * 更新应用
     * @param addon 更新应用的信息
     * @param where 更新应用的条件 
     */
    async save(addon: AddonEntity, where: Partial<AddonEntity>): Promise<void> {
        let exist = await this.getAddonById(where.appid);
        if (addon.name) { exist.name = addon.name }
        if (addon.title) { exist.title = addon.title }
        if (addon.icon) { exist.icon = addon.icon }
        /**
         * TODO description没有转码
         */
        if (addon.description) { exist.description = addon.description }
        if (addon.appsecret) { exist.appsecret = addon.appsecret }
        if (addon.status >= -1 && addon.status <= 1) { exist.status = addon.status }
        await this.addonRepo.save(exist)
    }

    /**
     * 删除应用
     * @param data 删除应用的信息
     */
    async delete(addon: Partial<AddonEntity>): Promise<void> {
        if (!await this.getAddonById(addon.appid)) {
            throw new AddonIsNullError();
        }
        await this.addonRepo.delete({ appid: addon.appid })
    }

    /**
     * 添加应用
     * @param addon 添加应用的信息
     */
    async insert(addon: AddonEntity): Promise<void> {
        if (!(addon.name || addon.title || addon.appsecret)) {
            throw new DataError();
        }
        if (await this.get({ name: addon.name })) {
            throw new AddonNameError();
        }
        if (addon.status >= -1 && addon.status <= 1) {
            throw new DataError();
        }
        await this.addonRepo.save(this.addonRepo.create(addon));
    }

    /**
     * 根据id获取应用
     * @param appid id
     */
    async getAddonById(appid: number): Promise<AddonEntity> {
        if (!appid) {
            throw new DataError();
        }
        return await this.addonRepo.findOne(appid)
    }

    search(where: Partial<AddonEntity>): Promise<void> {
        throw new Error("Method not implemented.");
    }




}