# 开发规范约定

## 模块、插件开发规范

类、变量、属性命名方式参考驼峰命名法，命名时尽可能的提高可读性，class、interface 首字母大写，变量、属性首字母小写。

目录命名规范为其子文件的集合，子级文件命名规范为 **功能.类型.ts**，如：所有controller类，文件目录为controllers，子级文件为 user.controller.ts，对应的类名为 UserController。其余目录、文件参照这种方式。

* controllers，控制器目录，子级文件名为 xxx.controller.ts
* resolvers，GraphQL的resolver目录，子级文件名为 xxx.resolver.ts
* graphqls，graphql文件目录，子级文件名为 xxx.graphql
* services，业务逻辑实现目录，子级文件名为 xxx.service.ts
* interfaces，接口定义目录，子级文件名为 xxx.interface.ts
* entities，实体类目录，命名和表名对应，如 User 对应 user 表，子级文件名为 xxx.entity.ts

备注：如开发过程中出现上述约定不能满足，请告知规范制定者：dzzzzzy (624382709@qq.com)