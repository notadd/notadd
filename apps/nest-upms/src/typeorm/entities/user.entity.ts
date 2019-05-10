import { Entity, Column , PrimaryGeneratedColumn, Timestamp } from 'typeorm';

@Entity('user')
export class User {
    
    @PrimaryGeneratedColumn()
    user_id: number;

    @Column({
        type: 'varchar',
        length: 50
    })
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
    })
    openid: string;

    @Column({
        type: 'varchar',
        length: 20,
        comment: '联盟id'
    })
    unionid: string;

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
        type: 'tinyint',
        length: 2,
    })
    sex: number;

    @Column('timestamp')
    create_time: Timestamp;

    @Column('timestamp')
    update_time: Timestamp;
}