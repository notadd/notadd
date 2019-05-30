"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const permission_entity_1 = require("./permission.entity");
let RoleEntity = class RoleEntity {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], RoleEntity.prototype, "role_id", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 20,
        comment: '英文代号',
        default: ''
    }),
    tslib_1.__metadata("design:type", String)
], RoleEntity.prototype, "name", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 20,
        comment: '中文名称',
        default: ''
    }),
    tslib_1.__metadata("design:type", String)
], RoleEntity.prototype, "title", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'text',
        comment: '描述备注',
        default: ''
    }),
    tslib_1.__metadata("design:type", String)
], RoleEntity.prototype, "description", void 0);
tslib_1.__decorate([
    typeorm_1.CreateDateColumn({
        type: 'timestamptz',
    }),
    tslib_1.__metadata("design:type", Date)
], RoleEntity.prototype, "create_time", void 0);
tslib_1.__decorate([
    typeorm_1.UpdateDateColumn({
        type: 'timestamptz',
    }),
    tslib_1.__metadata("design:type", Date)
], RoleEntity.prototype, "update_time", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToMany(() => permission_entity_1.PermissionEntity),
    typeorm_1.JoinTable(),
    tslib_1.__metadata("design:type", Array)
], RoleEntity.prototype, "permissions", void 0);
RoleEntity = tslib_1.__decorate([
    typeorm_1.Entity({
        name: 'role'
    })
], RoleEntity);
exports.RoleEntity = RoleEntity;
//# sourceMappingURL=role.entity.js.map