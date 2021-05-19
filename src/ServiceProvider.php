<?php

namespace Michaelr0\Buildamic;

use Michaelr0\Buildamic\Fieldtypes\Buildamic as BuildamicField;
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

    public function boot()
    {
        if (app()->runningInConsole() || Str::contains(request()->path(), ['entries', 'globals']) && ! Str::contains(request()->path(), 'blueprint') || Str::startsWith(request()->path(), config('statamic.cp.route'))) {
            $this->disableAssets = false;
        }

        if ($this->disableAssets) {
            $this->scripts = [];
            $this->stylesheets = [];
        }

        parent::boot();

        // $this->loadViewsFrom(__DIR__.'/resources/views', 'buildy');

        // BuildyFilters::boot();
        // Shortcodes::boot();
    }
}
