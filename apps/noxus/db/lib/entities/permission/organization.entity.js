"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
let Organization = class Organization {
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
], Organization.prototype, "organization_id", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 20,
        comment: '英文名称'
    }),
    tslib_1.__metadata("design:type", String)
], Organization.prototype, "name", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 20,
        comment: '中文名称'
    }),
    tslib_1.__metadata("design:type", String)
], Organization.prototype, "title", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'text',
        comment: '描述备注'
    }),
    tslib_1.__metadata("design:type", String)
], Organization.prototype, "description", void 0);
tslib_1.__decorate([
    typeorm_1.CreateDateColumn({
        type: 'timestamp',
        comment: '创建时间'
    }),
    tslib_1.__metadata("design:type", Date)
], Organization.prototype, "create_time", void 0);
tslib_1.__decorate([
    typeorm_1.UpdateDateColumn({
        type: 'timestamp',
        comment: '更新时间'
    }),
    tslib_1.__metadata("design:type", Date)
], Organization.prototype, "update_time", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 11,
        comment: '排序'
    }),
    tslib_1.__metadata("design:type", Number)
], Organization.prototype, "displayorder", void 0);
Organization = tslib_1.__decorate([
    typeorm_1.Entity({
        name: 'organization'
    })
], Organization);
exports.Organization = Organization;
//# sourceMappingURL=organization.entity.js.map