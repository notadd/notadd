import { Column, JoinTable, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToMany } from 'typeorm';
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
     * 一个应用有多个权限
     * 一个权限也可以有多个应用
     */
    @ManyToMany(() => PermissionEntity)
    @JoinTable()
    permissions: PermissionEntity[];
}

