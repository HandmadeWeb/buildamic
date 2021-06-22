<?php

namespace Michaelr0\Buildamic;

use Michaelr0\Buildamic\Fieldtypes\Altamic;
use Michaelr0\Buildamic\Fieldtypes\Buildamic;
use Michaelr0\Buildamic\Fieldtypes\BuildamicColumn;
use Michaelr0\Buildamic\Fieldtypes\BuildamicFieldset;
use Michaelr0\Buildamic\Fieldtypes\BuildamicRow;
use Michaelr0\Buildamic\Fieldtypes\BuildamicSection;
use Michaelr0\Buildamic\Fieldtypes\BuildamicSet;
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
        Buildamic::class,
        BuildamicSection::class,
        BuildamicRow::class,
        BuildamicColumn::class,
        BuildamicFieldset::class,
        BuildamicSet::class,
        Altamic::class,
    ];
}
