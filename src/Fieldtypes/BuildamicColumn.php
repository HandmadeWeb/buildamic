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
                    ->setConfig($config['field'])
                    ->setParent($parent->field()->parent())
                    ->setParentField($parent->field())
                    ->setValue($field['value'])
                    ->{$method}();
            } elseif ($field['type'] === 'fieldset') {
                //   -
                //     uuid: 77290cd8-583d-4ad8-9137-cfa24097bf78
                //     type: fieldset
                //     config:
                //       enabled: true
                //       field:
                //         import: fieldset_example
                //         prefix: prefix
                //     value:
                //       prefixbio: '123456'
                //   -
                //     uuid: 77290cd8-583d-4ad8-9137-cfa24097bf781
                //     type: fieldset
                //     config:
                //       enabled: true
                //       field: fieldset_example.bio
                //       config:
                //         antlers: true
                //     value:
                //       bio: '123456'

                // Fieldset (might be prefixed)
                if (isset($field['config']['field']['import'])) {
                    return (new Fields([$field['config']['field']]))
                        ->setParent($parent->field()->parent())
                        ->setParentField($parent->field())
                        ->addValues($field['value'])
                        ->{$method}();
                }
                // Fieldset (single field)
                elseif (is_string($field['config']['field'])) {
                    $config = [
                        'handle' => $field['config']['field'],
                        'field' => $field['config']['field'],
                    ];

                    return (new Fields([$config]))
                        ->setParent($parent->field()->parent())
                        ->setParentField($parent->field())
                        ->addValues($field['value'])
                        ->{$method}();
                }
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
