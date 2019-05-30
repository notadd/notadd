"use strict";
var ArticleCategoryEntity_1;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const article_entity_1 = require("./article.entity");
/**
 * 文章分类表
 */
let ArticleCategoryEntity = ArticleCategoryEntity_1 = class ArticleCategoryEntity {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], ArticleCategoryEntity.prototype, "article_category_id", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 50,
        comment: '标题',
    }),
    tslib_1.__metadata("design:type", String)
], ArticleCategoryEntity.prototype, "title", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 50,
    }),
    tslib_1.__metadata("design:type", String)
], ArticleCategoryEntity.prototype, "name", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 255,
        comment: '图标'
    }),
    tslib_1.__metadata("design:type", String)
], ArticleCategoryEntity.prototype, "icon", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToOne(() => ArticleCategoryEntity_1, type => type.children),
    typeorm_1.JoinColumn({
        name: 'pid'
    }),
    tslib_1.__metadata("design:type", ArticleCategoryEntity)
], ArticleCategoryEntity.prototype, "parent", void 0);
tslib_1.__decorate([
    typeorm_1.OneToMany(() => ArticleCategoryEntity_1, type => type.parent),
    tslib_1.__metadata("design:type", Array)
], ArticleCategoryEntity.prototype, "children", void 0);
tslib_1.__decorate([
    typeorm_1.OneToMany(() => article_entity_1.ArticleEntity, type => type.category),
    tslib_1.__metadata("design:type", Array)
], ArticleCategoryEntity.prototype, "articles", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'text',
        comment: '描述',
    }),
    tslib_1.__metadata("design:type", String)
], ArticleCategoryEntity.prototype, "description", void 0);
tslib_1.__decorate([
    typeorm_1.CreateDateColumn({
        type: 'timestamptz',
    }),
    tslib_1.__metadata("design:type", Date)
], ArticleCategoryEntity.prototype, "create_time", void 0);
tslib_1.__decorate([
    typeorm_1.UpdateDateColumn({
        type: 'timestamptz',
    }),
    tslib_1.__metadata("design:type", Date)
], ArticleCategoryEntity.prototype, "update_time", void 0);
ArticleCategoryEntity = ArticleCategoryEntity_1 = tslib_1.__decorate([
    typeorm_1.Entity({
        name: 'article_category'
    })
], ArticleCategoryEntity);
exports.ArticleCategoryEntity = ArticleCategoryEntity;
//# sourceMappingURL=articleCategory.entity.js.map