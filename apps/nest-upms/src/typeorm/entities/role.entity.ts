import { Entity, Column , PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn } from 'typeorm';
import { PermissionEntity } from './permission.entity';

@Entity({
    name: 'role'
})
export class RoleEntity {

    @PrimaryGeneratedColumn()
    role_id: number;

    @Column({
        type: 'varchar',
        length: 20,
        comment: '英文代号',
        default: ''
    })
    name: string;

    @Column({
        type: 'varchar',
        length: 20,
        comment: '中文名称',
        default: ''
    })
    title: string;

    @Column({
        type: 'text',
        comment: '描述备注',
        default: ''
    })
    description: string;

    @CreateDateColumn({
        type: 'timestamptz',
    })
    create_time: Date;

    @UpdateDateColumn({
        type: 'timestamptz',
    })
    update_time: Date;

    /**
     * 角色权限，常用，定义一下
     */
    permissions: PermissionEntity[] = [];
}