import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({
    name: 'user_permission'
})
export class UserPermission {

    @PrimaryGeneratedColumn()
    user_permission_id: number;

    @Column({
        type: 'varchar',
        length: 20
    })
    openid: string;

    @Column({
        type: 'int',
    })
    permission_id: number;

    @Column({
        type: 'smallint',
    })
    type: number;
}