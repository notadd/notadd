"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const refreshToken_entity_1 = require("./refreshToken.entity");
exports.EXPRES_TIME = 60 * 60 * 24;
let AccessToken = class AccessToken {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: 'bigint'
    }),
    tslib_1.__metadata("design:type", Number)
], AccessToken.prototype, "access_token_id", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 50,
        comment: '授权凭证'
    }),
    tslib_1.__metadata("design:type", String)
], AccessToken.prototype, "access_token", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 20,
        comment: '用户openid'
    }),
    tslib_1.__metadata("design:type", String)
], AccessToken.prototype, "openid", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 50,
        comment: '应用id'
    }),
    tslib_1.__metadata("design:type", String)
], AccessToken.prototype, "appid", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 50,
        comment: 'ip地址'
    }),
    tslib_1.__metadata("design:type", String)
], AccessToken.prototype, "ip", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 50,
        comment: '平台'
    }),
    tslib_1.__metadata("design:type", String)
], AccessToken.prototype, "platform", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'smallint',
        comment: '授权类型'
    }),
    tslib_1.__metadata("design:type", Number)
], AccessToken.prototype, "grant_type", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 50,
        comment: '授权范围'
    }),
    tslib_1.__metadata("design:type", String)
], AccessToken.prototype, "scope", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'timestamptz',
        comment: '过期时间'
    }),
    tslib_1.__metadata("design:type", Date)
], AccessToken.prototype, "expires_in", void 0);
tslib_1.__decorate([
    typeorm_1.CreateDateColumn({
        type: 'timestamptz',
        comment: '创建时间'
    }),
    tslib_1.__metadata("design:type", Date)
], AccessToken.prototype, "create_time", void 0);
tslib_1.__decorate([
    typeorm_1.UpdateDateColumn({
        type: 'timestamptz',
        comment: '更新时间'
    }),
    tslib_1.__metadata("design:type", Date)
], AccessToken.prototype, "update_time", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'smallint',
        comment: '1正常,-1过期/失效'
    }),
    tslib_1.__metadata("design:type", Number)
], AccessToken.prototype, "status", void 0);
tslib_1.__decorate([
    typeorm_1.OneToOne(() => refreshToken_entity_1.RefreshToken, type => type.token),
    tslib_1.__metadata("design:type", refreshToken_entity_1.RefreshToken)
], AccessToken.prototype, "refreshToken", void 0);
AccessToken = tslib_1.__decorate([
    typeorm_1.Entity({
        name: 'accessToken'
    })
], AccessToken);
exports.AccessToken = AccessToken;
//# sourceMappingURL=accessToken.entity.js.map