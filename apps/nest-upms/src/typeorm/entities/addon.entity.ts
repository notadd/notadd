import { Column, Entity, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn, CreateDateColumn } from 'typeorm';
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
        length: 255
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
        type: 'text'
    })
    description: string;

    @Column({
        type: 'smallint',
    })
    status: number;

    @CreateDateColumn({
        type: 'timestamp',
    })
    create_time: Date;

    @UpdateDateColumn({
        type: 'timestamp'
    })
    update_time: Date;

    /**
     * 应用权限
     */
    permissions: PermissionEntity[];
}
