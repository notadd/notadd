import { Column, Entity, PrimaryGeneratedColumn, Timestamp, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { PermissionEntity } from './permission.entity';

@Entity({
    name: 'addon'
})
export class AddonEntity {

    @PrimaryGeneratedColumn()
    appid: number;

    @Column({
        type: 'varchar',
        length: 20
    })
    appsecret: string;

    @Column({
        type: 'varchar',
        length: 255,
        default: ''
    })
    icon: string;

    @Column({
        type: 'varchar',
        length: 20
    })
    name: string;

    @Column({
        type: 'varchar',
        length: 20
    })
    title: string;

    @Column({
        type: 'text',
        default: ''
    })
    description: string;

    @Column({
        type: 'smallint',
        default: 1
    })
    status: -1|1|0;

    @CreateDateColumn({
        type: 'timestamptz'
    })
    create_time: Date;

    @UpdateDateColumn({
        type: 'timestamptz'
    })
    update_time: Date;

    /**
     * 应用权限
     */
    permissions: PermissionEntity[];
}
