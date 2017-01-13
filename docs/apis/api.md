# API 结构

为了提供一个统一API的实现方式和使用方式，将会做出一系列实现和使用的规范

## 身份验证

API 使用基于令牌的身份验证机制。某些终端不需要身份验证。您可以通过 /api/token 取得一个令牌，主要有两种令牌：

* **密码授权令牌**
* **私人访问令牌**

一般情况，后台管理程序推荐使用密码授权令牌。

## 基本结构

* Notadd 中实现 API 路由的方式，倾向于传统 Laravel 的实现方式，基于 Controller 调用 API Handler 的方式来实现。
* Handler 中使用 toResponse 方法返回 ApiResponse 的实例。
* Handler 主要实现 DataHandler、SetHandler 两种类型的 Handler。
* ApiResponse 为 \Psr\Http\Message\ResponseInterface 契约的一个实现。
* ApiResponse 实例所提供的并返回至前端调用的数据主要包含：code、data、message。

## 所支持的相关API操作

* /oauth/access 验证是否拥有 API 访问 Token
* /oauth/access/authorize
* /oauth/access/token
* /oauth/authorize
* /oauth/clients
* /oauth/refresh