"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
let Message = class Message {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], Message.prototype, "msg_id", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'text',
        comment: '消息'
    }),
    tslib_1.__metadata("design:type", String)
], Message.prototype, "content", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'smallint',
        comment: '消息类型: 1:text,2:video,3:voide,4:shortvideo,5:location,6:link'
    }),
    tslib_1.__metadata("design:type", Number)
], Message.prototype, "msg_type", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 255,
        nullable: true,
    }),
    tslib_1.__metadata("design:type", String)
], Message.prototype, "pic_url", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'int',
        comment: '媒体id'
    }),
    tslib_1.__metadata("design:type", Number)
], Message.prototype, "media_id", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'int',
        comment: '视频消息媒体id'
    }),
    tslib_1.__metadata("design:type", Number)
], Message.prototype, "thumb_media_id", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 20,
        comment: '地理位置维度'
    }),
    tslib_1.__metadata("design:type", String)
], Message.prototype, "location_x", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 20,
        comment: '地理位置经度'
    }),
    tslib_1.__metadata("design:type", String)
], Message.prototype, "location_y", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
    }),
    typeorm_1.Column({
        type: 'varchar',
        length: 50,
        comment: '地理位置信息',
    }),
    tslib_1.__metadata("design:type", String)
], Message.prototype, "label", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 100,
        comment: '标题',
    }),
    tslib_1.__metadata("design:type", String)
], Message.prototype, "title", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 100,
        comment: '链接',
    }),
    tslib_1.__metadata("design:type", String)
], Message.prototype, "url", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'text',
        comment: '描述',
    }),
    tslib_1.__metadata("design:type", String)
], Message.prototype, "description", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'uuid',
        comment: '发送者openid'
    }),
    tslib_1.__metadata("design:type", String)
], Message.prototype, "from_user", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'uuid',
        comment: '接受者openid'
    }),
    tslib_1.__metadata("design:type", String)
], Message.prototype, "to_user", void 0);
tslib_1.__decorate([
    typeorm_1.CreateDateColumn({
        type: 'timestamptz',
    }),
    tslib_1.__metadata("design:type", Date)
], Message.prototype, "create_time", void 0);
tslib_1.__decorate([
    typeorm_1.UpdateDateColumn({
        type: 'timestamptz',
    }),
    tslib_1.__metadata("design:type", Date)
], Message.prototype, "update_time", void 0);
Message = tslib_1.__decorate([
    typeorm_1.Entity({
        name: 'message'
    })
], Message);
exports.Message = Message;
//# sourceMappingURL=message.entity.js.map