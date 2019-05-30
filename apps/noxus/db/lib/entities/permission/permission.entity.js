"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const addon_entity_1 = require("./addon.entity");
const role_entity_1 = require("./role.entity");
const user_entity_1 = require("./user.entity");
/**
 * 应用权限表
 */
let PermissionEntity = class PermissionEntity {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], PermissionEntity.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], PermissionEntity.prototype, "name", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar'
    }),
    tslib_1.__metadata("design:type", String)
], PermissionEntity.prototype, "father_name", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 255
    }),
    tslib_1.__metadata("design:type", String)
], PermissionEntity.prototype, "title", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 255,
        default: ''
    }),
    tslib_1.__metadata("design:type", String)
], PermissionEntity.prototype, "decription", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 255
    }),
    tslib_1.__metadata("design:type", Array)
], PermissionEntity.prototype, "value", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 255,
        default: ''
    }),
    tslib_1.__metadata("design:type", String)
], PermissionEntity.prototype, "icon", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'smallint',
        default: 0
    }),
    typeorm_1.Index(),
    tslib_1.__metadata("design:type", Number)
], PermissionEntity.prototype, "status", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'int',
        default: 0
    }),
    tslib_1.__metadata("design:type", Number)
], PermissionEntity.prototype, "displayorder", void 0);
tslib_1.__decorate([
    typeorm_1.CreateDateColumn({
        type: 'timestamptz'
    }),
    tslib_1.__metadata("design:type", Date)
], PermissionEntity.prototype, "create_time", void 0);
tslib_1.__decorate([
    typeorm_1.UpdateDateColumn({
        type: 'timestamptz'
    }),
    tslib_1.__metadata("design:type", Date)
], PermissionEntity.prototype, "update_time", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToMany(() => addon_entity_1.AddonEntity),
    tslib_1.__metadata("design:type", Array)
], PermissionEntity.prototype, "addons", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToMany(() => user_entity_1.UserEntity),
    tslib_1.__metadata("design:type", Array)
], PermissionEntity.prototype, "users", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToMany(() => role_entity_1.RoleEntity),
    tslib_1.__metadata("design:type", Array)
], PermissionEntity.prototype, "roles", void 0);
PermissionEntity = tslib_1.__decorate([
    typeorm_1.Entity({
        name: 'permission'
    })
], PermissionEntity);
exports.PermissionEntity = PermissionEntity;
//# sourceMappingURL=permission.entity.js.map