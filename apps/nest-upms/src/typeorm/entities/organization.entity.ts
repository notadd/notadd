import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn } from 'typeorm';
@Entity({
    name: 'organization'
})
export class OrganizationEntity {
    @PrimaryGeneratedColumn({
        type: 'int'
    })
    organization_id: number;
    @Column({
        type: 'varchar',
        length: 20,
        comment: '英文名称'
    })
    name: string;
    @Column({
        type: 'varchar',
        length: 20,
        comment: '中文名称'
    })
    title: string;
    @Column({
        type: 'text',
        comment: '描述备注'
    })
    description: string;
    @CreateDateColumn({
        type: 'timestamp',
        comment: '创建时间'
    })
    create_time: Date = new Date();
    @UpdateDateColumn({
        type: 'timestamp',
        comment: '更新时间'
    })
    update_time: Date = new Date();
    @Column({
        type: 'varchar',
        length: 11,
        comment: '排序'
    })
    displayorder: number;
}