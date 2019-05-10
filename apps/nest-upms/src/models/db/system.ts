export interface System {
    system_id: number;
    icon: string;
    banner: string;
    theme: string;
    basepath: string;
    status: -1 | 1;
    name: string;
    title: string;
    description: string;
    ctime: number;
    orders: number;
}