"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const permission_entity_1 = require("./permission.entity");
let Role = class Role {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], Role.prototype, "role_id", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 20,
        comment: '英文代号',
        default: ''
    }),
    tslib_1.__metadata("design:type", String)
], Role.prototype, "name", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 20,
        comment: '中文名称',
        default: ''
    }),
    tslib_1.__metadata("design:type", String)
], Role.prototype, "title", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'text',
        comment: '描述备注',
        default: ''
    }),
    tslib_1.__metadata("design:type", String)
], Role.prototype, "description", void 0);
tslib_1.__decorate([
    typeorm_1.CreateDateColumn({
        type: 'timestamptz',
    }),
    tslib_1.__metadata("design:type", Date)
], Role.prototype, "create_time", void 0);
tslib_1.__decorate([
    typeorm_1.UpdateDateColumn({
        type: 'timestamptz',
    }),
    tslib_1.__metadata("design:type", Date)
], Role.prototype, "update_time", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToMany(() => permission_entity_1.Permission),
    typeorm_1.JoinTable(),
    tslib_1.__metadata("design:type", Array)
], Role.prototype, "permissions", void 0);
Role = tslib_1.__decorate([
    typeorm_1.Entity({
        name: 'role'
    })
], Role);
exports.Role = Role;
//# sourceMappingURL=role.entity.js.map