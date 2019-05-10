export interface User {
    user_id: number;
    username: string;
    password: string;
    salt: string;
    realname: string;
    avatar: string;
    phone: string;
    email: string;
    sex: 0 | 1 | 2;
    locked: 0 | 1;
    ctime: number;
}