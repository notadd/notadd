import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity({
    name: 'article_comment'
})
export class CommentEntity {

    @PrimaryGeneratedColumn()
    article_comment_id: number;

    @Column({
        type: 'varchar',
        length: 255,
        comment: '评论内容',
    })
    content: string;

    @Column({
        type: 'int',
        comment: '上级',
    })
    pid: number;

    @Column({
        type: 'int',
        comment: '文章id'
    })
    article_id: number;

    @Column({
        type: 'uuid',
        comment: '评论者'
    })
    from_user_id: string;

    @CreateDateColumn({
        type: 'timestamptz',
    })
    create_time: Date;

    @UpdateDateColumn({
        type: 'timestamptz',
    })
    update_time: Date;


}