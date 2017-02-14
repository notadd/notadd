# Extension

Extension 是 Extension 的模块入口文件，也 Module 的所有功能容器示例注册、路由注入等一系列功能注册及组件启动的服务提供者。

## 完整示例

```php
namespace Notadd\Demo;

use Notadd\Demo\Commands\DemoCommand;
use Notadd\Demo\Listeners\RouteRegister;
use Notadd\Foundation\Extension\Abstracts\Extension as AbstractExtension;

/**
 * Class Extension.
 */
class Extension extends AbstractExtension
{
    /**
     * Register extension handler.
     */
    public function boot()
    {
        $this->events->subscribe(RouteRegister::class);
        $this->commands(DemoCommand::class);
        $this->loadViewsFrom(__DIR__ . '/../resources/views', 'demo');
    }
}
```
