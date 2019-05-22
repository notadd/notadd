import { Column, CreateDateColumn, Entity, Index, JoinTable, ManyToMany, ManyToOne, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { AddonEntity } from './addon.entity';
import { RoleEntity } from './role.entity';
import { UserEntity } from './user.entity';

/**
 * 应用权限表
 */
@Entity({
    name: 'permission'
})
export class PermissionEntity {
    /**
     * 上级
     */
    @Column()
    father_name: number;

    /**
     * 英文代号
     * 格式: addonName.permissionName
     * 唯一
     */
    @PrimaryColumn()
    // @Index()
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
     * 权限值,即操作符
     * 如：read,write,all...
     */
    @Column({
        type: "varchar",
        length: 255,
        transformer: {
            // 存
            to: (val: string[]) => {
                return JSON.stringify(val)
            },
            // 取
            from: (val: string) => {
                return JSON.parse(val)
            }
        }
    })
    value: string[];

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
        default: 0
    })
    @Index()
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
    create_time: Date;

    /**
     * 更新时间
     */
    @UpdateDateColumn({
        type: 'timestamptz'
    })
    update_time: Date;

    /**
     * 应用id
     */
    // @Column({
    //     comment: '权限来源模块',
    //     default: 0
    // })
    // @Index()
    // from_addon_id: number;

    @ManyToOne(() => AddonEntity, type => type.permissions)
    @JoinTable()
    // @Index()
    fromAddon: AddonEntity;
    /**
     * 常用的，所以定义一下，查询后挂载到Permission上
     */

    /**
     * 拥有此权限的所有模块
     */
    addons: AddonEntity[] = [];

    /**
     * 拥有此权限的所有用户
     */
    @ManyToMany(type => UserEntity, user => user.permissions)
    users: UserEntity[];

    /**
     * 拥有此权限的所有角色
     */
    roles: RoleEntity[] = [];
}
