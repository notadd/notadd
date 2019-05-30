"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
let Post = class Post {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], Post.prototype, "post_id", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 20,
        comment: '业务标题'
    }),
    tslib_1.__metadata("design:type", String)
], Post.prototype, "title", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 20,
        comment: '业务详情'
    }),
    tslib_1.__metadata("design:type", String)
], Post.prototype, "content", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'smallint',
        comment: '业务状态(0待处理，1处理中，2已处理，3无法处理)'
    }),
    tslib_1.__metadata("design:type", Number)
], Post.prototype, "status", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 20,
        comment: '处理人'
    }),
    tslib_1.__metadata("design:type", String)
], Post.prototype, "handler_user", void 0);
tslib_1.__decorate([
    typeorm_1.CreateDateColumn({
        type: 'timestamptz',
        comment: '创建时间'
    }),
    tslib_1.__metadata("design:type", Date)
], Post.prototype, "create_time", void 0);
tslib_1.__decorate([
    typeorm_1.UpdateDateColumn({
        type: 'timestamptz',
        comment: '更新时间'
    }),
    tslib_1.__metadata("design:type", Date)
], Post.prototype, "update_time", void 0);
Post = tslib_1.__decorate([
    typeorm_1.Entity({
        name: 'tasks'
    })
], Post);
exports.Post = Post;
//# sourceMappingURL=post.entity.js.map