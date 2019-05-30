"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const permission_entity_1 = require("./permission.entity");
let Addon = class Addon {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], Addon.prototype, "appid", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'int',
        comment: '上级',
        default: 0
    }),
    tslib_1.__metadata("design:type", Number)
], Addon.prototype, "pid", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 20
    }),
    tslib_1.__metadata("design:type", String)
], Addon.prototype, "appsecret", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 255,
        default: ''
    }),
    tslib_1.__metadata("design:type", String)
], Addon.prototype, "icon", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 20
    }),
    tslib_1.__metadata("design:type", String)
], Addon.prototype, "name", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 20
    }),
    tslib_1.__metadata("design:type", String)
], Addon.prototype, "title", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'text',
        default: ''
    }),
    tslib_1.__metadata("design:type", String)
], Addon.prototype, "description", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'smallint',
        default: 1
    }),
    tslib_1.__metadata("design:type", Number)
], Addon.prototype, "status", void 0);
tslib_1.__decorate([
    typeorm_1.CreateDateColumn({
        type: 'timestamptz'
    }),
    tslib_1.__metadata("design:type", Date)
], Addon.prototype, "create_time", void 0);
tslib_1.__decorate([
    typeorm_1.UpdateDateColumn({
        type: 'timestamptz'
    }),
    tslib_1.__metadata("design:type", Date)
], Addon.prototype, "update_time", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToMany(() => permission_entity_1.Permission),
    typeorm_1.JoinTable(),
    tslib_1.__metadata("design:type", Array)
], Addon.prototype, "permissions", void 0);
Addon = tslib_1.__decorate([
    typeorm_1.Entity({
        name: 'addon'
    })
], Addon);
exports.Addon = Addon;
//# sourceMappingURL=addon.entity.js.map