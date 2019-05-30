import { Column, CreateDateColumn, Entity, Index, JoinTable, ManyToMany, ManyToOne, PrimaryColumn, UpdateDateColumn, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Addon } from './addon.entity';
import { Role } from './role.entity';
import { User } from './user.entity';

/**
 * 应用权限表
 */
@Entity({
    name: 'permission'
})
export class Permission {
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 英文代号
     * 格式: addonName.permissionName
     * 唯一
     */
    @Column()
    // @Index()
    name: string;
    /**
     * 上级
     */
    @Column({
        type: 'varchar'
    })
    father_name: string;
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
        length: 255,
        default: ''
    })
    decription: string;
    // description
    /**
     * 权限值,即操作符
     * 如：read,write,all...
     */
    @Column({
        type: "varchar",
        length: 255
    })
    value: string[];
    /**
     * 图标
     */
    @Column({
        type: 'varchar',
        length: 255,
        default: ''
    })
    icon: string;
    /**
     * 状态 -1禁止，0开发中,1正常
     */
    @Column({
        type: 'smallint',
        default: 0
    })
    @Index()
    status: number;
    /**
     * 排序
     */
    @Column({
        type: 'int',
        default: 0
    })
    displayorder: number;
    /**
     * 创建时间
     */
    @CreateDateColumn({
        type: 'timestamptz'
    })
    create_time: Date;
    /**
     * 更新时间
     */
    @UpdateDateColumn({
        type: 'timestamptz'
    })
    update_time: Date;
    /**
     * 常用的，所以定义一下，查询后挂载到Permission上
     */

    /**
     * 拥有此权限的所有模块
     */
    @ManyToMany(() => Addon)
    addons: Addon[];
    /**
     * 拥有此权限的所有用户
     */
    @ManyToMany(() => User)
    users: User[];

    /**
     * 拥有此权限的所有角色
     */
    @ManyToMany(() => Role)
    roles: Role[];
}
