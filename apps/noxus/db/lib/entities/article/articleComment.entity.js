"use strict";
var ArticleComment_1;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const article_entity_1 = require("./article.entity");
/**
 * 文章评论表
 */
let ArticleComment = ArticleComment_1 = class ArticleComment {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], ArticleComment.prototype, "article_comment_id", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 255,
        comment: '评论内容',
    }),
    tslib_1.__metadata("design:type", String)
], ArticleComment.prototype, "content", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToOne(() => ArticleComment_1, type => type.children),
    typeorm_1.JoinColumn({
        name: 'parent_id'
    }),
    tslib_1.__metadata("design:type", ArticleComment)
], ArticleComment.prototype, "parent", void 0);
tslib_1.__decorate([
    typeorm_1.OneToMany(() => ArticleComment_1, type => type.parent),
    tslib_1.__metadata("design:type", Array)
], ArticleComment.prototype, "children", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'uuid',
        comment: '评论者'
    }),
    tslib_1.__metadata("design:type", String)
], ArticleComment.prototype, "from_user_id", void 0);
tslib_1.__decorate([
    typeorm_1.CreateDateColumn({
        type: 'timestamptz',
    }),
    tslib_1.__metadata("design:type", Date)
], ArticleComment.prototype, "create_time", void 0);
tslib_1.__decorate([
    typeorm_1.UpdateDateColumn({
        type: 'timestamptz',
    }),
    tslib_1.__metadata("design:type", Date)
], ArticleComment.prototype, "update_time", void 0);
tslib_1.__decorate([
    typeorm_1.OneToOne(() => article_entity_1.Article, type => type.category),
    typeorm_1.JoinColumn({
        name: 'article_id'
    }),
    tslib_1.__metadata("design:type", article_entity_1.Article)
], ArticleComment.prototype, "article", void 0);
ArticleComment = ArticleComment_1 = tslib_1.__decorate([
    typeorm_1.Entity({
        name: 'article_comment'
    })
], ArticleComment);
exports.ArticleComment = ArticleComment;
//# sourceMappingURL=articleComment.entity.js.map