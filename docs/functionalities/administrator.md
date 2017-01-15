# Administrator

Administrator 作为唯一的网站管理实例，有着控制管理入口、分配管理职责等功能。

Notadd 的实现方式：

## 类 Administration

```php
namespace Notadd\Foundation\Administration;

use Illuminate\Container\Container;
use Illuminate\Events\Dispatcher;
use InvalidArgumentException;
use Notadd\Foundation\Administration\Abstracts\Administrator;

/**
 * Class Administration.
 */
class Administration
{
    /**
     * @var \Notadd\Foundation\Administration\Abstracts\Administrator
     */
    protected $administrator;

    /**
     * @var \Illuminate\Container\Container
     */
    protected $container;

    /**
     * @var \Illuminate\Events\Dispatcher
     */
    protected $events;

    /**
     * Administration constructor.
     *
     * @param \Illuminate\Container\Container $container
     * @param \Illuminate\Events\Dispatcher   $events
     */
    public function __construct(Container $container, Dispatcher $events)
    {
        $this->container = $container;
        $this->events = $events;
    }

    /**
     * Get administrator.
     *
     * @return \Notadd\Foundation\Administration\Abstracts\Administrator
     */
    public function getAdministrator()
    {
        return $this->administrator;
    }

    /**
     * Status of administrator's instance.
     *
     * @return bool
     */
    public function hasAdministrator()
    {
        return is_null($this->administrator) ? false : true;
    }

    /**
     * Set administrator instance.
     *
     * @param \Notadd\Foundation\Administration\Abstracts\Administrator $administrator
     *
     * @throws \InvalidArgumentException
     */
    public function setAdministrator(Administrator $administrator)
    {
        if (is_object($this->administrator)) {
            throw new InvalidArgumentException('Administrator has been Registered!');
        }
        if ($administrator instanceof Administrator) {
            $this->administrator = $administrator;
            $this->administrator->init();
        } else {
            throw new InvalidArgumentException('Administrator must be instanceof ' . Administrator::class . '!');
        }
    }
}
```

## 抽象类 Administrator

```php
namespace Notadd\Foundation\Administration\Abstracts;

use Illuminate\Events\Dispatcher;
use Illuminate\Routing\Router;
use InvalidArgumentException;

/**
 * Class Administrator.
 */
abstract class Administrator
{
    /**
     * @var \Illuminate\Events\Dispatcher
     */
    protected $events;

    /**
     * @var mixed
     */
    protected $handler;

    /**
     * @var string
     */
    protected $path;

    /**
     * @var \Illuminate\Routing\Router
     */
    protected $router;

    /**
     * Administrator constructor.
     *
     * @param \Illuminate\Events\Dispatcher $events
     * @param \Illuminate\Routing\Router    $router
     */
    public function __construct(Dispatcher $events, Router $router)
    {
        $this->events = $events;
        $this->router = $router;
    }

    /**
     * Get administration handler.
     *
     * @return mixed
     */
    public function getHandler()
    {
        return $this->handler;
    }

    /**
     * Administration route path.
     *
     * @return string
     */
    public function getPath()
    {
        return $this->path;
    }

    /**
     * Init administrator.
     *
     * @throws \InvalidArgumentException
     */
    final public function init()
    {
        if (is_null($this->path) || is_null($this->handler)) {
            throw new InvalidArgumentException('Handler or Path must be Setted!');
        }
        $this->router->group(['middleware' => 'web'], function () {
            $this->router->get($this->path, $this->handler);
        });
    }

    /**
     * Register administration handler.
     *
     * @param $handler
     */
    public function registerHandler($handler)
    {
        $this->handler = $handler;
    }

    /**
     * Register administration route path.
     *
     * @param string $path
     */
    public function registerPath($path)
    {
        $this->path = $path;
    }
}
```

## IOC 实例注册方式

```php
namespace Notadd\Administration;

use Illuminate\Support\ServiceProvider;
use Notadd\Administration\Controllers\AdminController;
use Notadd\Foundation\Administration\Administration;

/**
 * Class Extension.
 */
class ModuleServiceProvider extends ServiceProvider
{
    /**
     * Boot service provider.
     *
     * @param \Notadd\Foundation\Administration\Administration $administration
     */
    public function boot(Administration $administration)
    {
        $administrator = new Administrator($this->app['events'], $this->app['router']);
        $administrator->registerPath('admin');
        $administrator->registerHandler(AdminController::class . '@handle');
        $administration->setAdministrator($administrator);
    }
}
```
