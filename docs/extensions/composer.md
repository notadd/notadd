# Composer

通过对 Composer 的自定义，可以实现 Composer 自动加载 Extension 定义的依赖项。

## Type

配置 type 属性为 notadd-extension。

## Require

添加 notadd/installers 的 Package，才能实现 Composer 自动加载 Extension 定义的依赖项。

## 完整示例

```json
{
    "name": "notadd/extension-demo",
    "description": "Notadd's Demo Extension.",
    "type": "notadd-extension",
    "keywords": ["notadd", "demo", "extension"],
    "homepage": "https://notadd.com",
    "license": "Apache-2.0",
    "authors": [
        {
            "name": "twilroad",
            "email": "269044570@qq.com"
        }
    ],
    "autoload": {
        "psr-4": {
            "Notadd\\Demo\\": "src/"
        }
    },
    "require": {
        "php": ">=7.0",
        "notadd/installers": "0.1.*"
    }
}
```
