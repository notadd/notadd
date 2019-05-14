import { OrganizationService } from '../core/organization.service';
import { OrganizationEntity } from '../../typeorm';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { OrganizationNoExistError, DataError,  } from '../errors/role.error';

export class OrganizationServiceImpl extends OrganizationService {
    constructor(@InjectRepository(OrganizationEntity) private readonly organRepo: Repository<OrganizationEntity>) { super() }

    /**
     * 
     * @param organization 添加组织
     */
    async insert(organization: OrganizationEntity) {
        if (!organization.name || !organization.title || !organization.description) {
            throw new DataError();
        }
        return await this.organRepo.save(this.organRepo.create(organization));
    }
    /**
     * 
     * @param organization 删除组织
     */
    async delete(organization: Partial<OrganizationEntity>) {
        if (!await this.getOrganById(organization.organization_id)) {
            throw new OrganizationNoExistError();
        }
        return await this.organRepo.delete({ organization_id: organization.organization_id })
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
    /**
     * 
     * @param where 查询单个组织
     */
    async get(where: Partial<OrganizationEntity>): Promise<OrganizationEntity> {
        return await this.organRepo.findOne(where);
    }
    /**
     * 
     * @param organization 更新角色
     * @param where 
     */
    async save(organization: OrganizationEntity, where: Partial<OrganizationEntity>) {
        let exist = await this.get(where);
        if (!exist) {
            throw new OrganizationNoExistError();
        }
        if (organization.name) { exist.name = organization.name }
        if (organization.title) { exist.title = organization.title }
        if(organization.description){exist.description=organization.description}
        if(organization.displayorder){exist.displayorder=organization.displayorder}
        return await this.organRepo.save(exist)
    }

    search(where: Partial<OrganizationEntity>): Promise<void> {
        throw new Error("Method not implemented.");
    }
}
