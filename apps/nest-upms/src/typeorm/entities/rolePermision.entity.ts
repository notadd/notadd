import { Entity, PrimaryGeneratedColumn, Column, Index } from "typeorm";

@Entity({
    name: 'role_permission'
})
export class RolePermissionEntity {

    @PrimaryGeneratedColumn()
    role_permission_id: number;

    @Column({
        type: 'int',
    })
    @Index()
    role_id: number;

    @Column({
        type: 'int',
    })
    @Index()
    permission_id: number;
}