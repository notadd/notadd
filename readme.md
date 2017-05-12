![notadd](https://www.notadd.com/src/notadd_logo.svg)

[![codecov](https://codecov.io/gh/notadd/notadd/branch/master/graph/badge.svg)](https://codecov.io/gh/notadd/notadd)
[![Build Status](https://travis-ci.org/notadd/notadd.svg?branch=master)](https://travis-ci.org/notadd/notadd)

## Notadd是什么 

Notadd 是基于 Laravel 和 Vue 的开源 PHP 框架， 由于其本身的灵活性和先进的技术架构，使得你通过模块（主功能）、插件（功能增强）、模板（前端样式）像搭积木一样组合成你想要的，能够快速完成商城、CMS、微信、论坛的开发。
Notadd 像操作系统一样，你可以通过安装「软件」，成为适用于你的「电脑」。

先进的技术方案，使得你无需担心后期功能拓展与迭代问题，大大降低了维护成本。对于一个超过三年生命周期的项目来说，Notadd 最适合不过。

总之，Notadd 是新的技术方向标，能让每个 web 艺术家像构建工程一样构建程序。

## 相关技术

- PHP 7
- Laravel
- Vue
- Composer

## 特点

- 前后端完全分离
- 前端渲染模板，大大降低后端负载
- 页面无刷新，响应速度快
- 系统模块化，低耦合度
- 支持所有平台

## 文档

[https://docs.notadd.com/](https://docs.notadd.com/)

## 系统环境

支持系统：Linux（推荐）/ macOS / Windows 2008 及以上版本

PHP 版本：≥7.0

数据库：PostgreSQL（推荐）/ MariaDB / MySQL / SQLite 3


> 此处查看 [安装需要的环境依赖](https://docs.notadd.com/#/v1.0/zh-CN/installations/first)

## 快速开始

### 1. 下载源代码

```bash
$ git clone https://github.com/notadd/notadd.git
```

### 2. 修改 public、storage 目录权限

设置为 php-fpm 的用户及用户组(部分一键安装包为 `www:www` )，Windows 请跳过此步

```bash
$ chown -R www-data:www-data notadd
```

或

```bash
$ chmod 755 notadd/public notadd/storage
```

### 3. 安装

```bash
$ cd notadd
$ composer install
$ php notadd vendor:publish --force
```

将域名绑定到 `notadd/public` 目录


访问后台入口 `http://yourdomain/admin`

## 使用完整包安装

[下载完整包安装](https://docs.notadd.com/#/v1.0/zh-CN/installations/vps)

## 贡献

**[贡献代码](https://docs.notadd.com/introductions/contributing.html)**

**[捐赠](https://git.oschina.net/notadd/notadd?donate=true)**

QQ 群：321735506

