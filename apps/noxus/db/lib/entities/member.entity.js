"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
let MemberEntity = class MemberEntity {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], MemberEntity.prototype, "member_id", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 20,
        comment: '昵称'
    }),
    tslib_1.__metadata("design:type", String)
], MemberEntity.prototype, "name", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 20,
        comment: '姓名'
    }),
    tslib_1.__metadata("design:type", String)
], MemberEntity.prototype, "realname", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 20,
        comment: '电话'
    }),
    tslib_1.__metadata("design:type", String)
], MemberEntity.prototype, "phone", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        comment: 'openid',
        default: ''
    }),
    tslib_1.__metadata("design:type", String)
], MemberEntity.prototype, "openid", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 30,
        comment: '邮箱'
    }),
    tslib_1.__metadata("design:type", String)
], MemberEntity.prototype, "email", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 20,
        comment: '用户名'
    }),
    tslib_1.__metadata("design:type", String)
], MemberEntity.prototype, "username", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 20,
        comment: '密码'
    }),
    tslib_1.__metadata("design:type", String)
], MemberEntity.prototype, "password", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 20,
        comment: '加密参数'
    }),
    tslib_1.__metadata("design:type", String)
], MemberEntity.prototype, "salt", void 0);
tslib_1.__decorate([
    typeorm_1.CreateDateColumn({
        type: 'timestamptz',
        comment: '创建时间'
    }),
    tslib_1.__metadata("design:type", Date)
], MemberEntity.prototype, "create_time", void 0);
tslib_1.__decorate([
    typeorm_1.UpdateDateColumn({
        type: 'timestamptz',
        comment: '更新时间'
    }),
    tslib_1.__metadata("design:type", Date)
], MemberEntity.prototype, "update_time", void 0);
MemberEntity = tslib_1.__decorate([
    typeorm_1.Entity({
        name: 'member'
    })
], MemberEntity);
exports.MemberEntity = MemberEntity;
//# sourceMappingURL=member.entity.js.map