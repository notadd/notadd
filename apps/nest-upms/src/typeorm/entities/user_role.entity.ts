import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({
    name: 'user_role'
})
export class UserRole {

    @PrimaryGeneratedColumn()
    user_role_id : number;

    @Column({
        type: 'varchar',
        length: 20
    })
    openid: string;

    @Column({
        type: 'int',
    })
    role_id: number;
}