<?php

namespace Michaelr0\Buildamic;

use Illuminate\Support\Facades\Blade;
use Illuminate\Support\Str;
use Michaelr0\Buildamic\Fieldtypes\Altamic;
use Michaelr0\Buildamic\Fieldtypes\AltamicColumn;
use Michaelr0\Buildamic\Fieldtypes\AltamicRow;
use Michaelr0\Buildamic\Fieldtypes\AltamicSection;
use Michaelr0\Buildamic\Fieldtypes\BuildamicFieldType;
use Michaelr0\Buildamic\Modifiers\Buildamic as BuildamicModifier;
use Statamic\Providers\AddonServiceProvider;

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
        BuildamicFieldType::class,
        Altamic::class,
        // AltamicSection::class,
        // AltamicRow::class,
        // AltamicColumn::class,
    ];

    // protected $modifiers = [
    //     BuildamicModifier::class,
    // ];

    // public function boot()
    // {
    //     parent::boot();
    // }
}
