import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({
    name: 'article',
})
export class ArticleEntity {

    @PrimaryGeneratedColumn()
    article_id: number;

    @Column({
        type: 'varchar',
        length: 80,
        comment: '标题',
    })
    title: string;

    @Column({
        type: 'text',
        comment: '描述',
    })
    description: string;

    @Column({
        type: 'text',
        comment: '图片集',
    })
    thumbs: string;

    @Column({
        type: 'varchar',
        length: 255,
        comment: '图标/缩略图',
    })
    icon: string;

    @Column({
        type: 'int',
        comment: '文章类型'
    })
    article_category_id	: number;

    @Column({
        type: 'int',
        comment: '文章评论',
    })
    article_comment_id	: number[];

    @CreateDateColumn({
        type: 'timestamptz'
    })
    create_time: Date;

    @UpdateDateColumn({
        type: 'timestamptz'
    })
    update_time: Date;

}