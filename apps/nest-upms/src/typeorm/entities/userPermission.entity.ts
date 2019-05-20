import { Entity, Index, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({
    name: 'user_permission'
})
export class UserPermissionEntity {

    @PrimaryGeneratedColumn()
    user_permission_id: number;

    @Column({
        type: 'uuid',
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
    type: -1|1;
}