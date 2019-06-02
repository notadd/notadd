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


    /**
     * 设备
     */
    @OneToOne(() => Device)
    device: IDevice

    /**
     * 端口号
     */
    @Column()
    port: number;


    /**
     * 分配的Ip地址
     * 192.168.0.1
     */
    @Column()
    ip: string;
}

@Entity({
    name: 'device'
})
export class Device {
    @PrimaryGeneratedColumn()
    device_id: number;


    /**
     * 设备编号
     */
    @Column()
    deviceNum: string;


    /**
     * 设备分类
     */
    @ManyToOne(() => DeviceCategory, type => type.devices)
    @JoinColumn()
    category: IDeviceCategory;


    /**
     * 设备ip
     */
    @OneToOne(() => DeviceIp)
    @JoinColumn()
    ip: IDeviceIp;
}

@Entity({
    name: 'device_category'
})
export class DeviceCategory {

    @PrimaryGeneratedColumn()
    device_category_id: number;

    /**
     * 分类名
     */
    @Column()
    title: string;

    /**
     * 分类里面的所有设备
     */
    @OneToMany(() => Device, type => type.category)
    devices: IDevice[];
}