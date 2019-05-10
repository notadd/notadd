import { Entity, PrimaryGeneratedColumn, Column, Timestamp } from 'typeorm'

@Entity({
    name: 'permission'
})
export class PermissionEntity {

    @PrimaryGeneratedColumn()
    permission_id: number;

    @Column()
    pid: number;

    @Column()
    name: string;

    @Column({
        type: 'smallint'
    })
    type: number;

    @Column()
    value: string;

    @Column()
    icon: string;

    @Column({
        type: 'smallint',
    })
    status: number;

    @Column({
        type: 'int',
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
