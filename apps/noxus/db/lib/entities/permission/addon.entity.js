"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const permission_entity_1 = require("./permission.entity");
let AddonEntity = class AddonEntity {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], AddonEntity.prototype, "appid", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'int',
        comment: '上级',
        default: 0
    }),
    tslib_1.__metadata("design:type", Number)
], AddonEntity.prototype, "pid", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 20
    }),
    tslib_1.__metadata("design:type", String)
], AddonEntity.prototype, "appsecret", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 255,
        default: ''
    }),
    tslib_1.__metadata("design:type", String)
], AddonEntity.prototype, "icon", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 20
    }),
    tslib_1.__metadata("design:type", String)
], AddonEntity.prototype, "name", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 20
    }),
    tslib_1.__metadata("design:type", String)
], AddonEntity.prototype, "title", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'text',
        default: ''
    }),
    tslib_1.__metadata("design:type", String)
], AddonEntity.prototype, "description", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'smallint',
        default: 1
    }),
    tslib_1.__metadata("design:type", Number)
], AddonEntity.prototype, "status", void 0);
tslib_1.__decorate([
    typeorm_1.CreateDateColumn({
        type: 'timestamptz'
    }),
    tslib_1.__metadata("design:type", Date)
], AddonEntity.prototype, "create_time", void 0);
tslib_1.__decorate([
    typeorm_1.UpdateDateColumn({
        type: 'timestamptz'
    }),
    tslib_1.__metadata("design:type", Date)
], AddonEntity.prototype, "update_time", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToMany(() => permission_entity_1.PermissionEntity),
    typeorm_1.JoinTable(),
    tslib_1.__metadata("design:type", Array)
], AddonEntity.prototype, "permissions", void 0);
AddonEntity = tslib_1.__decorate([
    typeorm_1.Entity({
        name: 'addon'
    })
], AddonEntity);
exports.AddonEntity = AddonEntity;
//# sourceMappingURL=addon.entity.js.map