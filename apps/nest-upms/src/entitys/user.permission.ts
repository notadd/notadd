import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('user_permission')
export class UserPermission {
    @PrimaryGeneratedColumn()
    user_permission_id: number;

    @Column({
        type: 'varchar',
        length: 20
    })
    openid: string;

    @Column({
        type: 'integer',
    })
    permission_id: number;

    @Column({
        type: 'tinyint',
        length: 2
    })
    type: number;
}