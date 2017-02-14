# 模块

**模块**是 Notadd 的功能实体，是区别于 **notadd/framework** 来说的，**notadd/framework** 仅是承载 Notadd 体系的逻辑实现，并没有包含功能性代码。

# 目录结构

**模块**位于目录 **modules** 下，每个模块在一个独立的文件夹内，模块内部的目录结构如下：

```
module                                             模块目录
    resources                                      资源目录
        translations                               翻译文件目录
        views                                      视图目录
    src                                            源码目录
        ModuleServiceProvider.php                  模块服务提供者定义文件
    composer.json                                  Composer 配置文件
```

* [Resources](resources.md)
* [Provider](provider.md)
* [Composer](composer.md)
