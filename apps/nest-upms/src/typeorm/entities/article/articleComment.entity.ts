import { Entity, JoinColumn, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { ArticleEntity } from './article.entity';
/**
 * 文章评论表
 */
@Entity({
    name: 'article_comment'
})
export class ArticleCommentEntity {

    @PrimaryGeneratedColumn()
    article_comment_id: number;

    @Column({
        type: 'varchar',
        length: 255,
        comment: '评论内容',
    })
    content: string;
    /**
     * 回复
     */
    @Column({
        type: 'int',
        comment: '上级',
    })
    pid: number;


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

    @ManyToOne(() => ArticleEntity, type => type.category)
    @JoinColumn({
        name: 'article_id'
    })
    article: ArticleEntity;
}