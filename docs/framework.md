# 框架结构介绍

* common    -- nestjs 框架公共模块，提供基础接口、基础抽象类、异常定义、注解定义、枚举定义；通用拦截器、中间件、过滤器等
* core      -- notadd 核心模块，用做应用程序的全局拦截器、中间件、过滤器等的配置和实现，injector 用于将自定义注解的类注入到 nest 容器中
* microservice 微服务相关
* testing 测试工具