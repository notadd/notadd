import { Entity, Column , PrimaryGeneratedColumn, Timestamp } from 'typeorm';
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
        comment: '英文代号'
    })
    name: string;

    @Column({
        type: 'varchar',
        length: 20,
        comment: '中文名称'
    })
    title: string;

    @Column({
        type: 'text',
        comment: '描述备注'
    })
    description: string;

    @Column({
        type: 'timestamp'
    })
    create_time: Date;

    @Column({
        type: 'timestamp'
    })
    update_time: Date;

    /**
     * 角色权限，常用，定义一下
     */
    permissions: PermissionEntity[];
}