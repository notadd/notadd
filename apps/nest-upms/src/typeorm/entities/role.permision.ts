import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('role_permission')
export class RolePermission {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    role_id: number;

    @Column()
    permission_id: number;
}