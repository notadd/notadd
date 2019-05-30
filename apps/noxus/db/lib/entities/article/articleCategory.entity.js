"use strict";
var ArticleCategory_1;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const article_entity_1 = require("./article.entity");
/**
 * 文章分类表
 */
let ArticleCategory = ArticleCategory_1 = class ArticleCategory {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], ArticleCategory.prototype, "article_category_id", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 50,
        comment: '标题',
    }),
    tslib_1.__metadata("design:type", String)
], ArticleCategory.prototype, "title", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 50,
    }),
    tslib_1.__metadata("design:type", String)
], ArticleCategory.prototype, "name", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 255,
        comment: '图标'
    }),
    tslib_1.__metadata("design:type", String)
], ArticleCategory.prototype, "icon", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToOne(() => ArticleCategory_1, type => type.children),
    typeorm_1.JoinColumn({
        name: 'pid',
    }),
    tslib_1.__metadata("design:type", ArticleCategory)
], ArticleCategory.prototype, "parent", void 0);
tslib_1.__decorate([
    typeorm_1.OneToMany(() => ArticleCategory_1, type => type.parent),
    tslib_1.__metadata("design:type", Array)
], ArticleCategory.prototype, "children", void 0);
tslib_1.__decorate([
    typeorm_1.OneToMany(() => article_entity_1.Article, type => type.category),
    tslib_1.__metadata("design:type", Array)
], ArticleCategory.prototype, "articles", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'text',
        comment: '描述',
    }),
    tslib_1.__metadata("design:type", String)
], ArticleCategory.prototype, "description", void 0);
tslib_1.__decorate([
    typeorm_1.CreateDateColumn({
        type: 'timestamptz',
    }),
    tslib_1.__metadata("design:type", Date)
], ArticleCategory.prototype, "create_time", void 0);
tslib_1.__decorate([
    typeorm_1.UpdateDateColumn({
        type: 'timestamptz',
    }),
    tslib_1.__metadata("design:type", Date)
], ArticleCategory.prototype, "update_time", void 0);
ArticleCategory = ArticleCategory_1 = tslib_1.__decorate([
    typeorm_1.Entity({
        name: 'article_category'
    })
], ArticleCategory);
exports.ArticleCategory = ArticleCategory;
//# sourceMappingURL=articleCategory.entity.js.map