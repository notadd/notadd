"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const accessToken_entity_1 = require("./accessToken.entity");
let RefreshToken = class RefreshToken {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: 'int'
    }),
    tslib_1.__metadata("design:type", Number)
], RefreshToken.prototype, "refresh_token_id", void 0);
tslib_1.__decorate([
    typeorm_1.OneToOne(() => accessToken_entity_1.AccessToken, type => type.refreshToken),
    typeorm_1.JoinColumn({
        name: 'token_id'
    }),
    tslib_1.__metadata("design:type", accessToken_entity_1.AccessToken)
], RefreshToken.prototype, "token", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 50,
        comment: '刷新凭证'
    }),
    tslib_1.__metadata("design:type", String)
], RefreshToken.prototype, "refresh_token", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'timestamptz',
        comment: '过期时间'
    }),
    tslib_1.__metadata("design:type", Date)
], RefreshToken.prototype, "expires_in", void 0);
tslib_1.__decorate([
    typeorm_1.CreateDateColumn({
        type: 'timestamptz',
        comment: '创建时间'
    }),
    tslib_1.__metadata("design:type", Date)
], RefreshToken.prototype, "create_time", void 0);
tslib_1.__decorate([
    typeorm_1.UpdateDateColumn({
        type: 'timestamptz',
        comment: '更新时间'
    }),
    tslib_1.__metadata("design:type", Date)
], RefreshToken.prototype, "update_time", void 0);
RefreshToken = tslib_1.__decorate([
    typeorm_1.Entity({
        name: 'refreshToken'
    })
], RefreshToken);
exports.RefreshToken = RefreshToken;
//# sourceMappingURL=refreshToken.entity.js.map