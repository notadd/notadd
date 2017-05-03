![notadd](https://www.notadd.com/src/notadd_logo.svg)

## Notadd是什么

Notadd 是基于 Laravel 和 Vue 的开源PHP框架， 由于其本身的灵活性和先进的技术架构，使得你通过模块（主功能）、插件（功能增强）、模板（前端样式）像搭积木一样组合成你想要的，诸如：商城、CMS、微信、论坛...  快速完成开发。
Notadd 像操作系统一样，你可以通过安装“软件”，成为适用于你的“电脑”。

先进的技术方案，使得你无需担心后期功能拓展与迭代问题，大大降低了维护成本。对于一个超过三年生命周期的项目来说，Notadd 最适合不过。

总之，Notadd 是新的技术方向标，能让每个web艺术家像构建工程一样构建程序。

## 相关技术

- PHP7
- Laravel
- VueJS 单页面 Web 应用
- Composer

## 特点

- 前后端完全分离
- 前端渲染模板，大大降低后端负载
- 页面无刷新，响应速度快
- 低耦合度，可“搭积木”
- 同时支持所有平台（PC / 平板 / 手机 / APP / 硬件）

## 文档

https://docs.notadd.com/

官方交流 QQ 群：321735506

## 系统环境

操作系统：Linux（推荐）/ macOS / Windows 2008+

PHP版本：7.0+

数据库：PostgreSQL（推荐）/ MariaDB / MySQL / SQLite 3


**[系统需要安装的拓展](https://docs.notadd.com/installations/first.html)**

## 快速开始

1. 下载或克隆仓库：

`git clone https://github.com/notadd/notadd.git`

2. 部署代码，修改 public、storage 目录权限；

`chown -R www-data:www-data notadd`

or

`chmod 755 notadd/public notadd/storage`

3. 执行 安装；    
 
```
cd notadd

composer install

php notadd vendor:publish --force
```

4. 绑定域名到 notadd/public 目录


5. 访问后台入口 http://yourdomain/admin


 
**！！！什么？你一个都看不懂，请直接 [下载完整包安装](https://docs.notadd.com/#/v1.0/zh-CN/installations/vps)** 

 




## 贡献

**[贡献代码](https://docs.notadd.com/introductions/contributing.html)**

**[捐赠](https://git.oschina.net/notadd/notadd?donate=true)**


