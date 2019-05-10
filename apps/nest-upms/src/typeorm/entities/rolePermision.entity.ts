import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({
    name: 'role_permission'
})
export class RolePermission {

    @PrimaryGeneratedColumn()
    role_permission_id: number;

    @Column({
        type: 'int',
    })
    role_id: number;

    @Column({
        type: 'int',
    })
    permission_id: number;
}