# API Handler 示例

```php
namespace Notadd\Foundation\Setting\Controllers;

use Notadd\Foundation\Routing\Abstracts\Controller;
use Notadd\Foundation\Setting\Contracts\SettingsRepository;
use Notadd\Foundation\Setting\Handlers\AllHandler;
use Notadd\Foundation\Setting\Handlers\SetHandler;

/**
 * Class ApiController.
 */
class SettingController extends Controller
{
    /**
     * @var \Notadd\Foundation\Setting\Contracts\SettingsRepository
     */
    protected $settings;

    /**
     * SettingController constructor.
     *
     * @param \Notadd\Foundation\Setting\Contracts\SettingsRepository $settings
     *
     * @throws \Illuminate\Contracts\Container\BindingResolutionException
     */
    public function __construct(SettingsRepository $settings)
    {
        parent::__construct();
        $this->settings = $settings;
    }

    /**
     * TODO: Method  Description
     *
     * @param \Notadd\Foundation\Setting\Handlers\AllHandler $handler
     *
     * @return \Notadd\Foundation\Passport\Responses\ApiResponse
     * @throws \Exception
     */
    public function all(AllHandler $handler)
    {
        $response = $handler->toResponse();

        return $response->generateHttpResponse();
    }

    /**
     * @param \Notadd\Foundation\Setting\Handlers\SetHandler $handler
     *
     * @return \Notadd\Foundation\Passport\Responses\ApiResponse
     * @throws \Exception
     */
    public function set(SetHandler $handler)
    {
        $response = $handler->toResponse();

        return $response->generateHttpResponse();
    }
}
```

```php
namespace Notadd\Foundation\Setting\Handlers;

use Illuminate\Container\Container;
use Illuminate\Http\Request;
use Illuminate\Translation\Translator;
use Notadd\Foundation\Passport\Abstracts\DataHandler;
use Notadd\Foundation\Setting\Contracts\SettingsRepository;

/**
 * Class SettingHandler.
 */
class AllHandler extends DataHandler
{
    /**
     * @var \Notadd\Foundation\Setting\Contracts\SettingsRepository
     */
    protected $settings;

    /**
     * AllHandler constructor.
     *
     * @param \Illuminate\Container\Container                         $container
     * @param \Illuminate\Http\Request                                $request
     * @param \Notadd\Foundation\Setting\Contracts\SettingsRepository $settings
     * @param \Illuminate\Translation\Translator                      $translator
     */
    public function __construct(
        Container $container,
        Request $request,
        SettingsRepository $settings,
        Translator $translator
    ) {
        parent::__construct($container, $request, $translator);
        $this->settings = $settings;
    }

    /**
     * Http code.
     *
     * @return int
     */
    public function code()
    {
        return 200;
    }

    /**
     * Data for handler.
     *
     * @return array
     */
    public function data()
    {
        return $this->settings->all()->toArray();
    }

    /**
     * Errors for handler.
     *
     * @return array
     */
    public function errors()
    {
        return [
            '获取全局设置失败！',
        ];
    }

    /**
     * Messages for handler.
     *
     * @return array
     */
    public function messages()
    {
        return [
            '获取全局设置成功！',
        ];
    }
}
```

```php
namespace Notadd\Foundation\Setting\Handlers;

use Illuminate\Container\Container;
use Illuminate\Http\Request;
use Illuminate\Translation\Translator;
use Notadd\Foundation\Passport\Abstracts\SetHandler as AbstractSetHandler;
use Notadd\Foundation\Setting\Contracts\SettingsRepository;

/**
 * Class SetHandler.
 */
class SetHandler extends AbstractSetHandler
{
    /**
     * @var \Notadd\Foundation\Setting\Contracts\SettingsRepository
     */
    protected $settings;

    /**
     * SetHandler constructor.
     *
     * @param \Illuminate\Container\Container $container
     * @param \Illuminate\Http\Request $request
     * @param \Notadd\Foundation\Setting\Contracts\SettingsRepository $settings
     * @param \Illuminate\Translation\Translator $translator
     */
    public function __construct(
        Container $container,
        Request $request,
        SettingsRepository $settings,
        Translator $translator
    ) {
        parent::__construct($container, $request, $translator);
        $this->settings = $settings;
    }

    /**
     * Data for handler.
     *
     * @return array
     */
    public function data()
    {
        return $this->settings->all()->toArray();
    }

    /**
     * Errors for handler.
     *
     * @return array
     */
    public function errors()
    {
        return [
            '修改设置失败！',
        ];
    }

    /**
     * Execute Handler.
     *
     * @return bool
     */
    public function execute()
    {
        $this->settings->set('site.enabled', $this->request->input('enabled'));
        $this->settings->set('site.name', $this->request->input('name'));
        $this->settings->set('site.domain', $this->request->input('domain'));
        $this->settings->set('site.beian', $this->request->input('beian'));
        $this->settings->set('site.company', $this->request->input('company'));
        $this->settings->set('site.copyright', $this->request->input('copyright'));
        $this->settings->set('site.statistics', $this->request->input('statistics'));

        return true;
    }

    /**
     * Messages for handler.
     *
     * @return array
     */
    public function messages()
    {
        return [
            '修改设置成功!',
        ];
    }
}
```
