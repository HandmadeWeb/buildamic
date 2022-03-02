<?php

namespace HandmadeWeb\Buildamic\Fieldtypes;

use HandmadeWeb\Buildamic\Fields\Field;
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

    protected function hackyMethodForUseFieldOverride()
    {
        return new Field('hackyMethodForUseFieldOverride', []);
    }

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
        if ('create' === $key) {
            return false;
        } elseif ('max_items' === $key) {
            return 1;
        }

        return parent::config($key, $fallback);
    }

    // Don't display anything on the Collections index page.
    public function preProcessIndex($data)
    {
    }
}
