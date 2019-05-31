import { Entity, OneToOne, JoinColumn, PrimaryGeneratedColumn, OneToMany, Column, ManyToOne } from 'typeorm'

@Entity({
    name: 'device_ip'
})
export class DeviceIp {
    @OneToOne(() => Device)
    device: Device

    @Column()
    ip: string;
}

@Entity({
    name: 'device'
})
export class Device {
    @PrimaryGeneratedColumn()
    device_id: number;

    @Column()
    deviceNum: string;

    @ManyToOne(() => DeviceCategory, type => type.devices)
    @JoinColumn()
    category: DeviceCategory;

    @OneToOne(() => DeviceIp)
    ip: DeviceIp;
}

@Entity({
    name: 'device_category'
})
export class DeviceCategory {

    @PrimaryGeneratedColumn()
    device_category_id: number;

    @Column()
    title: string;

    @OneToMany(() => Device, type => type.category)
    devices: Device[];
}