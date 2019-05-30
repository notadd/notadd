import { Entity, JoinColumn, PrimaryGeneratedColumn, Column, OneToOne, UpdateDateColumn, CreateDateColumn } from 'typeorm';
import { AccessToken } from './accessToken.entity';

@Entity({
    name: 'refreshToken'
})
export class RefreshToken {
    @PrimaryGeneratedColumn({
        type: 'int'
    })
    refresh_token_id: number;

    @OneToOne(() => AccessToken, type => type.refreshToken)
    @JoinColumn({
        name: 'token_id'
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
