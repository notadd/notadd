<p align="center"><img src="https://www.notadd.com/src/notado_logo420x96.svg" alt="Notadd Logo."></p>

# Overview

[中文文档](./README_zh.md)

Notadd is an open source, Nest.js framework-based microservice development architecture that allows you to build a microservices system using the right modules and addons for different business needs. Notadd officially provides an abstract public service layer. Within the service layer, each module provides the Grpc interface for the Notadd main program to call. For example, a CMS system, you can use the officially provided `nt-module-cms` and `nt-module-user` modules as the underlying service layer. Then use the Notadd main program to write your API layer code according to the `protobuf` message protocol defined by the service layer.

# Features

- **[Microservice]** Supports stand-alone deployment and microservice
- **[High Performance]** Asynchronous high-performance applications, tens of thousands of concurrent
- **[Easy to maintain]** Developed with Typescript, intelligent code hints and compile-time code checking mechanisms
- **[Pluggable]** modular development system, according to business needs, select the appropriate module, build the API layer

## Technology stack

- Typescript
- Nest.js
- GraphQL
- TypeORM
- Grpc
- Redis

# System Architecture

![notadd-arch](https://www.notadd.com/src/notadd-arch.svg)

## Modular design

Enterprise Official Website: CMS module + neditor plug-in, message board plugin

Information release: CMS module, user module + CMS multi-user plugin, Neditor plugin

WeChat Mall: User module, Mall module, WeChat module + WeChat big turntable, payment plug-in, offline verification plug-in

Dining plan: User module, Mall module, WeChat module + ordering plugin, scan code payment plug-in, passenger flow monitoring plug-in ... + infrared sensor development, WiFi probe expansion

Hotel Program: User module, Hotel module, WeChat module + booking plugin, payment plug-in, smart WiFi plugin + WiFi probe expansion, door card system expansion

CRM system: User module, CRM module ...

More to imagine ...

# Quick Start

1. Clone Rpc sample service to the local [nt-rpc-demo](https://github.com/notadd/nt-rpc-demo)
2. Clone the user service to the local [nt-module-user](https://github.com/notadd/nt-module-user)
3. Start the microservice according to the instructions of `nt-rpc-demo` and `nt-module-user`
4. Clone this project to your local
5. Installation depends on `yarn install`
6. Start `yarn start`
7. Open a browser and go to `localhost:5000/graphql`
8. Test GraphQL API

# Contribution

Welcome to Pull requests. For major changes, please file a Issue and discuss with us what you want to change.

## Contributors

Thanks to all those who have contributed to notadd!
<a href="https://github.com/notadd/notadd/graphs/contributors"><img src="https://opencollective.com/notadd/contributors.svg?width=890&button=false" /></a>

### Communication

Tencent QQ Group：322247106

Forum: Under construction

Blog: Under construction

### Excellent Repositories

- [Swoft](https://github.com/swoft-cloud/swoft) Modern High performance AOP and Coroutine PHP Framework, base on Swoole 2
- [ThinkSNS Plus](https://github.com/slimkit/thinksns-plus) Use of Laravel framework to achieve the user ecosystem.
- [Neditor](https://github.com/notadd/neditor) A modern editor based on the Ueditor.

## Sponsor

We would like to thank the following sponsors for funding the development of our Notadd. If you are interested in becoming a sponsor, please visit Notadd's [Gitee Page](https://gitee.com/notadd/notadd?donate=true):

- [China Xian · Benchu Network](https://www.ibenchu.com)
- [China Hanzhou · upyun](https://www.upyun.com)
- China Xian · Mada Network

(Please ask your company to support this open source project by [becoming a sponsor](https://opencollective.com/notadd#sponsor))

[![upyun](https://www.notadd.com/src/upyun.svg "又拍云")](https://console.upyun.com/register/?invite=r17EYO3BW)

## Backer

Thank you to all our backers! [Become a backer](https://opencollective.com/notadd#backer)

<a href="https://opencollective.com/notadd#backers" target="_blank"><img src="https://opencollective.com/notadd/backers.svg?width=890"></a>

# License

The Notadd is open-sourced software licensed under the [Apache 2.0 license](LICENSE).

----------

# TODO

- [x] Internationalization (i18n) support
- [ ] Public services such as cms pay config storage, logger, etc.
- [ ] Service governance, fuse, downgrade, load, registration and discovery
- [ ] Support PWA technology, implement off-screen reminders, web-off form saving, webpage offline message push
