"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
let Logger = class Logger {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: 'int'
    }),
    tslib_1.__metadata("design:type", Number)
], Logger.prototype, "logger_id", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'text',
        comment: '描述',
        default: ''
    }),
    tslib_1.__metadata("design:type", String)
], Logger.prototype, "description", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 20,
        default: ''
    }),
    tslib_1.__metadata("design:type", String)
], Logger.prototype, "openid", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'timestamp',
        comment: '开始时间'
    }),
    tslib_1.__metadata("design:type", Date)
], Logger.prototype, "start_time", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'timestamp',
        comment: '结束时间'
    }),
    tslib_1.__metadata("design:type", Date)
], Logger.prototype, "end_time", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 20,
        comment: '参数'
    }),
    tslib_1.__metadata("design:type", String)
], Logger.prototype, "params", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 20,
        comment: 'ip地址',
        default: ''
    }),
    tslib_1.__metadata("design:type", String)
], Logger.prototype, "ip", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 50,
        comment: '相应结果',
        default: ''
    }),
    tslib_1.__metadata("design:type", String)
], Logger.prototype, "result", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 20,
        comment: '权限值,一些列权限组合',
        default: ''
    }),
    tslib_1.__metadata("design:type", String)
], Logger.prototype, "permissions", void 0);
Logger = tslib_1.__decorate([
    typeorm_1.Entity({
        name: 'logger'
    })
], Logger);
exports.Logger = Logger;
//# sourceMappingURL=logger.entity.js.map