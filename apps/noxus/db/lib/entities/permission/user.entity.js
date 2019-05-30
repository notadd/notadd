"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const organization_entity_1 = require("./organization.entity");
const permission_entity_1 = require("./permission.entity");
let User = class User {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "user_id", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'uuid',
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "openid", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 20,
        comment: '联盟id'
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "unionid", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 50
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "username", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 20
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "password", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 20,
        comment: '盐'
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "salt", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 20,
        comment: '真实姓名'
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "realname", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 50,
        comment: '昵称'
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "nickname", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 50
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "avatar", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 20
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "phone", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 30
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "email", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'smallint',
        default: 0
    }),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "sex", void 0);
tslib_1.__decorate([
    typeorm_1.CreateDateColumn({
        type: 'timestamptz'
    }),
    tslib_1.__metadata("design:type", Date)
], User.prototype, "create_time", void 0);
tslib_1.__decorate([
    typeorm_1.UpdateDateColumn({
        type: 'timestamptz'
    }),
    tslib_1.__metadata("design:type", Date)
], User.prototype, "update_time", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToMany(() => permission_entity_1.Permission),
    typeorm_1.JoinTable(),
    tslib_1.__metadata("design:type", Array)
], User.prototype, "permissions", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToMany(() => organization_entity_1.Organization),
    typeorm_1.JoinTable(),
    tslib_1.__metadata("design:type", Array)
], User.prototype, "roles", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToMany(() => organization_entity_1.Organization),
    typeorm_1.JoinTable(),
    tslib_1.__metadata("design:type", Array)
], User.prototype, "organizations", void 0);
User = tslib_1.__decorate([
    typeorm_1.Entity({
        name: 'user'
    })
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map