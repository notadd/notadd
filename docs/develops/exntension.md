# Notadd 推荐的扩展方式

Notadd 是朝着可扩展功能和可扩展组件的方向发展的，但是这和传统的 Laravel 支持的扩展方式有所区别。

## 传统的 Laravel 的扩展方式

* 独立的 routes.php 实现路由的增加和修改
* 构建一个 service package ，通过 Service Provider的方式进行功能扩展和 IOC 容器实例注入

从以上两种方式可以看出，Laravel 具备很强的自扩展能力，但是也存在以下几个弊端：

* 必须修改默认代码，包括 routes 相关配置文件和 configuration 相关配置文件
* 无法彻底修改 Laravel 的功能实现

## Notadd 推荐的扩展方式

以独立的 package 形式存在的 Laravel 扩展包，传承了 composer 包管理的思想，但是没有针对可插拔做出实现，而 Notadd 的存在，正式为了解决这个问题。

* 遵循 composer 包管理规范的 package
* 不需要对源代码做出过多的修改，即可达到 package 的加载
* Module 和 Extension 两个级别的功能扩展级别
