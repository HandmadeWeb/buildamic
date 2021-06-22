<?php

namespace Michaelr0\Buildamic\Fieldtypes;

use Statamic\Facades\Fieldset;
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
                $config = collect($buildamicConfig['fields'] ?? [])->firstWhere('handle', $field['config']['handle']);

                return (new Field($field['config']['handle'], []))
                    ->setConfig(array_merge($config['field'], $field['config']['field']))
                    ->setParent($parent->field()->parent())
                    ->setParentField($parent->field())
                    ->setValue($field['value'])
                    ->{$method}();
            } elseif ($field['type'] === 'fieldset') {
                if (isset($field['config']['field']['import'])) {
                }

                $fields = (new Fields([$field['config']['field']]))
                    ->addValues($field['value']);
                // $fields = (new Fields([[
                //     'handle' => $field['config']['field']['import'],
                //     'field' => $field['config']['field'],
                // ]]))->addValues([$field['handle'] => $field['value']])->all();

                dd(true, $fields, $field);
            } elseif ($field['type'] === 'set') {
                $field['type'] = 'buildamic-set';

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
