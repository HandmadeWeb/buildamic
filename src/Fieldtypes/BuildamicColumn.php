<?php

namespace Michaelr0\Buildamic\Fieldtypes;

use Statamic\Fields\Field;
use Statamic\Fields\Fields;
use Statamic\Fields\Fieldtype;
use Statamic\Fields\Value;

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
            if (! $field['config']['enabled'] ?? false) {
                return;
            }

            if ($field['type'] === 'field') {
                $type = $field['config']['type'];
                $config = collect($buildamicConfig['fields'] ?? [])->firstWhere('handle', $field['config']['handle']);
                $config = array_merge($config['field'], $field['config']['field']);
                $fieldValue = $field['value'];
            } elseif ($field['type'] === 'fieldset') {
                $type = 'buildamic-fieldset';
                $field['type'] = $type;
                $config = $field;
                $fieldValue = $field['value'];
            } elseif ($field['type'] === 'set') {
                $type = 'buildamic-set';
                $field['type'] = $type;
                $config = $field;
                $fieldValue = $field['value'];
            }

            if (isset($type)) {
                return (new Field($field['config']['handle'], []))
                    ->setConfig($config)
                    ->setParent($parent->field()->parent())
                    ->setParentField($parent->field())
                    ->setValue($fieldValue)
                    ->{$method}();
            }
        })->filter()->all();

        return $this->field()->setValue($value)->value();
    }
}
