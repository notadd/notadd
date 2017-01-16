# 路由

可编程路由是 **Laravel** 的一大特性，而在 **Notadd** 中，允许以 **Event** 的形式进行扩展。

## 扩展示例

### 第一步：

在 Module 的 ModuleServiceProvider 入口类或 Extension 的 Extension 入口类 中订阅 RouteRegister 事件：

```php
$this->app->make(Dispatcher::class)->subscribe(RouteRegister::class);
```

### 第二步：

在类 RouteRegister 实现 router 定义，示例代码如下：

```php
namespace Notadd\Content\Listeners;

use Notadd\Content\Controllers\Api\Article\ArticleController as ArticleApiController;
use Notadd\Content\Controllers\Api\Article\ArticleTemplateController as ArticleTemplateApiController;
use Notadd\Content\Controllers\Api\Category\CategoryController as CategoryApiController;
use Notadd\Content\Controllers\Api\Category\CategoryTemplateController as CategoryTemplateApiController;
use Notadd\Content\Controllers\Api\Category\CategoryTypeController as CategoryTypeApiController;
use Notadd\Content\Controllers\Api\Page\PageController as PageApiController;
use Notadd\Content\Controllers\Api\Page\PageTemplateController as PageTemplateApiController;
use Notadd\Content\Controllers\Api\Page\PageTypeController as PageTypeApiController;
use Notadd\Content\Controllers\ArticleController;
use Notadd\Content\Controllers\Api\Article\ArticleTypeController as ArticleTypeApiController;
use Notadd\Content\Controllers\CategoryController;
use Notadd\Content\Controllers\PageController;
use Notadd\Foundation\Routing\Abstracts\RouteRegistrar as AbstractRouteRegistrar;

/**
 * Class RouteRegister.
 */
class RouteRegister extends AbstractRouteRegistrar
{
    /**
     * Handle Route Registrar.
     */
    public function handle()
    {
        $this->router->group(['middleware' => ['auth:api', 'web'], 'prefix' => 'api/article'], function () {
            $this->router->resource('template', ArticleTemplateApiController::class);
            $this->router->resource('type', ArticleTypeApiController::class);
            $this->router->resource('/', ArticleApiController::class);
        });
        $this->router->group(['middleware' => ['auth:api', 'web'], 'prefix' => 'api/category'], function () {
            $this->router->resource('template', CategoryTemplateApiController::class);
            $this->router->resource('type', CategoryTypeApiController::class);
            $this->router->resource('/', CategoryApiController::class);
        });
        $this->router->group(['middleware' => ['auth:api', 'web'], 'prefix' => 'api/page'], function () {
            $this->router->resource('template', PageTemplateApiController::class);
            $this->router->resource('type', PageTypeApiController::class);
            $this->router->resource('/', PageApiController::class);
        });
        $this->router->group(['middleware' => 'web', 'prefix' => 'article'], function () {
            $this->router->resource('/', ArticleController::class);
        });
        $this->router->group(['middleware' => 'web', 'prefix' => 'category'], function () {
            $this->router->resource('/', CategoryController::class);
        });
        $this->router->group(['middleware' => 'web', 'prefix' => 'page'], function () {
            $this->router->resource('/', PageController::class);
        });
    }
}
```
