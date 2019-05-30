import { Entity, Tree, JoinColumn, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToOne, OneToMany } from "typeorm";
import { Article } from './article.entity';
/**
 * 文章评论表
 */
@Entity({
    name: 'article_comment'
})
export class ArticleComment {

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
    @ManyToOne(() => ArticleComment, type => type.children)
    @JoinColumn({
        name: 'parent_id'
    })
    parent: ArticleComment;


    @OneToMany(() => ArticleComment, type => type.parent)
    children: ArticleComment[];

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

    @OneToOne(() => Article, type => type.category)
    @JoinColumn({
        name: 'article_id'
    })
    article: Article;
}