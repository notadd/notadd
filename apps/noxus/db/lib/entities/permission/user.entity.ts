import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Organization } from './organization.entity';
import { Permission } from './permission.entity';
import { Role } from './role.entity';
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