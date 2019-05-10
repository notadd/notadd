import { Entity, Column, PrimaryGeneratedColumn, Timestamp } from 'typeorm'

@Entity({
    name: 'addon_permission'
})
export class AddonPermissionEntity {
    
    @PrimaryGeneratedColumn({
        type: 'int'
    })
    addon_permission_id: number;

    @Column({
        type: 'int',
    })
    addon_id: number;

    @Column({
        type: 'int',
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