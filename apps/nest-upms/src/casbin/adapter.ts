import { Model } from 'casbin';
import { Repository } from 'typeorm';
import { CasbinAdapter } from './core/adapter';
import { RoleEntity, AddonEntity, PermissionEntity, OrganizationEntity } from '../typeorm';
import { InjectRepository } from '@nestjs/typeorm';
export class NgerCasbinAdapter extends CasbinAdapter {
    constructor(
        @InjectRepository(RoleEntity) public role: Repository<RoleEntity>,
        @InjectRepository(OrganizationEntity) public orgainzation: Repository<OrganizationEntity>,
        @InjectRepository(PermissionEntity) public permission: Repository<PermissionEntity>,
        @InjectRepository(AddonEntity) public addon: Repository<AddonEntity>
    ) {
        super();
    }
    /**
     * 加载Policy
     * @param model 
     */
    async loadPolicy(model: Model): Promise<void> {
        const permission = this.permission.createQueryBuilder()
    }
    async savePolicy(model: Model): Promise<boolean> {
        return true;
    }
    async addPolicy(sec: string, ptype: string, rule: string[]): Promise<void> { }
    async removePolicy(sec: string, ptype: string, rule: string[]): Promise<void> { }
    async removeFilteredPolicy(sec: string, ptype: string, fieldIndex: number, ...fieldValues: string[]): Promise<void> { }
}
