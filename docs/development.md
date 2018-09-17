# 开发者文档

## 编码规范约定

坚持使用本仓库根目录下的 `tslint.json` 文件做项目的编码规范约束

类、变量、属性命名方式参考驼峰命名法，命名时尽可能的提高可读性，class、interface 首字母大写，变量、属性首字母小写。

目录命名规范为其子文件的集合，子级文件命名规范为 **功能.类型.ts**，如：所有controller类，文件目录为controllers，子级文件为 user.controller.ts，对应的类名为 UserController。其余目录、文件参照这种方式。

> 模块骨架示例

```none
src
 |- controllers       -- Rpc控制器目录，子级文件名为 xxx.controller.ts
 |- entities          -- 实体类目录，命名和表名对应，如 User 对应 user 表，子级文件名为 xxx.entity.ts
 |- interfaces        -- 接口定义目录，子级文件名为 xxx.interface.ts
 |- protobufs         -- protobuf 文件目录，子级文件名为 xxx.proto
 |- services          -- 业务逻辑实现目录，子级文件名为 xxx.service.ts
 |- utils             -- 工具类目录，子级文件名为 xxx.util.ts
xxx.module.ts         -- 模块根程序
main.ts               -- 模块启动程序
```

> 插件骨架示例

```none
src
 |- services          -- 业务逻辑实现目录，子级文件名为 xxx.service.ts
 |- interfaces        -- 接口定义目录，子级文件名为 xxx.interface.ts
 |- utils             -- 工具类目录，子级文件名为 xxx.util.ts
xxx.addon.ts          -- 插件根程序
index.ts              -- 插件导出文件
```

## 模块开发

在 `Notadd` 中，每一个模块都是一个独立的微服务，且只有模块才可以操作数据库，模块间使用 `rpc` 进行通信。

模块中的业务只可被 `Notadd` 主程序进行调用，`Notadd` 主程序充当 API 层，对外提供 GraphQL 接口

### Step 1

定义 `proto` 文件，即 `rpc` 传输消息协议，如：

> root.proto

```protobuf
syntax = "proto3";

package notadd_rpc_demo;

service RootService {
    rpc SayHello (SayHelloRequest) returns (SayHelloResponse) { }
}

message SayHelloRequest {
    string name = 1;
}

message SayHelloResponse {
    string msg = 1;
}
```

### Step 2

根据 `proto` 文件中定义的服务及方法，在 `service` 层实现其业务逻辑，如：

> root.service.ts

```typescript
import { Injectable } from '@nestjs/common';

@Injectable()
export class RootService {
    async sayHello(name: string) {
        return `Hello ${name}!`;
    }
}
```

### Step 3

根据 `proto` 文件中定义的rpc服务、rpc方法，在 `controller` 层实现 rpc 控制器的逻辑

控制器类注解使用 `@Controller()`

控制器方法注解使用 `@GrpcMethod()`，该注解中有一个参数，其值是rpc服务的名称字符串，控制器中的方法名与rpc方法名要一致(控制器方法名首字母必须小写)。如：

> root.controller.ts

```typescript
import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

import { RootService } from '../services/root.service';

@Controller()
export class RootController {
    constructor(
        @Inject(RootService) private readonly rootService: RootService
    ) { }

    @GrpcMethod('RootService')
    async sayHello(data: { name: string }) {
        return this.rootService.sayHello(data.name);
    }
}
```

### Step 4

编写模块根程序，如：

> app.module.ts

```typescript
import { Module } from '@nestjs/common';

import { RootController } from './controllers/root.controller';
import { RootService } from './services/root.service';

@Module({
    controllers: [RootController],
    providers: [RootService]
})
export class AppModule { }
```

### Step 5

编写模块启动程序，如：

```typescript
import { Transport } from '@nestjs/common/enums/transport.enum';
import { NestFactory } from '@nestjs/core';
import { join } from 'path';

import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.createMicroservice(AppModule, {
        transport: Transport.GRPC,
        options: {
            url: 'localhost:50050',
            package: 'notadd_rpc_demo',
            protoPath: join(__dirname, './protobufs/root.proto')
        }
    });
    await app.listenAsync();
}

bootstrap();
```

### Step 6

启动模块： `yarn start`

## 插件开发

在 `Notadd` 中，插件是为了给模块提供可复用的业务逻辑，原则上，插件不可操作数据库，只向模块提供方法级别的调用。