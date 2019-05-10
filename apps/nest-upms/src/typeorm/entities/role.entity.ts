import { Entity, Column , PrimaryGeneratedColumn, Timestamp } from 'typeorm';

@Entity({
    name: 'role'
})
export class Role {

    @PrimaryGeneratedColumn()
    role_id: number;

    @Column({
        type: 'varchar',
        length: 20,
        comment: '英文代号'
    })
    name: string;

    @Column({
        type: 'varchar',
        length: 20,
        comment: '中文名称'
    })
    title: string;

    @Column({
        type: 'text',
        comment: '描述备注'
    })
    description: string;

    @Column({
        type: 'timestamp'
    })
    create_time: Timestamp;

    @Column({
        type: 'timestamp'
    })
    update_time: Timestamp;

}