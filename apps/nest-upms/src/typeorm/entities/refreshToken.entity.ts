import { Entity, PrimaryGeneratedColumn, Column, Timestamp } from 'typeorm';

@Entity({
    name: 'refreshToken'
})
export class RefreshToken {
    @PrimaryGeneratedColumn({
        type: 'int'
    })
    refresh_token_id: number;

    @Column({
        type: 'varchar',
        length: 20,
        comment: 'access token的id'

    })
    token_id: string;
    @Column({
        type: 'varchar',
        length: 50,
        comment: '刷新凭证'
    })
    refresh_token: string;

    @Column({
        type: 'timestamp',
        comment: '过期时间'
    })
    expires_in: Timestamp;

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