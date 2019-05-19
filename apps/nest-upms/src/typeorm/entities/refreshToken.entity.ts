import { Entity, JoinColumn, PrimaryGeneratedColumn, Column, OneToOne, UpdateDateColumn, CreateDateColumn } from 'typeorm';
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
    @JoinColumn({
        name: 'token_id'
    })
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

    @CreateDateColumn({
        type: 'timestamp without time zone',
        comment: '创建时间'
    })
    create_time: Date = new Date();

    @UpdateDateColumn({
        type: 'timestamp without time zone',
        comment: '更新时间'
    })
    update_time: Date = new Date();

    // @BeforeInsert()
    // protected insterExpresIn() {
    //     this.expires_in = new Date(new Date().setDate(new Date().getTime() + EXPRES_TIME));
    // }

    // @BeforeUpdate()
    // protected updateExpresIn() {
    //     this.expires_in = new Date(new Date().setDate(new Date().getTime() + EXPRES_TIME));
    // }
}
