import { Entity,  PrimaryGeneratedColumn, Column, OneToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { RefreshTokenEntity } from './refreshToken.entity';
export const EXPRES_TIME = 60 * 60 * 24;
export type IAccessTokenStatus = -1 | 0 | 1;
@Entity({
    name: 'accessToken'
})
export class AccessTokenEntity {
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
    status: IAccessTokenStatus;

    // @BeforeInsert()
    // protected insterExpresIn() {
    //     this.expires_in = new Date(new Date().setDate(new Date().getTime() + EXPRES_TIME));
    // }

    // @BeforeUpdate()
    // protected updateExpresIn() {
    //     this.expires_in = new Date(new Date().setDate(new Date().getTime() + EXPRES_TIME));
    // }

    /**
     * 刷新凭证
     */
    @OneToOne(() => RefreshTokenEntity, type => type.token)
    refreshToken: RefreshTokenEntity;
}
