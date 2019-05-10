## 装饰器设计

```ts
export class NgerController{
    @Permission({
        permission_id: number;
        system_id: number;
        pid: number;
        name: string;
        type: number;
        permission_value: string;
        uri: string;
        icon: string;
        status: 0 | 1;
        ctime: number;
        orders: number;
    })
    addUser(){}
}
```