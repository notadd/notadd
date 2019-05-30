import { Entity, Tree, JoinColumn, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToOne, OneToMany } from "typeorm";
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
    @ManyToOne(() => ArticleCommentEntity, type => type.children)
    @JoinColumn({
        name: 'parent_id'
    })
    parent: ArticleCommentEntity;


    @OneToMany(() => ArticleCommentEntity, type => type.parent)
    children: ArticleCommentEntity[];


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

    @OneToOne(() => ArticleEntity, type => type.category)
    @JoinColumn({
        name: 'article_id'
    })
    article: ArticleEntity;
}