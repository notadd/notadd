"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const organization_entity_1 = require("./organization.entity");
const permission_entity_1 = require("./permission.entity");
let UserEntity = class UserEntity {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], UserEntity.prototype, "user_id", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'uuid',
    }),
    tslib_1.__metadata("design:type", String)
], UserEntity.prototype, "openid", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 20,
        comment: '联盟id'
    }),
    tslib_1.__metadata("design:type", String)
], UserEntity.prototype, "unionid", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 50
    }),
    tslib_1.__metadata("design:type", String)
], UserEntity.prototype, "username", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 20
    }),
    tslib_1.__metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 20,
        comment: '盐'
    }),
    tslib_1.__metadata("design:type", String)
], UserEntity.prototype, "salt", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 20,
        comment: '真实姓名'
    }),
    tslib_1.__metadata("design:type", String)
], UserEntity.prototype, "realname", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 50,
        comment: '昵称'
    }),
    tslib_1.__metadata("design:type", String)
], UserEntity.prototype, "nickname", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 50
    }),
    tslib_1.__metadata("design:type", String)
], UserEntity.prototype, "avatar", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 20
    }),
    tslib_1.__metadata("design:type", String)
], UserEntity.prototype, "phone", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 30
    }),
    tslib_1.__metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'smallint',
        default: 0
    }),
    tslib_1.__metadata("design:type", Number)
], UserEntity.prototype, "sex", void 0);
tslib_1.__decorate([
    typeorm_1.CreateDateColumn({
        type: 'timestamptz'
    }),
    tslib_1.__metadata("design:type", Date)
], UserEntity.prototype, "create_time", void 0);
tslib_1.__decorate([
    typeorm_1.UpdateDateColumn({
        type: 'timestamptz'
    }),
    tslib_1.__metadata("design:type", Date)
], UserEntity.prototype, "update_time", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToMany(() => permission_entity_1.PermissionEntity),
    typeorm_1.JoinTable(),
    tslib_1.__metadata("design:type", Array)
], UserEntity.prototype, "permissions", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToMany(() => organization_entity_1.OrganizationEntity),
    typeorm_1.JoinTable(),
    tslib_1.__metadata("design:type", Array)
], UserEntity.prototype, "roles", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToMany(() => organization_entity_1.OrganizationEntity),
    typeorm_1.JoinTable(),
    tslib_1.__metadata("design:type", Array)
], UserEntity.prototype, "organizations", void 0);
UserEntity = tslib_1.__decorate([
    typeorm_1.Entity({
        name: 'user'
    })
], UserEntity);
exports.UserEntity = UserEntity;
//# sourceMappingURL=user.entity.js.map