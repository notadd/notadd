"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
let PostCategory = class PostCategory {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], PostCategory.prototype, "post_post_category_idid", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 20,
        comment: '分类名'
    }),
    tslib_1.__metadata("design:type", String)
], PostCategory.prototype, "title", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 255,
        comment: '分类图标'
    }),
    tslib_1.__metadata("design:type", String)
], PostCategory.prototype, "icon", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'text',
        comment: '分类描述'
    }),
    tslib_1.__metadata("design:type", String)
], PostCategory.prototype, "description", void 0);
tslib_1.__decorate([
    typeorm_1.CreateDateColumn({
        type: 'timestamptz',
        comment: '创建时间'
    }),
    tslib_1.__metadata("design:type", Date)
], PostCategory.prototype, "create_time", void 0);
tslib_1.__decorate([
    typeorm_1.UpdateDateColumn({
        type: 'timestamptz',
        comment: '更新时间'
    }),
    tslib_1.__metadata("design:type", Date)
], PostCategory.prototype, "update_time", void 0);
PostCategory = tslib_1.__decorate([
    typeorm_1.Entity({
        name: 'post_category'
    })
], PostCategory);
exports.PostCategory = PostCategory;
//# sourceMappingURL=postCategory.entity.js.map