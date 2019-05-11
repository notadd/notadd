import { Entity, BeforeInsert, BeforeUpdate, PrimaryGeneratedColumn, Column, Timestamp, OneToOne } from 'typeorm';
import { EXPRES_TIME } from './accessToken.entity'
import { AccessTokenEntity } from '..';
@Entity({
    name: 'refreshToken'
})
export class RefreshTokenEntity {
    @PrimaryGeneratedColumn({
        type: 'int'
    })
    refresh_token_id: number;

    // @Column({
    //     type: 'varchar',
    //     length: 20,
    //     comment: 'access token的id'
    // })
    // token_id: number;
    @OneToOne(() => AccessTokenEntity, type => type.refreshToken)
    token: AccessTokenEntity;

    @Column({
        type: 'varchar',
        length: 50,
        comment: '刷新凭证'
    })
    refresh_token: string;

    @Column({
        type: 'timestamp without time zone',
        comment: '过期时间'
    })
    expires_in: Date;

    @Column({
        type: 'timestamp without time zone',
        comment: '创建时间'
    })
    create_time: Date;

    @Column({
        type: 'timestamp without time zone',
        comment: '更新时间'
    })
    update_time: Date;

    @BeforeInsert()
    protected insterExpresIn() {
        this.expires_in = new Date(new Date().setDate(new Date().getTime() + EXPRES_TIME));
    }

    @BeforeUpdate()
    protected updateExpresIn() {
        this.expires_in = new Date(new Date().setDate(new Date().getTime() + EXPRES_TIME));
    }
}
