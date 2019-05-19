import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
@Entity({
    name: 'addon_permission'
})
export class AddonPermissionEntity {
    filter(arg0: (item: any) => boolean) {
        throw new Error("Method not implemented.");
    }

    @PrimaryGeneratedColumn({
        type: 'int'
    })
    addon_permission_id: number;

    @Column({
        type: 'int',
    })
    addon_id: number;

    // @ManyToOne(() => PermissionEntity, t => t.addons)
    // permission: PermissionEntity;
    @Column({
        type: 'int',
    })
    permission_id: number;

    @Column({
        type: 'timestamptz'
    })
    create_time: Date;

    @Column({
        type: 'timestamptz'
    })
    update_time: Date;
}