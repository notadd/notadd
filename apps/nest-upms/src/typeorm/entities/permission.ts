
import { Entity, PrimaryGeneratedColumn, Column, Timestamp } from 'typeorm'

@Entity()
export class Permission {

    @PrimaryGeneratedColumn()
    permission_id: number;

    @Column()
    pid: number;

    @Column()
    name: string;

    @Column({
        type: 'tinyint'
    })
    type: number;

    @Column()
    value: string;

    @Column()
    icon: string;

    @Column({
        type: 'tinyint',
        length: 2
    })
    status: number;

    @Column({
        type: 'int',
        length: 11
    })
    displayorder: number;

    @Column({
        type: 'timestamp'
    })
    create_time: Timestamp;

    @Column({
        type: 'timestamp'
    })
    update_time: Timestamp;
}
