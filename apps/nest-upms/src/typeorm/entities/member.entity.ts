import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({
    name: 'member'
})
export class MemberEntity {
    @PrimaryGeneratedColumn()
    member_id: number;

    @Column({
        type: 'varchar',
        length: 20,
        comment: '昵称'
    })
    name: string;

    @Column({
        type: 'varchar',
        length: 20,
        comment: '姓名'
    })
    realname: string;

    @Column({
        type: 'varchar',
        length: 20,
        comment: '电话'
    })
    phone: string;

    @Column({
        type: 'varchar',
        comment: 'openid',
        default: ''
    })
    openid: string;

    @Column({
        type: 'varchar',
        length: 30,
        comment: '邮箱'
    })
    email: string;

    @Column({
        type: 'varchar',
        length: 20,
        comment: '用户名'
    })
    username: string;

    @Column({
        type: 'varchar',
        length: 20,
        comment: '密码'
    })
    password: string;

    @Column({
        type: 'varchar',
        length: 20,
        comment: '加密参数'
    })
    salt: string;

    @CreateDateColumn({
        type: 'timestamptz',
        comment: '创建时间'
    })
    create_time: Date;

    @UpdateDateColumn({
        type: 'timestamptz',
        comment: '更新时间'
    })
    update_time: Date;
}