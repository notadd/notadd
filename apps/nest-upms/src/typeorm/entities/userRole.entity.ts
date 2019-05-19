import { Entity, PrimaryGeneratedColumn, Column, Index } from "typeorm";

@Entity({
    name: 'user_role'
})
export class UserRoleEntity {

    @PrimaryGeneratedColumn()
    user_role_id: number;

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
    role_id: number;
}