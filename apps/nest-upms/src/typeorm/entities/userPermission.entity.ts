import { Entity, Index, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({
    name: 'user_permission'
})
export class UserPermissionEntity {

    @PrimaryGeneratedColumn()
    user_permission_id: number;

    @Column({
        type: 'varchar',
        length: 20
    })
    // @Index()
    openid: string;

    @Column({
        type: 'int',
    })
    // @Index()
    permission_id: number;

    @Column({
        type: 'smallint',
    })
    type: number;
}