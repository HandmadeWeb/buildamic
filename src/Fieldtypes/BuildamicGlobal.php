<?php

namespace HandmadeWeb\Buildamic\Fieldtypes;

use Statamic\Fieldtypes\Entries;

class BuildamicGlobal extends Entries
{
    protected static $handle = 'buildamic-global';

    protected $localizable = false;
    protected $validatable = false;
    // protected $defaultable = false;
    protected $selectable = false;
    protected $selectableInForms = false;
    protected $categories = [];
    // protected $defaultValue;

    protected function configFieldItems(): array
    {
        $config = parent::configFieldItems();

        // Remove config options from Blueprint.
        unset($config['create']);
        unset($config['max_items']);

        return $config;
    }

    public function config(string $key = null, $fallback = null)
    {
        if ($key === 'create') {
            return false;
        } elseif ($key === 'max_items') {
            return 1;
        }

        return parent::config($key, $fallback);
    }

    // Don't display anything on the Collections index page.
    public function preProcessIndex($data)
    {
    }
}
