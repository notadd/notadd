import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, OneToOne, JoinColumn } from 'typeorm';
/**
 * 文章分类表
 */
@Entity({
    name: 'article_category'
})
export class ArticleCategory {

    @PrimaryGeneratedColumn()
    article_category_id: number;

    @Column({
        type: 'varchar',
        length: 50,
        comment: '标题',
    })
    title: string;

    @Column({
        type: 'varchar',
        length: 50,
    })
    name: string;

    @Column({
        type: 'varchar',
        length: 255,
        comment: '图标'
    })
    icon: string;

    /**
     * 分类的上级
     */
    @ManyToOne(() => ArticleCategory, type => type.children)
    @JoinColumn({
        name: 'pid',
    })
    parent: ArticleCategory;

    /**
     * 分类下面的子分类
     */
    @OneToMany(() => ArticleCategory, type => type.parent)
    children: ArticleCategory[];

    /**
     * 分类下面的文章
     */
    @OneToMany(() => Article, type => type.category)
    articles: Article[];

    @Column({
        type: 'text',
        comment: '描述',
    })
    description: string;

    @CreateDateColumn({
        type: 'timestamptz',
    })
    create_time: Date;

    @UpdateDateColumn({
        type: 'timestamptz',
    })
    update_time: Date;
}
/**
 * 文章表
 */
@Entity({
    name: 'article',
})
export class Article {
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

    /**
     * 文章的类型
     */
    @ManyToOne(() => ArticleCategory, type => type.article_category_id)
    @JoinColumn({
        name: 'article_cateogry_id'
    })
    category: ArticleCategory;

    /**
     * 文章下面的评论
     */
    @OneToMany(() => ArticleComment, type => type.article)
    comments: ArticleComment[];

    @CreateDateColumn({
        type: 'timestamptz'
    })
    create_time: Date;

    @UpdateDateColumn({
        type: 'timestamptz'
    })
    update_time: Date;
}


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