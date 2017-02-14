# ModuleServiceProvider

ModuleServiceProvider 是 Module 的模块入口文件，也 Module 的所有功能容器示例注册、路由注入等一系列功能注册及组件启动的服务提供者。

## 完整示例

```php
namespace Notadd\Content;

use Illuminate\Events\Dispatcher;
use Illuminate\Support\ServiceProvider;
use Notadd\Content\Events\RegisterArticleTemplate;
use Notadd\Content\Events\RegisterArticleType;
use Notadd\Content\Events\RegisterCategoryTemplate;
use Notadd\Content\Events\RegisterCategoryType;
use Notadd\Content\Events\RegisterPageTemplate;
use Notadd\Content\Events\RegisterPageType;
use Notadd\Content\Listeners\CsrfTokenRegister;
use Notadd\Content\Listeners\RouteRegister;
use Notadd\Content\Managers\ArticleManager;
use Notadd\Content\Managers\CategoryManager;
use Notadd\Content\Managers\PageManager;

/**
 * Class Module.
 */
class ModuleServiceProvider extends ServiceProvider
{
    /**
     * Boot service provider.
     */
    public function boot()
    {
        $this->app->make(Dispatcher::class)->subscribe(CsrfTokenRegister::class);
        $this->app->make(Dispatcher::class)->subscribe(RouteRegister::class);
        $this->loadMigrationsFrom(realpath(__DIR__ . '/../databases/migrations'));
        $this->loadTranslationsFrom(realpath(__DIR__ . '/../resources/translations'), 'content');
    }

    /**
     * Register services.
     */
    public function register()
    {
        $this->app->alias('article.manager', ArticleManager::class);
        $this->app->alias('category.manager', CategoryManager::class);
        $this->app->alias('page.manager', PageManager::class);
        $this->app->singleton('article.manager', function ($app) {
            $manager = new ArticleManager($app, $app['events']);
            $this->app->make(Dispatcher::class)->fire(new RegisterArticleTemplate($app, $manager));
            $this->app->make(Dispatcher::class)->fire(new RegisterArticleType($app, $manager));

            return $manager;
        });
        $this->app->singleton('category.manager', function ($app) {
            $manager = new CategoryManager($app, $app['events']);
            $this->app->make(Dispatcher::class)->fire(new RegisterCategoryTemplate($app, $manager));
            $this->app->make(Dispatcher::class)->fire(new RegisterCategoryType($app, $manager));

            return $manager;
        });
        $this->app->singleton('page.manager', function ($app) {
            $manager = new PageManager($app, $app['events']);
            $this->app->make(Dispatcher::class)->fire(new RegisterPageTemplate($app, $manager));
            $this->app->make(Dispatcher::class)->fire(new RegisterPageType($app, $manager));

            return $manager;
        });
    }
}
```
