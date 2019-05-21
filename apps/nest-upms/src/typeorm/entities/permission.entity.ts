import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, Index, JoinTable } from 'typeorm'
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
     * 上级
     */
    @Column({
        type: 'varchar'
    })
    father_name: string;

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
    status: -1 | 0 | 1;

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
    users: UserEntity[] = [];
    /**
     * 拥有此权限的所有角色
     */
    roles: RoleEntity[] = [];
}
