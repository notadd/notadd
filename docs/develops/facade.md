# 门面

在 **Laravel** 中，**Facades** 为应用程序的服务容器中可用的类提供了一个「静态」接口。Laravel 自带了许多的 facades，可以用来访问其几乎所有的服务。Laravel facades 就是服务容器里那些基类的「静态代理」，相比于传统的静态方法调用，facades 在提供更简洁且丰富的语法的同时，还有更好的可测试性和扩展性。

而在 **Notadd** 中，提供在模块或插件对 **Facades** 进行动态注入的方式，实现方式为事件 FacadeRegister (Notadd\Foundation\Facades\FacadeRegister)。

## 扩展示例

### 第一步：

在 **Module** 的 **ModuleServiceProvider** 入口类或 **Extension** 的 **Extension** 入口类 中订阅 RouteRegister 事件：

```php
$this->app->make(Dispatcher::class)->subscribe(FacadeRegister::class);
```

### 第二步：

在类 RouteRegister 实现 router 定义，示例代码如下：

```php
namespace Notadd\Content\Listeners;

use Notadd\Foundation\Event\Abstracts\EventSubscriber;
use Notadd\Foundation\Facades\FacadeRegister as FacadeRegisterEvent;

class FacadeRegister extends EventSubscriber
{
    /**
     * Name of event.
     *
     * @throws \Exception
     * @return string|object
     */
    protected function getEvent()
    {
        return FacadeRegisterEvent::class;
    }

    /**
     * @param $event
     */
    public function handle(FacadeRegisterEvent $event)
    {
        $event->register(__FACADE_NAME__, __ALIAS_TO_CLASS__);
    }
}
```
