import { Entity, PrimaryColumn, Column, Timestamp } from 'typeorm';


@Entity()
export class Addon {

    @PrimaryColumn({
        type: 'varchar',
        length: 20
    })
    appid: string;

    @Column({
        type: 'varchar',
        length: 20
    })
    appsecret: string;

    @Column({
        type: 'varchar',
        length: 255
    })
    icon: string;

    @Column({
        type: 'varchar',
        length: 20
    })
    name: string;

    @Column({
        type: 'varchar',
        length: 20
    })
    title: string;

    @Column({
        type: 'text'
    })
    description: string;

    @Column({
        type: 'tinyint',
        length: 2
    })
    status: number;

    @Column({
        type: 'timestamp',
    })
    create_time: Timestamp;

    @Column({
        type: 'timestamp'
    })
    update_time: Timestamp;
}
