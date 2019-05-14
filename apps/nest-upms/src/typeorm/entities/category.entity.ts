import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity({
    name: 'article_category'
})
export class CategoryEntity {

    @PrimaryGeneratedColumn()
    article_category_id	: number;

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