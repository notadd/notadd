import { Entity, Column, PrimaryGeneratedColumn, Timestamp } from 'typeorm'

@Entity({
    name: 'permission'
})
export class AddonPermissionEntity {
    @PrimaryGeneratedColumn({
        type: 'int'
    })
    addon_permission_id: number;

    @Column({
        type: 'int',
        length: 11
    })
    addon_id: number;

    @Column({
        type: 'int',
        length: 11
    })
    permission_id: number;

    @Column({
        type: 'timestamp'
    })
    create_time: Timestamp;

    @Column({
        type: 'timestamp'
    })
    update_time: Timestamp;
}