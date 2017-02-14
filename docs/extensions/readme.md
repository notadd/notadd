# Extension

# 说明

**Extension** 作为 Notadd Framework 的一个特性存在，允许通过 Extension 的方式对 Notadd Framework 进行功能或模板的扩展。
**Extension** 的机制类似于 **Laravel** 中 **Service Provider** 的机制，提供了一种实现组件化的机制，并可以实现传统插件机制中的安装、卸载以及插件启动过程。

## 基本结构

一个完整的 Notadd Extension ，必然是遵循 **Composer** 相关规范的 **Package**。

### 目录结构

**插件**位于目录 **extensions** 下，插件目录结构如下

```
vendor                                                       厂商目录
    extension                                                插件目录
        configuations                                        可加载配置文件目录
        resources                                            资源目录
            translations                                     翻译文件目录
            views                                            视图目录
        src                                                  源码目录
            Extension                                        扩展服务提供者定义文件
        composer.json                                        Composer 配置文件
```

* [Extension](provider.md)
* [Resources](resources.md)
* [Composer](composer.md)

# 其他说明

* **composer.json** 中需定义 **type** 为 **notadd-extension**
* **composer.json** 中需依赖 **package** 为 **notadd/installers**
