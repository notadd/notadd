import { Entity, PrimaryGeneratedColumn, Column, Timestamp } from 'typeorm';
@Entity('organization')
export class Organization {
    //自增id
    @PrimaryGeneratedColumn()
    organization_id: number;

    @Column({
        type: "varchar",
        length: 50,
        comment: "英文名称"
    })
    name: string;

    @Column({
        type: "varchar",
        length: 50,
        comment: "中文名称"
    })
    title: string;

    @Column({
        type: "text",
        length: 100,
        comment: "描述备注"
    })
    description: Text;

    @Column({
        type: "timestamp",
        length: 50,
        comment: "创建时间"
    })
    create_time: Timestamp;

    @Column({
        type: "timestamp",
        length: 50,
        comment: "更新时间"
    })
    update_time: Timestamp;

    @Column({
        type: "varchar",
        length: 20,
        comment: "排序"
    })
    displayorder: string;
}