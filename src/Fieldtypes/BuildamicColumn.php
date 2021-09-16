<?php

namespace HandmadeWeb\Buildamic\Fieldtypes;

use HandmadeWeb\Buildamic\Fields\Field;
use HandmadeWeb\Buildamic\Fields\Fields;
use Illuminate\Support\Collection;

class BuildamicColumn extends BuildamicBase
{
    protected static $handle = 'buildamic-column';

    /**
     * $preProcess = true: Pre-process the data before it gets sent to the publish page.
     * $preProcess = false: Process the data before it gets saved.
     *
     * @param mixed $data
     * @param bool $preProcess
     * @return array
     */
    protected function processData($data, bool $preProcess = false)
    {
        $buildamicInstance = $this->field()->parentField()->parentField()->parentField();

        $method = $preProcess ? 'preProcess' : 'process';

        return collect($data)->map(function ($field) use ($buildamicInstance, $method) {
            if ($field['type'] === 'field') {
                $computedField = $buildamicInstance
                    ->fieldType()
                    ->fields()
                    ->get($field['config']['statamic_settings']['handle'])
                    ->setValue($field['value'])
                    ->{$method}();

                if ($method === 'preProcess') {
                    $field['computed'] = [
                        'meta' => $computedField->meta(),
                        'config' => $computedField->toPublishArray(),
                    ];
                } else {
                    unset($field['computed']);
                    unset($field['meta']);
                }

                $field['config']['statamic_settings'] = [
                    'handle' => $field['config']['statamic_settings']['field']['handle'] ?? $field['config']['statamic_settings']['handle'],
                    'field' => [
                        'type' => $field['config']['statamic_settings']['field']['type'],
                    ],
                ];

                $field['value'] = $buildamicInstance
                    ->fieldType()
                    ->fields()
                    ->get($field['config']['statamic_settings']['handle'])
                    ->setValue($field['value'])
                    ->{$method}()
                    ->value();
            } elseif ($field['type'] === 'set') {
                $fields = $buildamicInstance
                    ->fieldType()
                    ->set($field['config']['statamic_settings']['handle'])
                    ->addValues($field['value'])
                    ->{$method}();

                if ($method === 'preProcess') {
                    $field['computed'] = [
                        'meta' => [],
                        'config' => [],
                    ];

                    $fields->all()->each(function ($_field) use (&$field) {
                        $field['computed']['meta'][$_field->handle()] = $_field->meta();
                        $field['computed']['config'][$_field->handle()] = $_field->toPublishArray();
                    });
                } else {
                    unset($field['computed']);
                    unset($field['meta']);
                }

                $field['value'] = $fields->values()->toArray();
            } elseif ($field['type'] === 'fieldset') {
                // Fieldset (single field)
                if (isset($field['config']['statamic_settings']['field']) && is_string($field['config']['statamic_settings']['field'])) {
                    $singleField = [
                        'handle' => $field['config']['statamic_settings']['field'],
                        'field' => $field['config']['statamic_settings']['field'],
                        'config' => $field['config']['statamic_settings'] ?? [],
                    ];
                }

                $fields = (new Fields([]))
                    ->setBuildamicSettings($field['config']['buildamic_settings'])
                    ->setItems([$singleField ?? $field['config']['statamic_settings']])
                    ->addValues($field['value'] ?? [])
                    ->{$method}();

                if ($method === 'preProcess') {
                    $field['computed'] = [
                        'meta' => [],
                        'config' => [],
                    ];

                    $fields->all()->each(function ($_field) use (&$field) {
                        $field['computed']['meta'][$_field->handle()] = $_field->meta();
                        $field['computed']['config'][$_field->handle()] = $_field->toPublishArray();
                    });
                } else {
                    unset($field['computed']);
                    unset($field['meta']);
                }

                $field['value'] = $fields->values()->toArray();
            }

            return $field;
        })->toArray();
    }

    protected function performAugmentation($value, $shallow = false)
    {
        $buildamicInstance = $this->field()->parentField()->parentField()->parentField();
        $buildamicConfig = $buildamicInstance->config();

        $method = $shallow ? 'shallowAugment' : 'augment';

        $value = collect($value)->map(function ($field) use ($buildamicConfig) {
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
                //       field:
                //         type: markdown
                //   buildamic_settings:
                //     enabled: true
                //     admin_label: markdown
                // value: 'Markdown Value'
                return (new Field($field['config']['statamic_settings']['handle'], []))
                    ->setConfig(array_merge($config['field'], $field['config']['statamic_settings']['field'] ?? []))
                    ->setBuildamicSettings($field['config']['buildamic_settings'] ?? [])
                    ->setParent($this->field()->parent())
                    ->setParentField($this->field())
                    ->setValue($field['value'] ?? null);
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
                    ->setParent($this->field()->parent())
                    ->setParentField($this->field())
                    ->setItems([$field['config']['statamic_settings']])
                    ->addValues($field['value'] ?? []);
            }

            if ($field['type'] === 'set') {
                $field['config']['statmic_settings']['field']['type'] = 'sets';

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
                    ->setParent($this->field()->parent())
                    ->setParentField($this->field())
                    ->setValue($field['value'] ?? []);
            }
        })->filter()->all();

        return $this->field()->setValue($value)->value();
    }
}
