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

        $value = collect($value)->map(function ($field) use ($parent, $method) {
            if ($section['config']['enabled'] ?? false) {
                return;
            }

            if ($field['type'] === 'field') {
                $type = 'buildamic-field';
            } elseif ($field['type'] === 'fieldset') {
                $type = 'buildamic-fieldset';
            } elseif ($field['type'] === 'set') {
                $type = 'buildamic-set';
            }

            if (isset($type)) {
                $field['type'] = $type;

                return (new Field($field['config']['handle'], []))
                    ->setConfig($field)
                    ->setParent($parent->field()->parent())
                    ->setParentField($parent->field())
                    ->setValue($field['value'])
                    ->{$method}();
            }
        })->filter()->all();

        return $this->field()->setValue($value)->value();
    }
}
