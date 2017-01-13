# 安装

# 需要的扩展

* PHP 必须大于 7.0.0
* 必须安装 PHP 扩展 dom
* 必须安装 PHP 扩展 fileinfo
* 必须安装 PHP 扩展 gd
* 必须安装 PHP 扩展 json
* 必须安装 PHP 扩展 mbstring
* 必须安装 PHP 扩展 openssl
* 使用 Mysql 数据库引擎则必须安装PHP扩展 pdo_mysql
* 使用 Pgsql 数据库引擎则必须安装PHP扩展 pdo_pgsql
* 使用 Sqlite 数据库引擎则必须安装PHP扩展 pdo_sqlite

# 需要的函数

# 编译安装流程

* 下载或克隆仓库：https://github.com/notadd/notadd.git；
* 部署代码，修改 public、storage 目录权限；
* 执行 composer 安装；
* 浏览器访问所绑定域名进行安装，或命令行执行 **php notadd install** 命令进行安装；
* 下载后台插件：https://github.com/notadd/administration.git，上传至目录 extensions ；
* 到目录 **extensions/administration/resources/assets** 执行 **npm install** 命令；
* 到目录 **extensions/administration/resources/assets** 执行 **npm run build** 命令；
* 到网站根目录执行命令 **php notadd vendor:publish --tag=public --force**；
* 访问后台入口 **http://you-domain/admin**。
