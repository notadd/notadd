import { Entity, PrimaryGeneratedColumn, Column, Timestamp } from 'typeorm';

@Entity({
    name: 'logger'
})
export class Logger {
    
    @PrimaryGeneratedColumn({
        type: 'int'
    })
    logger_id: number;

    @Column({
        type: 'text',
        comment: '描述'
    })
    description: string;

    @Column({
        type: 'varchar',
        length: 20
    })
    openid: string;

    @Column({
        type: 'timestamp',
        comment: '开始时间'
    })
    start_time: Timestamp;

    @Column({
        type: 'timestamp',
        comment: '结束时间'
    })
    end_time: Timestamp;

    @Column({
        type: 'varchar',
        length: 20,
        comment: '参数'
    })
    params: string;

    @Column({
        type: 'varchar',
        length: 20,
        comment: 'ip地址'
    })
    ip: string;

    @Column({
        type: 'varchar',
        length: 50,
        comment: '相应结果'
    })
    result: string;

    @Column({
        type: 'varchar',
        length: 20,
        comment: '权限值,一些列权限组合'
    })
    permissions: string;
}