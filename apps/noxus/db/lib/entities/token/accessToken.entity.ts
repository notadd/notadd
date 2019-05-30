import { Entity, PrimaryGeneratedColumn, Column, OneToOne, CreateDateColumn, UpdateDateColumn, JoinColumn } from 'typeorm';
import { RefreshToken } from './refreshToken.entity';
export const EXPRES_TIME = 60 * 60 * 24;

@Entity({
    name: 'accessToken'
})
export class AccessToken {
    @PrimaryGeneratedColumn({
        type: 'bigint'
    })
    access_token_id: number;
    /**
     * 根据access_token查询用户Openid，添加Index
     */
    @Column({
        type: 'varchar',
        length: 50,
        comment: '授权凭证'
    })
    // @Index()
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
        type: 'timestamptz',
        comment: '过期时间'
    })
    expires_in: Date;

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

    @Column({
        type: 'smallint',
        comment: '1正常,-1过期/失效'
    })
    status: number;

    /**
     * 刷新凭证
     */
    @OneToOne(() => RefreshToken, type => type.token)
    refreshToken: RefreshToken;
}
