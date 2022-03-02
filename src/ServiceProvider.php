<?php

namespace HandmadeWeb\Buildamic;

use Illuminate\Support\Facades\Blade;
use Statamic\Providers\AddonServiceProvider;

class ServiceProvider extends AddonServiceProvider
{
    protected $stylesheets = [
        __DIR__.'/../public/css/buildamic.css',
    ];

    protected $scripts = [
        __DIR__.'/../public/js/buildamic.js',
    ];

    protected $publishables = [
        __DIR__.'/../public/img' => 'img',
    ];

    protected $fieldtypes = [
        \HandmadeWeb\Buildamic\Fieldtypes\Buildamic::class,

        \HandmadeWeb\Buildamic\Fieldtypes\BuildamicSection::class,
        \HandmadeWeb\Buildamic\Fieldtypes\BuildamicGlobalSection::class,

        \HandmadeWeb\Buildamic\Fieldtypes\BuildamicRow::class,
        \HandmadeWeb\Buildamic\Fieldtypes\BuildamicColumn::class,
    ];

    protected $tags = [
        \HandmadeWeb\Buildamic\Tags\BuildamicScripts::class,
        \HandmadeWeb\Buildamic\Tags\BuildamicStyles::class,
    ];

    public function boot()
    {
        parent::boot();

        $this->bootDirectives();

        BuildamicFilters::boot();
    }

    public function bootDirectives()
    {
        Blade::directive('buildamicScripts', function () {
            return '<?php echo BuildamicHelper()->scripts(); ?>';
        });

        Blade::directive('buildamicStyles', function () {
            return '<?php echo BuildamicHelper()->styles(); ?>';
        });
    }
}
