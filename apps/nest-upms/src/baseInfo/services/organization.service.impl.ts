import { OrganizationService } from '../core/organization.service';
import { OrganizationEntity } from '../../typeorm';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { OrganizationNoExistError, DataError } from '../errors/role.error';

export class OrganizationServiceImpl extends OrganizationService {
    constructor(@InjectRepository(OrganizationEntity) private readonly organRepo: Repository<OrganizationEntity>) { super() }

    /**
     * 
     * @param organization 添加组织
     */
    async insert(organization: OrganizationEntity): Promise<void> {
        if (!organization.name || !organization.create_time || !organization.update_time) {
            throw new DataError();
        }
        await this.organRepo.save(this.organRepo.create(organization));
    }
    /**
     * 
     * @param organization 删除组织
     */
    async delete(organization: Partial<OrganizationEntity>): Promise<void> {
        if (!await this.getOrganById(organization.organization_id)) {
            throw new OrganizationNoExistError();
        }
        await this.organRepo.delete({ organization_id: organization.organization_id })
    }
    /**
     * 
     * @param organization_id 根据角色id查询
     */
    async getOrganById(organization_id: number): Promise<OrganizationEntity> {
        if (!organization_id) {
            throw new DataError();
        }
        return await this.organRepo.findOne(organization_id)
    }

    async get(where: Partial<OrganizationEntity>): Promise<OrganizationEntity> {
        if (!where) {
            throw new DataError();
        }
        return await this.organRepo.findOne(where);
    }
    /**
     * 
     * @param organization 更新角色
     * @param where 
     */
    async save(organization: OrganizationEntity, where: Partial<OrganizationEntity>): Promise<void> {
        let exist = await this.getOrganById(where.organization_id);
        if (organization.name) { exist.name = organization.name }
        if (organization.title) { exist.title = organization.title }
        await this.organRepo.save(exist)
    }

    search(where: Partial<OrganizationEntity>): Promise<void> {
        throw new Error("Method not implemented.");
    }
}
