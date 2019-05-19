import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity({
    name: 'user_organization'
})
export class UserOrganizationEntity {

    @PrimaryGeneratedColumn()
    user_orgainization_id: number;

    @Column()
    openid: string;

    @Column()
    orgainization_id: number;
}
