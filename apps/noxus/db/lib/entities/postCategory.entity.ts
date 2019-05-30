import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({
    name: 'postCategory'
})
export class PostCategoryEntity {
    @PrimaryGeneratedColumn()
    post_post_category_idid: number;

    @Column({
        type: 'varchar',
        length: 20,
        comment: '分类名'
    })
    title: string;
    @Column({
        type: 'varchar',
        length: 255,
        comment: '分类图标'
    })
    icon: string;

    @Column({
        type: 'text',
        comment: '分类描述'
    })
    description: string;

    @CreateDateColumn({
        type: 'timestamptz',
        comment: '创建时间'
    })
    create_time: Date;

    @UpdateDateColumn({
        type: 'timestamptz',
        comment: '更新时间'
    })
    update_time: Date;
}