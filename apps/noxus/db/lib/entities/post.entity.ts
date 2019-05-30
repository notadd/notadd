import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({
    name: 'tasks'
})
export class Post {
    @PrimaryGeneratedColumn()
    post_id: number;

    @Column({
        type: 'varchar',
        length: 20,
        comment: '业务标题'
    })
    title: string;

    @Column({
        type: 'varchar',
        length: 20,
        comment: '业务详情'
    })
    content: string;

    @Column({
        type: 'smallint',
        comment: '业务状态(0待处理，1处理中，2已处理，3无法处理)'
    })
    status: number;

    @Column({
        type: 'varchar',
        length: 20,
        comment: '处理人'
    })
    handler_user: string;

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