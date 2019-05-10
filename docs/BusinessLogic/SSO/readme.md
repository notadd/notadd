## 单点登录
基于SSO服务，整合现有业务系统入口，实现一次登录，多系统认证。

### 概述

1. 接入应用管理、子系统管理

```sql
CREATE TABLE `auth_access_token` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `access_token` varchar(255) NOT NULL COMMENT 'Access Token',
  `user_id` int(11) NOT NULL COMMENT '关联的用户ID',
  `user_name` varchar(100) DEFAULT NULL COMMENT '用户名',
  `client_id` int(11) NOT NULL COMMENT '接入的客户端ID',
  `expires_in` bigint(11) NOT NULL COMMENT '过期时间戳',
  `grant_type` varchar(50) DEFAULT NULL COMMENT '授权类型，比如：authorization_code',
  `scope` varchar(100) DEFAULT NULL COMMENT '可被访问的用户的权限范围，比如：basic、super',
  `create_user` int(11) DEFAULT NULL COMMENT '创建用户',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_user` int(11) DEFAULT NULL COMMENT '最后更新用户',
  `update_time` datetime DEFAULT NULL COMMENT '最后更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT='Access Token信息表';

CREATE TABLE `auth_client_details` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `client_id` varchar(100) NOT NULL COMMENT '接入的客户端ID',
  `client_name` varchar(100) DEFAULT NULL,
  `client_secret` varchar(255) NOT NULL COMMENT '接入的客户端的密钥',
  `redirect_uri` varchar(1000) NOT NULL COMMENT '回调地址',
  `description` varchar(1000) DEFAULT NULL COMMENT '描述信息',
  `create_user` int(11) DEFAULT NULL COMMENT '创建用户',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_user` int(11) DEFAULT NULL COMMENT '最后更新用户',
  `update_time` datetime DEFAULT NULL COMMENT '最后更新时间',
  `status` int(2) DEFAULT '0' COMMENT '0表示未开通；1表示正常使用；2表示已被禁用',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='接入的客户端信息表';

CREATE TABLE `auth_client_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `auth_client_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `auth_scope_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT='用户对某个接入客户端的授权信息';

CREATE TABLE `auth_refresh_token` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `token_id` int(11) NOT NULL COMMENT '表auth_access_token对应的Access Token记录',
  `refresh_token` varchar(255) NOT NULL COMMENT 'Refresh Token',
  `expires_in` bigint(11) NOT NULL COMMENT '过期时间戳',
  `create_user` int(11) DEFAULT NULL COMMENT '创建用户',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_user` int(11) DEFAULT NULL COMMENT '最后更新用户',
  `update_time` datetime DEFAULT NULL COMMENT '最后更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT='Refresh Token信息表';

CREATE TABLE `auth_scope` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `scope_name` varchar(100) NOT NULL COMMENT '可被访问的用户的权限范围，比如：basic、super',
  `description` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT='可被访问的用户权限表';

CREATE TABLE `func` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `code` varchar(100) DEFAULT NULL,
  `url` varchar(200) DEFAULT NULL,
  `status` int(2) DEFAULT '1' COMMENT '1表示正常使用；2表示已被禁用',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_name` varchar(100) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

CREATE TABLE `role_func` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_id` int(11) NOT NULL,
  `func_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `roleId` (`role_id`),
  CONSTRAINT `roleId` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `sso_access_token` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `access_token` varchar(255) NOT NULL COMMENT 'Access Token',
  `user_id` int(11) NOT NULL COMMENT '关联的用户ID',
  `user_name` varchar(100) DEFAULT NULL COMMENT '用户名',
  `ip` varchar(50) DEFAULT NULL COMMENT '用户来源IP',
  `client_id` int(11) DEFAULT NULL,
  `channel` varchar(50) DEFAULT '' COMMENT '表示这个Token用于什么渠道，比如：官网、APP1、APP2等等',
  `expires_in` bigint(11) NOT NULL COMMENT '过期时间戳',
  `create_user` int(11) DEFAULT NULL COMMENT '创建用户',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_user` int(11) DEFAULT NULL COMMENT '最后更新用户',
  `update_time` datetime DEFAULT NULL COMMENT '最后更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COMMENT='单点登录的Access Token信息表';

CREATE TABLE `sso_client_details` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `client_name` varchar(100) DEFAULT NULL COMMENT '接入单点登录的系统名称',
  `description` varchar(1000) DEFAULT NULL,
  `redirect_url` varchar(255) NOT NULL COMMENT '请求Token的回调URL',
  `logout_url` varchar(255) NOT NULL COMMENT '注销URL',
  `status` int(2) DEFAULT NULL COMMENT '0表示未开通；1表示正常使用；2表示已被禁用',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='单点登录的回调域名的白名单';

CREATE TABLE `sso_refresh_token` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `token_id` int(11) NOT NULL COMMENT '表sso_access_token对应的Access Token记录',
  `refresh_token` varchar(255) NOT NULL COMMENT 'Refresh Token',
  `expires_in` bigint(11) NOT NULL COMMENT '过期时间戳',
  `create_user` int(11) DEFAULT NULL COMMENT '创建用户',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_user` int(11) DEFAULT NULL COMMENT '最后更新用户',
  `update_time` datetime DEFAULT NULL COMMENT '最后更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COMMENT='单点登录的Refresh Token信息表';


CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) DEFAULT NULL,
  `password` varchar(256) DEFAULT NULL,
  `mobile` varchar(30) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `status` int(2) NOT NULL DEFAULT '1' COMMENT '0表示未开通；1表示正常使用；2表示已被禁用',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

CREATE TABLE `user_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `role_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`user_id`),
  CONSTRAINT `userId` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

```

## 数据库设计

1. sso_client
    * client_name
    * redirect_url
    * logout_url
2. sso_access_token
   * access_token
   * user_id
   * client_id
   * expires_in
3. sso_refresh_token
   * refresh_token
   * token_id
   * expires_in

## 接口设计

- [ ] [/token 获取Access Token](./token.md)
- [ ] [/verify 校验Access Token，并返回用户信息](./verify.md)
- [ ] [/refreshToken 通过Refresh Token刷新Access Token接口](./refreshToken.md)
- [ ] [/logout 单点注销接口](./logout.md)
- [ ] [/login 登录接口](./login.md)


## 三步走
第一步: 登录获取Code
第二步：通过code获取access_token
第三步：通过access_token调用接口

```ts
export class Sso {

    // 检查登录
    check(){}

    /**
     * 登录验证（实际登录调用认证服务器）
     * @params 
     * @return 
     */
    login({
        redirectUrl,
        code
    }) { 
        //当前系统登录成功之后的回调URL

        //当前系统请求认证服务器成功之后返回的Token

         //最后重定向的URL


         //1. code为空，则说明当前请求不是认证服务器的回调请求，则重定向URL到认证服务器登录

            //如果存在回调URL，则将这个URL添加到session

            //拼装请求Token的地址

         //2. 验证Token，并返回用户基本信息、所属角色、访问权限等

            //2. 验证Token，并返回用户基本信息、所属角色、访问权限等

            //如果正常返回
                //2.1 将用户信息存到session
                //2.2 将Access Token和Refresh Token写到cookie
        //3. 从session中获取回调URL，并返回
    }

    /**
     * client请求单点登录服务端，获取Access Token，获取完成之后重定向到请求中的回调URL。
     * @params 
     * @return 
     */
    token() { 

        // 过期时间

        // 回调URL

        // 查询接入客户端


        // 获取用户IP

        // 生成Access Token

        // 查询已经插入到数据库的Access Token

        // 生成Refresh Token
    }
    /**
     * client在获取到Access Token后，再次调用单点登录服务端接口，用于“校验Access Token，并返回用户信息”
     * @params 
     * @return 
     */
    verify() { 
        // 获取Access Token

        //过期时间

        //查询Access Token

        //查询Refresh Token

        //查询用户信息

        //组装返回信息
    }

    /**
     * 通过Refresh Token刷新Access Token接口
     * @params 
     * @return 
     */
    refreshToken({
        refresh_token
    }) { 

        //获取Refresh Token


        //获取用户IP

        //过期日期

        //当前日期

        //如果Refresh Token已经失效，则需要重新生成

         //获取存储的Access Token

         //查询接入客户端

         //获取对应的用户信息

         //新的过期时间

         //生成新的Access Token

         //查询用户信息

         //组装返回信息
    }


    /**
     * 注销
     * @params 
     * @return 
     */
    logout() { }

}
```