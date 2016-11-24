# 安装

# 需要的扩展

* PHP必须大于7.0.0
* 必须安装PHP扩展 dom
* 必须安装PHP扩展 fileinfo
* 必须安装PHP扩展 gd
* 必须安装PHP扩展 json
* 必须安装PHP扩展 mbstring
* 必须安装PHP扩展 openssl
* 使用Mysql数据库引擎则必须安装PHP扩展 pdo_mysql
* 使用Pgsql数据库引擎则必须安装PHP扩展 pdo_pgsql
* 使用Sqlite数据库引擎则必须安装PHP扩展 pdo_sqlite

# 需要的函数

# 编译安装流程

* 下载或克隆仓库：https://github.com/notadd/notadd.git；
* 部署代码，修改public、storage目录权限；
* 执行composer安装；
* 浏览器访问所绑定域名进行安装，或命令行执行php notadd install命令进行安装；
* 下载后台插件：https://github.com/notadd/administration.git，上传至目录extensions；
* 命令行执行php notadd extension:install notadd/administration安装插件；
* 到目录extensions/administration/resources/assets执行npm install命令；
* 到目录extensions/administration/resources/assets执行npm run build命令；
* 到网站根目录执行命令php notadd vendor:publish --tag=public --force；
* 访问后台入口http://绑定的域名/admin。