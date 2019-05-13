import { Entity, PrimaryGeneratedColumn, Column, Timestamp, CreateDateColumn } from 'typeorm';

@Entity({
    name: 'logger'
})
export class LoggerEntity {

    @PrimaryGeneratedColumn({
        type: 'int'
    })
    logger_id: number;

    @Column({
        type: 'text',
        comment: '描述',
        default: ''
    })
    description: string;

    @Column({
        type: 'varchar',
        length: 20,
        default: ''
    })
    openid: string;

    @Column({
        type: 'timestamp',
        comment: '开始时间',
        default: new Date()
    })
    start_time: Date = new Date();

    @Column({
        type: 'timestamp',
        comment: '结束时间',
        default: new Date()
    })
    end_time: Date = new Date();

    @Column({
        type: 'varchar',
        length: 20,
        comment: '参数',
        default: '',
        transformer: {
            to: (json: any) => {
                json = json || {};
                return JSON.stringify(json)
            },
            from: (val: string) => {
                return JSON.parse(val)
            }
        }
    })
    params: object;

    @Column({
        type: 'varchar',
        length: 20,
        comment: 'ip地址',
        default: ''
    })
    ip: string;

    @Column({
        type: 'varchar',
        length: 50,
        comment: '相应结果',
        default: ''
    })
    result: string;

    @Column({
        type: 'varchar',
        length: 20,
        comment: '权限值,一些列权限组合',
        default: ''
    })
    permissions: string;
}
