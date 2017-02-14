# Composer

通过对 Composer 的自定义，可以实现 Notadd 风格的目录结构。

## Type

配置 type 属性为 notadd-module，会告诉 Composer Installer 将该 Package 安装到目录 modules 下，而非默认目录 vendor 下。

## Require

添加 notadd/installers 的 Package，才能调整 Composer 对该类型 Package 的默认处理逻辑，实现重定向安装目录的特性。

## 完整示例

```json
{
    "name": "notadd/content",
    "description": "Notadd's Content Module.",
    "keywords": [
        "notadd",
        "cms",
        "framework",
        "content"
    ],
    "homepage": "https://notadd.com",
    "license": "Apache-2.0",
    "type": "notadd-module",
    "authors": [
        {
            "name": "twilroad",
            "email": "269044570@qq.com"
        }
    ],
    "require": {
        "php": ">=7.0",
        "notadd/installers": "0.1.*"
    },
    "autoload": {
        "psr-4": {
            "Notadd\\Content\\": "src/"
        }
    }
}
```
