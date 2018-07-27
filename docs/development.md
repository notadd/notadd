# 开发规范约定

## 编码规范约定

坚持使用本仓库根目录下的 `tslint.json` 文件做项目的编码规范约束

## 项目骨架命名约定

源码根目录：`src`

公共模块目录：`common`，是 `src` 的直接子级目录

项目配置文件目录：`configurations`，是 `src` 的直接子级目录

特性模块目录：`特性名复数单词`，如 `articals`，是 `src` 的直接子级目录

## 模块、插件开发规范约定

类、变量、属性命名方式参考驼峰命名法，命名时尽可能的提高可读性，class、interface 首字母大写，变量、属性首字母小写。

目录命名规范为其子文件的集合，子级文件命名规范为 **功能.类型.ts**，如：所有controller类，文件目录为controllers，子级文件为 user.controller.ts，对应的类名为 UserController。其余目录、文件参照这种方式。

* controllers       -- 控制器目录，子级文件名为 xxx.controller.ts
* resolvers         -- GraphQL的resolver目录，子级文件名为 xxx.resolver.ts
* graphqls          -- graphql文件目录，子级文件名为 xxx.types.graphql
* services          -- 业务逻辑实现目录，子级文件名为 xxx.service.ts
* interfaces        -- 接口定义目录，子级文件名为 xxx.interface.ts
* entities          -- 实体类目录，命名和表名对应，如 User 对应 user 表，子级文件名为 xxx.entity.ts

## 例子

```none
src
  - common
    common.module.ts
  - configurations
    application.config.ts
    index.ts    // 用于导出所有配置文件
  - articals
    - controllers
      artical.controller.ts
    - resolvers
      artical.resolver.ts
    - graphqls
      artical.types.graphql
    - services
      artical.service.ts
    - interfaces
      artical.interface.ts
    - entities
      artical.entity.ts
    artical.module.ts
  app.controller.ts
  app.module.ts   // 应用程序主模块，用于导入其他子模块
  app.resolver.ts
  app.service.ts
  app.types.graphql
  main.ts   // 主程序入库
```

备注：如开发过程中出现上述约定不能满足，请告知规范制定者：dzzzzzy (624382709@qq.com)