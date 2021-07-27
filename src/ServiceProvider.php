<?php

namespace HandmadeWeb\Buildamic;

use HandmadeWeb\Buildamic\Fieldtypes\Buildamic;
use HandmadeWeb\Buildamic\Fieldtypes\BuildamicColumn;
use HandmadeWeb\Buildamic\Fieldtypes\BuildamicRow;
use HandmadeWeb\Buildamic\Fieldtypes\BuildamicSection;
use Statamic\Providers\AddonServiceProvider;

class ServiceProvider extends AddonServiceProvider
{
    protected $stylesheets = [
        __DIR__.'/../public/css/buildamic.css',
    ];

    protected $scripts = [
        __DIR__.'/../public/js/buildamic.js',
    ];

    protected $fieldtypes = [
        Buildamic::class,
        BuildamicSection::class,
        BuildamicRow::class,
        BuildamicColumn::class,
    ];

    public function boot()
    {
        parent::boot();

        BuildamicFilters::boot();
    }
}
