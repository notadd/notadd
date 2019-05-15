import { Entity, PrimaryGeneratedColumn, Column, Timestamp, OneToMany, CreateDateColumn, UpdateDateColumn, ManyToOne, Index } from 'typeorm'
import { AddonEntity } from './addon.entity';
import { UserEntity } from './user.entity';
import { RoleEntity } from './role.entity';

/**
 * 应用权限表
 */
@Entity({
    name: 'permission'
})
export class PermissionEntity {
    /**
     * id
     */
    @PrimaryGeneratedColumn()
    permission_id: number;

    /**
     * 上级
     */
    @Column()
    @Index({
        unique: true,
    })
    pid: number;

    /**
     * 英文代号
     */
    @Column()
    name: string;

    /**
     * 汉语名称
     */
    @Column({
        type: 'varchar',
        length: 255
    })
    title: string;

    /**
     * 权限简介
     */
    @Column({
        type: 'varchar',
        length: 255
    })
    decription: string;
    /**
     * 权限值
     */
    // @Column()
    // value: string;

    /**
     * 图标
     */
    @Column()
    icon: string;

    /**
     * 状态 -1禁止，0开发中,1正常
     */
    @Column({
        type: 'smallint',
        default: 1,
    })
    status: -1 | 0 | 1;

    /**
     * 排序
     */
    @Column({
        type: 'int',
    })
    displayorder: number;

    /**
     * 创建时间
     */
    @CreateDateColumn({
        type: 'timestamptz'
    })
    create_time: Date = new Date();

    /**
     * 更新时间
     */
    @UpdateDateColumn({
        type: 'timestamptz'
    })
    update_time: Date = new Date();

    /**
     * 应用id
     */
    @Column({
        comment: '应用id',
        default: 0
    })
    addon_id: number;

    /**
     * 常用的，所以定义一下，查询后挂载到Permission上
     */

    /**
     * 某个权限下面的所有应用
     */
    addons: AddonEntity[];

    /**
     * 某个权限下面的用户
     */
    users: UserEntity[];

    /**
     * 某个权限下面的角色
     */
    roles: RoleEntity[];
}
