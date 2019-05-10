import { Entity, PrimaryGeneratedColumn, Column, Timestamp } from 'typeorm';

@Entity({
    name: 'accessToken'
})
export class AccessToken {
    @PrimaryGeneratedColumn({
        type: 'int'
    })
    access_token_id: number;
    @Column({
        type: 'varchar',
        length: 50,
        comment: '授权凭证'
    })
    access_token: string;
    @Column({
        type: 'varchar',
        length: 20,
        comment: '用户openid'
    })
    openid: string;

    @Column({
        type: 'varchar',
        length: 50,
        comment: '应用id'
    })
    appid: string;

    @Column({
        type: 'varchar',
        length: 50,
        comment: 'ip地址'
    })
    ip: string;

    @Column({
        type: 'varchar',
        length: 50,
        comment: '平台'
    })
    platform: string;

    @Column({
        type: 'timestamp',
        comment: '过期时间'
    })
    expires_in: Timestamp;

    @Column({
        type: 'smallint',
        comment: '授权类型'
    })
    grant_type: number;

    @Column({
        type: 'varchar',
        length: 50,
        comment: '授权范围'
    })
    scope: string;

    @Column({
        type: 'timestamp',
        comment: '创建时间'
    })
    create_time: Timestamp;

    @Column({
        type: 'timestamp',
        comment: '更新时间'
    })
    update_time: Timestamp;

}