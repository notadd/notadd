"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
let OrganizationEntity = class OrganizationEntity {
    constructor() {
        this.create_time = new Date();
        this.update_time = new Date();
    }
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: 'int'
    }),
    tslib_1.__metadata("design:type", Number)
], OrganizationEntity.prototype, "organization_id", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 20,
        comment: '英文名称'
    }),
    tslib_1.__metadata("design:type", String)
], OrganizationEntity.prototype, "name", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 20,
        comment: '中文名称'
    }),
    tslib_1.__metadata("design:type", String)
], OrganizationEntity.prototype, "title", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'text',
        comment: '描述备注'
    }),
    tslib_1.__metadata("design:type", String)
], OrganizationEntity.prototype, "description", void 0);
tslib_1.__decorate([
    typeorm_1.CreateDateColumn({
        type: 'timestamp',
        comment: '创建时间'
    }),
    tslib_1.__metadata("design:type", Date)
], OrganizationEntity.prototype, "create_time", void 0);
tslib_1.__decorate([
    typeorm_1.UpdateDateColumn({
        type: 'timestamp',
        comment: '更新时间'
    }),
    tslib_1.__metadata("design:type", Date)
], OrganizationEntity.prototype, "update_time", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 11,
        comment: '排序'
    }),
    tslib_1.__metadata("design:type", Number)
], OrganizationEntity.prototype, "displayorder", void 0);
OrganizationEntity = tslib_1.__decorate([
    typeorm_1.Entity({
        name: 'organization'
    })
], OrganizationEntity);
exports.OrganizationEntity = OrganizationEntity;
//# sourceMappingURL=organization.entity.js.map