import { Column, JoinTable, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToMany } from 'typeorm';
import { Index } from 'typeorm';

@Entity({
    name: 'addon'
})
export class Addon {
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
    @ManyToMany(() => Permission)
    permissions: Permission[];
}

@Entity({
    name: 'organization'
})
export class Organization {
    @PrimaryGeneratedColumn({
        type: 'int'
    })
    organization_id: number;

    @Column({
        type: 'varchar',
        length: 20,
        comment: '英文名称'
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

    @CreateDateColumn({
        type: 'timestamp',
        comment: '创建时间'
    })
    create_time: Date = new Date();

    @UpdateDateColumn({
        type: 'timestamp',
        comment: '更新时间'
    })
    update_time: Date = new Date();

    @Column({
        type: 'varchar',
        length: 11,
        comment: '排序'
    })
    displayorder: number;
}


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


@Entity({
    name: 'role'
})
export class Role {

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
    @ManyToMany(() => Permission)
    @JoinTable()
    permissions: Permission[];
}

@Entity({
    name: 'user'
})
export class User {

    @PrimaryGeneratedColumn()
    user_id: number;

    @Column({
        type: 'uuid',
    })
    // @Index({ unique: true })
    openid: string;

    @Column({
        type: 'varchar',
        length: 20,
        comment: '联盟id'
    })
    // @Index({ unique: true })
    unionid: string;


    @Column({
        type: 'varchar',
        length: 50
    })
    // @Index({ unique: true })
    username: string;

    @Column({
        type: 'varchar',
        length: 20
    })
    password: string;

    @Column({
        type: 'varchar',
        length: 20,
        comment: '盐'
    })
    salt: string;

    @Column({
        type: 'varchar',
        length: 20,
        comment: '真实姓名'
    })
    realname: string;

    @Column({
        type: 'varchar',
        length: 50,
        comment: '昵称'
    })
    nickname: string;

    @Column({
        type: 'varchar',
        length: 50
    })
    avatar: string;

    @Column({
        type: 'varchar',
        length: 20
    })
    phone: string;

    @Column({
        type: 'varchar',
        length: 30
    })
    email: string;

    @Column({
        type: 'smallint',
        default: 0
    })
    sex: number;

    @CreateDateColumn({
        type: 'timestamptz'
    })
    create_time: Date;

    @UpdateDateColumn({
        type: 'timestamptz'
    })
    update_time: Date;


    /**
     * 常用，定义一下
     */

    /**
     * 用户拥有的权限，一个用户可以有多个权限
     */
    @ManyToMany(() => Permission)
    @JoinTable()
    permissions: Permission[];
    /**
     * 用户拥有的角色，一个用户可以分配多个角色
     */
    @ManyToMany(() => Organization)
    @JoinTable()
    roles: Role[];
    /**
     * 用户所属组织，一个用户可以有多个组织，
     */
    @ManyToMany(() => Organization)
    @JoinTable()
    organizations: Organization[];
}