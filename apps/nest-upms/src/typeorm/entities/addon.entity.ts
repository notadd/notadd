import { Column, Entity, PrimaryGeneratedColumn, Timestamp, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { PermissionEntity } from './permission.entity';

@Entity({
    name: 'addon'
})
export class AddonEntity {

    @PrimaryGeneratedColumn()
    appid: number;

    @Column({
        type: 'int',
        comment: '上级',
    })
    @Column({
        type: 'varchar',
        length: 20
    })
    appsecret: string;

    @Column({
        type: 'varchar',
        length: 255,
        default: ''
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
        type: 'text',
        default: ''
    })
    description: string;

    @Column({
        type: 'smallint',
        default: 1,
        transformer: {
            from: (val) => {
                return val;
            },
            to: (val) => {
                if (typeof val === 'number' || typeof val === 'string') {
                    val = Number(val);
                    switch (val) {
                        case 0:
                        case 1:
                        case -1:
                            return val;
                        default:
                            return 0;
                    }
                }
                else {
                    return 0;
                }
            }
        }
    })
    status: -1 | 1 | 0;

    @CreateDateColumn({
        type: 'timestamptz'
    })
    create_time: Date;

    @UpdateDateColumn({
        type: 'timestamptz'
    })
    update_time: Date;

    /**
     * 应用权限
     */
    @OneToMany(() => PermissionEntity, type => type.fromAddon)
    permissions: PermissionEntity[];
}
