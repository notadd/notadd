import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity({
    name: 'message'
})
export class Message {
    
    @PrimaryGeneratedColumn()
    msg_id: number;

    @Column({
        type: 'text',
        comment: '消息'
    })
    content: string;

    @Column({
        type: 'smallint',
        comment: '消息类型: 1:text,2:video,3:voide,4:shortvideo,5:location,6:link'
    })
    msg_type: number;

    @Column({
        type: 'varchar',
        length: 255,
        nullable: true,
    })
    pic_url: string;

    @Column({
        type: 'int',
        comment: '媒体id'
    })
    media_id : number;

    @Column({
        type: 'int',
        comment: '视频消息媒体id'
    })
    thumb_media_id: number;

    @Column({
        type: 'varchar',
        length: 20,
        comment: '地理位置维度'
    })
    location_x: string;

    @Column({
        type: 'varchar',
        length: 20,
        comment: '地理位置经度'
    })
    location_y: string;

    @Column({
        type: 'varchar',

    })

    @Column({
        type: 'varchar',
        length: 50,
        comment: '地理位置信息',
    })
    label: string;

    @Column({
        type: 'varchar',
        length: 100,
        comment: '标题',
    })
    title: string;

    @Column({
        type: 'varchar',
        length: 100,
        comment: '链接',
    })
    url: string;

    @Column({
        type: 'text',
        comment: '描述',
    })
    description: string;

    @Column({
        type: 'uuid',
        comment: '发送者openid'
    })
    from_user: string;

    @Column({
        type: 'uuid',
        comment: '接受者openid'
    })
    to_user: string;
    
    @CreateDateColumn({
        type: 'timestamptz',
    })
    create_time: Date;

    @UpdateDateColumn({
        type: 'timestamptz',
    })
    update_time: Date;

}