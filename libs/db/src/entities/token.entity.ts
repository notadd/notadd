import { Entity, PrimaryGeneratedColumn, JoinColumn, Column, OneToOne, CreateDateColumn, UpdateDateColumn, ObjectType } from 'typeorm';
export class IAccessToken {
    access_token_id: number;
    access_token: string;
    openid: string;
    appid: string;
    ip: string;
    platform: string;
    grant_type: number;
    scope: string;
    expires_in: Date;
    create_time: Date;
    update_time: Date;
    status: number;
    refreshToken: IRefreshToken;
}
export class IRefreshToken {
    refresh_token_id: number;
    token: IAccessToken;
    refresh_token: string;
    expires_in: Date;
    create_time: Date;
    update_time: Date;
}
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

    @OneToOne(() => RefreshToken)
    refreshToken: IRefreshToken;
}

@Entity({
    name: 'refreshToken'
})
export class RefreshToken implements IRefreshToken {
    @PrimaryGeneratedColumn({
        type: 'int'
    })
    refresh_token_id: number;

    @OneToOne(() => AccessToken)
    @JoinColumn({
        name: 'refresh_token_id'
    })
    token: AccessToken;

    @Column({
        type: 'varchar',
        length: 50,
        comment: '刷新凭证'
    })
    refresh_token: string;

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
}
