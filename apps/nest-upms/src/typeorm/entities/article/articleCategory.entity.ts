import { Entity, PrimaryGeneratedColumn, Column,OneToOne, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { ArticleEntity } from './article.entity';
/**
 * 文章分类表
 */
@Entity({
    name: 'article_category'
})
export class ArticleCategoryEntity {

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
    @ManyToOne(() => ArticleCategoryEntity, type => type.children)
    @JoinColumn({
        name: 'pid'
    })
    parent: ArticleCategoryEntity;

    /**
     * 分类下面的子分类
     */
    @OneToMany(() => ArticleCategoryEntity, type => type.parent)
    children: ArticleCategoryEntity[];

    /**
     * 分类下面的文章
     */
    @OneToMany(() => ArticleEntity, type => type.category)
    articles: ArticleEntity[];

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