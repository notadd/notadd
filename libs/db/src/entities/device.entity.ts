import { Entity, OneToOne, JoinColumn, PrimaryGeneratedColumn, OneToMany, Column, ManyToOne } from 'typeorm'
export interface IDeviceCategory {
    device_category_id: number;
    title: string;
    devices: IDevice[];
}
export interface IDeviceIp {
    device: IDevice
    ip: string;
}
export interface IDevice {
    device_id: number;
    deviceNum: string;
    category: IDeviceCategory;
    ip: IDeviceIp;
}
@Entity({
    name: 'device_ip'
})
export class DeviceIp {

    @PrimaryGeneratedColumn()
    device_ip_id: number;

    @OneToOne(() => Device)
    device: IDevice
    /**
     * 4 ip4
     * 6 ip6
     */
    @Column()
    family: number;

    /**
     * 地址
     */
    @Column()
    address: string;
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
    category: IDeviceCategory;

    @OneToOne(() => DeviceIp)
    ip: IDeviceIp;
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
    devices: IDevice[];
}