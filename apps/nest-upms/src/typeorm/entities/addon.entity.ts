import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { PermissionEntity } from './permission.entity';

@Entity({
    name: 'addon'
})
export class AddonEntity {

    @PrimaryGeneratedColumn()
    appid: number;

    @Column({
        type: 'int',
        comment: '上级',
        default: 0
    })
    pid: number;

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
    status: number;

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
    @OneToMany(() => PermissionEntity, type => type.fromAddon)
    permissions: PermissionEntity[];
}
