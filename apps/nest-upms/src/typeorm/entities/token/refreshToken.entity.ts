import { Entity, JoinColumn, PrimaryGeneratedColumn, Column, OneToOne, UpdateDateColumn, CreateDateColumn } from 'typeorm';
import { AccessTokenEntity } from './accessToken.entity';

@Entity({
    name: 'refreshToken'
})
export class RefreshTokenEntity {
    @PrimaryGeneratedColumn({
        type: 'int'
    })
    refresh_token_id: number;

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
