<?php

namespace Michaelr0\Buildamic;

use Illuminate\Support\Facades\Blade;
use Michaelr0\Buildamic\Fieldtypes\Buildamic as BuildamicField;
use Michaelr0\Buildamic\Modifiers\Buildamic as BuildamicModifier;
use Statamic\Providers\AddonServiceProvider;
use Illuminate\Support\Str;

class ServiceProvider extends AddonServiceProvider
{
    protected $publishAfterInstall = false;
    protected $disableAssets = true;

    protected $stylesheets = [
        __DIR__.'/../public/css/buildamic.css',
    ];

    protected $scripts = [
        __DIR__.'/../public/js/buildamic.js',
    ];

    protected $fieldtypes = [
        BuildamicField::class,
    ];

    protected $modifiers = [
        BuildamicModifier::class,
    ];

    public function boot()
    {
        parent::boot();

        $this->bootBladeDirectives();
    }

    public function bootBladeDirectives()
    {
        Blade::directive('buildamic', function ($expression) {
            return "<?php echo \Michaelr0\Buildamic\Buildamic::withBlade()->render($expression); ?>";
        });

        Blade::directive('buildamicWithBlade', function ($expression) {
            return "<?php echo \Michaelr0\Buildamic\Buildamic::withBlade()->render($expression); ?>";
        });

        Blade::directive('buildamicWithAntlers', function ($expression) {
            return "<?php echo \Michaelr0\Buildamic\Buildamic::withAntlers()->render($expression); ?>";
        });
    }
}
