<p align="center"><img src="https://www.notadd.com/src/notado_logo420x96.svg" alt="Notadd Logo."></p>

# 概述

[English document](./README.md)

Notadd 是一个开源的、基于 Nest.js 框架的微服务开发架构，您可以根据不同的业务需求使用适合的模块、插件来搭建一个微服务系统。Notadd 官方提供了抽象化的公共服务层，在服务层内，每一个模块都提供了 Grpc 接口供 Notadd 主程序进行调用。比如一个 CMS 系统，您可以使用官方提供的 `nt-module-cms` 和 `nt-module-user` 模块作为基础服务层，然后依据服务层定义的 `protobuf` 消息协议，使用 Notadd 主程序编写您的 API 层代码。

# 特性

- **【微服务】** 支持单机部署和微服务化
- **【高性能】** 异步高性能应用，单机并发轻松上万
- **【易维护】** 使用 Typescript 开发，智能化的代码提示和编译时的代码检查机制
- **【可插拔】** 模块化开发系统，依据业务需求，选择合适的模块，进行 API 层的搭建

## 相关技术

- Typescript
- Nest.js
- GraphQL API
- Grpc
- Redis

# 系统架构

![notadd-arch-cn](https://www.notadd.com/src/notadd-arch-cn.svg)

## 模块化设计

企业官网： CMS模块 + Neditor插件、留言板插件

信息发布： CMS模块、用户模块 + CMS多用户插件、Neditor插件

微信商城： 用户模块、商城模块、微信模块 + 微信大转盘、支付插件、线下核验插件

餐饮方案： 用户模块、商城模块、微信模块 + 点餐插件、扫码支付插件、客流监测插件... + 红外传感拓展、WIFI探针拓展

酒店方案： 用户模块、酒店模块、微信模块 + 预定插件、支付插件、智能WIFI插件 + WIFI探针拓展、门卡系统拓展

CRM系统： 用户模块、CRM模块...

更多可畅想的...

# 快速开始

1. 克隆 Rpc 示例服务 [nt-rpc-demo](https://github.com/notadd/nt-rpc-demo)
2. 克隆用户服务到本地 [nt-module-user](https://github.com/notadd/nt-module-user)
3. 根据 `nt-rpc-demo`、`nt-module-user` 使用说明，启动微服务
4. 克隆此项目到本地
5. 安装依赖 `yarn install`
6. 启动 `yarn start`
7. 打开浏览器，访问 `localhost:5000/graphql`
8. 测试接口

> 注意：Notadd 主程序现阶段提供的是演示代码，不排除后期移除所有 graphql api 代码。

## 贡献

欢迎使用 Pull requests。对于重大变更，请先提出 Issue，和我们一起来讨论你想改变的内容。

> 感谢你考虑为 Notadd 作出贡献！具体贡献指南可以在 [Notadd 文档-贡献](https://docs.notadd.com/#/v2/?id=%e8%b4%a1%e7%8c%ae) 中查看。

## 交流

1群(后端)：322247106

论坛 ：https://bbs.notadd.com

博客 ：https://blog.notadd.com

## 优秀仓库推荐

- [Swoft](https://github.com/swoft-cloud/swoft) 首个基于 Swoole 原生协程，新时代PHP协程框架。
- [Neditor](https://github.com/notadd/neditor) 基于 ueditor 的现代化编辑器。
- [Plus(ThinkSNS+)](https://github.com/slimkit/thinksns-plus) 使用 Laravel 框架开发；一个功能强大、易于开发和动态拓展的社交系统。

## 感谢

感谢所有赞助商！

### 贡献者

感谢所有已经为notadd做出贡献的人！
<a href="https://github.com/notadd/notadd/graphs/contributors"><img src="https://opencollective.com/notadd/contributors.svg?width=890&button=false" /></a>

### 支持者

感谢所有的支持者！ [成为支持者](https://opencollective.com/notadd#backer)

<a href="https://opencollective.com/notadd#backers" target="_blank"><img src="https://opencollective.com/notadd/backers.svg?width=890"></a>

## 赞助者

我们要感谢以下赞助商，资助我们 Notadd 的开发。如果你有兴趣成为赞助商，请访问 Notadd 的[码云页面](https://gitee.com/notadd/notadd?donate=true)：

- [西安 · 本初网络](https://www.ibenchu.com)
- [杭州 · 又拍云](https://www.upyun.com)
- [西安 · 马达信息](#)

（请您的公司通过[成为赞助商](https://opencollective.com/notadd#sponsor)来支持这个开源项目）

[![upyun](https://www.notadd.com/src/upyun.svg "又拍云")](https://console.upyun.com/register/?invite=r17EYO3BW)

<a href="https://opencollective.com/notadd/sponsor/0/website" target="_blank"><img src="https://opencollective.com/notadd/sponsor/0/avatar.svg"></a>
<a href="https://opencollective.com/notadd/sponsor/1/website" target="_blank"><img src="https://opencollective.com/notadd/sponsor/1/avatar.svg"></a>
<a href="https://opencollective.com/notadd/sponsor/2/website" target="_blank"><img src="https://opencollective.com/notadd/sponsor/2/avatar.svg"></a>
<a href="https://opencollective.com/notadd/sponsor/3/website" target="_blank"><img src="https://opencollective.com/notadd/sponsor/3/avatar.svg"></a>
<a href="https://opencollective.com/notadd/sponsor/4/website" target="_blank"><img src="https://opencollective.com/notadd/sponsor/4/avatar.svg"></a>
<a href="https://opencollective.com/notadd/sponsor/5/website" target="_blank"><img src="https://opencollective.com/notadd/sponsor/5/avatar.svg"></a>
<a href="https://opencollective.com/notadd/sponsor/6/website" target="_blank"><img src="https://opencollective.com/notadd/sponsor/6/avatar.svg"></a>
<a href="https://opencollective.com/notadd/sponsor/7/website" target="_blank"><img src="https://opencollective.com/notadd/sponsor/7/avatar.svg"></a>
<a href="https://opencollective.com/notadd/sponsor/8/website" target="_blank"><img src="https://opencollective.com/notadd/sponsor/8/avatar.svg"></a>
<a href="https://opencollective.com/notadd/sponsor/9/website" target="_blank"><img src="https://opencollective.com/notadd/sponsor/9/avatar.svg"></a>

## 开源协议

Notadd 代码遵循 Apache 2.0 许可证发布，请参阅完整的 [许可证文本](LICENSE)

----------

# TODO

- [x] 国际化(i18n)支持
- [ ] 通用服务 cms pay config storage、log 等
- [ ] 服务治理，熔断，降级，负载，注册与发现
- [ ] 支持 PWA 技术，实现断网提醒，断网表单保存，网页离线消息推送。
