"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const articleCategory_entity_1 = require("./articleCategory.entity");
const articleComment_entity_1 = require("./articleComment.entity");
/**
 * 文章表
 */
let Article = class Article {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], Article.prototype, "article_id", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 80,
        comment: '标题',
    }),
    tslib_1.__metadata("design:type", String)
], Article.prototype, "title", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'text',
        comment: '描述',
    }),
    tslib_1.__metadata("design:type", String)
], Article.prototype, "description", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'text',
        comment: '图片集',
    }),
    tslib_1.__metadata("design:type", String)
], Article.prototype, "thumbs", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 255,
        comment: '图标/缩略图',
    }),
    tslib_1.__metadata("design:type", String)
], Article.prototype, "icon", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToOne(() => articleCategory_entity_1.ArticleCategory, type => type.article_category_id),
    typeorm_1.JoinColumn({
        name: 'article_cateogry_id'
    }),
    tslib_1.__metadata("design:type", articleCategory_entity_1.ArticleCategory)
], Article.prototype, "category", void 0);
tslib_1.__decorate([
    typeorm_1.OneToMany(() => articleComment_entity_1.ArticleComment, type => type.article),
    tslib_1.__metadata("design:type", Array)
], Article.prototype, "comments", void 0);
tslib_1.__decorate([
    typeorm_1.CreateDateColumn({
        type: 'timestamptz'
    }),
    tslib_1.__metadata("design:type", Date)
], Article.prototype, "create_time", void 0);
tslib_1.__decorate([
    typeorm_1.UpdateDateColumn({
        type: 'timestamptz'
    }),
    tslib_1.__metadata("design:type", Date)
], Article.prototype, "update_time", void 0);
Article = tslib_1.__decorate([
    typeorm_1.Entity({
        name: 'article',
    })
], Article);
exports.Article = Article;
//# sourceMappingURL=article.entity.js.map