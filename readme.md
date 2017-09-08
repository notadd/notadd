![notadd](https://www.notadd.com/src/notadd_logo.svg)

[![Build Status](https://travis-ci.org/notadd/notadd.svg?branch=master)](https://travis-ci.org/notadd/notadd)
![Packagist](https://img.shields.io/packagist/v/notadd/notadd.svg)
![Downloads](https://img.shields.io/packagist/dt/notadd/framework.svg)
[![codecov](https://codecov.io/gh/notadd/notadd/branch/master/graph/badge.svg)](https://codecov.io/gh/notadd/notadd)


## Notadd是什么

Notadd 是基于 Laravel 和 Vue 的开源 PHP 框架， 由于其本身的灵活性和先进的技术架构，使得你通过模块（主功能）、插件（功能增强）、拓展（PHP拓展增强）像搭积木一样组合成你想要的，能够快速完成商城、CMS、微信、论坛的开发。 Notadd 像操作系统一样，你可以通过安装「软件」，成为适用于你的「电脑」。

先进的技术方案，使得你无需担心后期功能拓展与迭代问题，大大降低了维护成本。对于一个超过三年生命周期的项目来说，Notadd 最适合不过。

总之，Notadd 是新的技术方向标，能让每个 web 艺术家像构建工程一样构建程序。

## 相关技术

- PHP 7
- Laravel
- Vue
- Composer
- SPA 单页应用

## 特点

- 前后端完全分离
- 前端渲染模板，大大降低后端负载
- 页面无刷新，响应速度快
- 系统模块化，低耦合度
- 支持所有平台

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
