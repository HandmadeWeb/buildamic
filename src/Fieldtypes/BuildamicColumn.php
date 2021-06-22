<?php

namespace Michaelr0\Buildamic\Fieldtypes;

use Statamic\Fields\Field;
use Statamic\Fields\Fieldtype;

class BuildamicColumn extends Fieldtype
{
    protected static $handle = 'buildamic-column';

    protected $localizable = false;
    protected $validatable = false;
    protected $defaultable = false;
    protected $selectable = false;
    protected $selectableInForms = false;
    protected $categories = [];

    public function augment($value)
    {
        return $this->performAugmentation($value, false);
    }

    public function shallowAugment($value)
    {
        return $this->performAugmentation($value, true);
    }

    private function performAugmentation($value, $shallow = false)
    {
        $parent = $this;
        $method = $shallow ? 'shallowAugment' : 'augment';
        $buildamicConfig = $parent->field()->parentField()->parentField()->parentField()->config();

        $value = collect($value)->map(function ($field) use ($parent, $method, $buildamicConfig) {
            if ($section['config']['enabled'] ?? false) {
                return;
            }

            $config = collect($buildamicConfig['fields'] ?? [])
                    ->firstWhere('handle', $field['config']['handle']);

            $config = array_merge($config['field'], $field['config']['field']);

            return (new Field($field['config']['handle'], []))
                ->setConfig($config)
                ->setParent($parent->field()->parent())
                ->setParentField($parent->field())
                ->setValue($field['value'])
                ->{$method}();
        })->filter()->all();

        return $this->field()->setValue($value)->value();
    }
}
