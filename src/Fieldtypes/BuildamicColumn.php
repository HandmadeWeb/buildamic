<?php

namespace Michaelr0\Buildamic\Fieldtypes;

use Illuminate\Support\Collection;
use Michaelr0\Buildamic\Fields\Field;
use Michaelr0\Buildamic\Fields\Fields;

class BuildamicColumn extends BuildamicBase
{
    protected static $handle = 'buildamic-column';

    protected function performAugmentation($value, $shallow = false)
    {
        $parent = $this;
        $method = $shallow ? 'shallowAugment' : 'augment';
        $buildamicConfig = $parent->field()->parentField()->parentField()->parentField()->config();

        $value = collect($value)->map(function ($field) use ($parent, $method, $buildamicConfig) {
            if (isset($field['config']['buildamic_settings']['enabled']) && ! $field['config']['buildamic_settings']['enabled']) {
                return;
            }

            if ($field['type'] === 'field') {
                $config = collect($buildamicConfig['fields'] ?? [])->firstWhere('handle', $field['config']['statamic_settings']['handle']);

                // uuid: 98962c4d-2b1d-4579-b119-1757ee6cd608
                // type: field
                // config:
                //   statamic_settings:
                //     handle: markdown
                //     type: markdown
                //   buildamic_settings:
                //     enabled: true
                //     admin_label: markdown
                // value: 'Markdown Value'
                return (new Field($field['config']['statamic_settings']['handle'], []))
                    ->setConfig(array_merge($config['field'], $field['config']['statamic_settings']['field'] ?? []))
                    ->setBuildamicSettings($field['config']['buildamic_settings'] ?? [])
                    ->setParent($parent->field()->parent())
                    ->setParentField($parent->field())
                    ->setValue($field['value'] ?? null)
                    ->{$method}();
            }

            if ($field['type'] === 'fieldset') {
                //   -
                //     uuid: 77290cd8-583d-4ad8-9137-cfa24097bf78
                //     type: fieldset
                //     config:
                //       statamic_settings:
                //         import: fieldset_example
                //         prefix: prefix
                //       buildamic_settings:
                //         enabled: true
                //     value:
                //       prefixbio: '123456'
                //   -
                //     uuid: 77290cd8-583d-4ad8-9137-cfa24097bf781
                //     type: fieldset
                //     config:
                //       statamic_settings:
                //         handle: bio
                //         field: fieldset_example.bio
                //         config:
                //           antlers: true
                //       buildamic_settings:
                //         enabled: true
                //     value:
                //       bio: '123456'

                if ($field['value'] instanceof Collection) {
                    $field['value'] = $field['value']->all();
                }

                return (new Fields([]))
                    ->setBuildamicSettings($field['config']['buildamic_settings'] ?? [])
                    ->setParent($parent->field()->parent())
                    ->setParentField($parent->field())
                    ->setItems([$field['config']['statamic_settings']])
                    ->addValues($field['value'] ?? [])
                    ->{$method}();
            }

            if ($field['type'] === 'set') {
                $field['config']['statmic_settings']['field']['type'] = 'buildamic-set';

                // uuid: 98962c4d-2b1d-4579-b119-1757ee6cd608
                // type: set
                // config:
                //   statamic_settings:
                //     handle: blurb
                //   buildamic_settings:
                //     enabled: true
                //     admin_label: blurb
                // value:
                //   title: Test
                //   content: Testing
                return (new Field($field['config']['statamic_settings']['handle'], []))
                    ->setConfig($field['config']['statmic_settings']['field'])
                    ->setBuildamicSettings($field['config']['buildamic_settings'] ?? [])
                    ->setParent($parent->field()->parent())
                    ->setParentField($parent->field())
                    ->setValue($field['value'] ?? null)
                    ->{$method}();
            }
        })->filter()->all();

        return $this->field()->setValue($value)->value();
    }
}
