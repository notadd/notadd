![notadd](https://www.notadd.com/src/notado_logo420x96.svg)

[![Build Status](https://travis-ci.org/notadd/notadd.svg?branch=master)](https://travis-ci.org/notadd/notadd)
![Packagist](https://img.shields.io/packagist/v/notadd/notadd.svg)
![Downloads](https://img.shields.io/packagist/dt/notadd/framework.svg)
[![codecov](https://codecov.io/gh/notadd/notadd/branch/master/graph/badge.svg)](https://codecov.io/gh/notadd/notadd)

### 像搭积木一样快速满足自己的开发需求

### 运用新的技术，从传统的开发中解放出来

### 代码优雅，便于维护和二次开发

### 让 PHP 实现...更多的可能

## 相关技术

- PHP 7
- Laravel
- Vue
- Composer
- SPA 单页应用
- Redis

## 特点

- 前后端完全分离
- 前端渲染模板，大大降低后端负载
- 页面无刷新，响应速度快
- 系统模块化，低耦合度
- 支持所有平台

## 模块化设计


![notadd](https://www.notadd.com/src/app.svg)

企业官网： CMS模块 + Neditor插件、留言板插件

信息发布： CMS模块、用户模块 + CMS多用户插件、Neditor插件

微信商城： 用户模块、商城模块、微信模块 + 微信大转盘、支付插件、线下核验插件

餐饮方案： 用户模块、商城模块、微信模块 + 点餐插件、扫码支付插件、客流监测插件... + 红外传感拓展、WIFI探针拓展

酒店方案： 用户模块、酒店模块、微信模块 + 预定插件、支付插件、智能WIFI插件 + WIFI探针拓展、门卡系统拓展

CRM系统： 用户模块、CRM模块...

更多可畅想的...

## 推荐 CDN 方案
![cdn](https://www.notadd.com/src/cdn.svg)

## 文档

[https://docs.notadd.com/](https://docs.notadd.com/)

## 应用商店（临时）

[https://notadd.store/](https://notadd.store/)


## 系统环境

支持系统：Linux（推荐）/ macOS / Windows 2008 及以上版本

PHP 版本：≥7.0

数据库：PostgreSQL 9.4+（推荐）/ MySQL 5.7+ / SQLite 3.9+

> 此处查看 [环境要求](hhttps://docs.notadd.com/gettingtarted/#环境要求)

## 快速开始

[Nginx/Apache/Caddy Rewrite配置](https://docs.notadd.com/gettingstarted/#nginx-apache-caddy)

### 1. 下载源代码

**滚动更新期间，请勿下载 `master` 分支**

```bash
$ git clone -b 0.7.40  https://github.com/notadd/notadd.git
```

### 2. 修改 public、storage 目录权限

设置为 php-fpm 的用户及用户组(部分一键安装包为 `www:www` )，Windows 请跳过此步

```bash
$ chown -R www-data:www-data notadd
```

或

```bash
$ chmod 755 notadd/public notadd/storage notadd/statics
```

### 3. 安装

```bash
$ cd notadd
$ composer install
$ php notadd vendor:publish --force
```

将域名绑定到 `notadd/public` 目录

访问 `http://yourdomain/`  输入数据库和后台账号相关信息安装

### 4. 成功

访问后台入口 `http://yourdomain/admin`

## 在线安装

（即将推出）

## Docker 安装

```
docker run -p 8080:80 --name notadd notadd/notadd
```

访问 http://localhost:8080

docker 安装相关文档请访问： https://github.com/notadd/docker-notadd

## 使用laradock 安装
参见： https://docs.notadd.com/laradock/

## 贡献

**[贡献代码](https://docs.notadd.com/introductions/#贡献)**

**[捐赠](https://git.oschina.net/notadd/notadd?donate=true)**

## 交流

QQ 群：`321735506`

论坛 ：https://bbs.notadd.com


[![upyun](https://www.notadd.com/src/upyun.svg "又拍云")](https://console.upyun.com/register/?invite=r17EYO3BW) 提供赞助
