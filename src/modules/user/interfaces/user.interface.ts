export interface User {
    id: number;
    username: string;
    email: string;
    mobile: string;
    password: string;
    banned: boolean;
    recycle: boolean;
    roles: {
        id: number;
        name: string;
        permissions: {
            id: number;
            name: string;
            action: string;
            identify: string;
        }[]
    }[];
    organizations: {

    }[];
    createTime: string;
    updateTime: string;
    userInfos: {

    }[];
}