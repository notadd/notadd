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
let Permission = class Permission {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], Permission.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Permission.prototype, "name", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar'
    }),
    tslib_1.__metadata("design:type", String)
], Permission.prototype, "father_name", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 255
    }),
    tslib_1.__metadata("design:type", String)
], Permission.prototype, "title", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 255,
        default: ''
    }),
    tslib_1.__metadata("design:type", String)
], Permission.prototype, "decription", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 255
    }),
    tslib_1.__metadata("design:type", Array)
], Permission.prototype, "value", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 255,
        default: ''
    }),
    tslib_1.__metadata("design:type", String)
], Permission.prototype, "icon", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'smallint',
        default: 0
    }),
    typeorm_1.Index(),
    tslib_1.__metadata("design:type", Number)
], Permission.prototype, "status", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'int',
        default: 0
    }),
    tslib_1.__metadata("design:type", Number)
], Permission.prototype, "displayorder", void 0);
tslib_1.__decorate([
    typeorm_1.CreateDateColumn({
        type: 'timestamptz'
    }),
    tslib_1.__metadata("design:type", Date)
], Permission.prototype, "create_time", void 0);
tslib_1.__decorate([
    typeorm_1.UpdateDateColumn({
        type: 'timestamptz'
    }),
    tslib_1.__metadata("design:type", Date)
], Permission.prototype, "update_time", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToMany(() => addon_entity_1.Addon),
    tslib_1.__metadata("design:type", Array)
], Permission.prototype, "addons", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToMany(() => user_entity_1.User),
    tslib_1.__metadata("design:type", Array)
], Permission.prototype, "users", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToMany(() => role_entity_1.Role),
    tslib_1.__metadata("design:type", Array)
], Permission.prototype, "roles", void 0);
Permission = tslib_1.__decorate([
    typeorm_1.Entity({
        name: 'permission'
    })
], Permission);
exports.Permission = Permission;
//# sourceMappingURL=permission.entity.js.map