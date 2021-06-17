<?php

namespace Michaelr0\Buildamic\Fieldtypes;

use Illuminate\Support\Str;
use Statamic\Fields\Field;
use Statamic\Fields\Fields;
use Statamic\Fields\Fieldtype;
use Statamic\Fields\Value;

class BuildamicFieldType extends FieldType
{
    protected static $handle = 'buildamic';

    protected $defaultable = false;

    protected function configFieldItems(): array
    {
        return [
            // 'view_engine' => [
            //     'display' => __('View Engine'),
            //     'instructions' => '',
            //     'type' => 'select',
            //     'options' => [
            //         'blade' => __('Blade'),
            //         //'antlers' => __('Antlers'),
            //     ],
            //     'default' => 'blade',
            // ],
            'fields' => [
                'display' => __('Fields'),
                'type' => 'fields',
            ],
            'sets' => [
                'display' => __('Sets'),
                'type' => 'sets',
            ],
        ];
    }

    /**
     * The blank/default value.
     *
     * @return array
     */
    public function defaultValue()
    {
        return [
            $this->makeSection(
                $this->makeRow(
                    $this->makeColumn()
                )
            ),
        ];
    }

    protected function makeSection(...$rows)
    {
        return [
            //'uuid' => c38c5a87-9e05-4342-9897-75b8e68d40c0,
            'uuid' => Str::uuid(),
            'type' => 'section',
            'value' => $rows,
        ];
    }

    protected function makeRow(...$columns)
    {
        return [
            'uuid' => Str::uuid(),
            'value' => $columns,
        ];
    }

    protected function makeColumn(...$fields)
    {
        return [
            'uuid' => Str::uuid(),
            'value' => $fields,
        ];
    }

    /**
     * Pre-process the data before it gets sent to the publish page.
     *
     * @param mixed $data
     * @return array|mixed
     */
    public function preProcess($data)
    {
        if (empty($data)) {
            return $this->defaultValue();
        }

        return $this->processFieldValues($data, 'preProcess');
    }

    /**
     * Process the data before it gets saved.
     *
     * @param mixed $data
     * @return array|mixed
     */
    public function process($data)
    {
        return $this->processFieldValues($data, 'process');
    }

    protected function processFieldValues($data, $method)
    {
        foreach ($data as &$section) {
            foreach ($section['value'] as &$row) {
                foreach ($row['value'] as &$column) {
                    foreach ($column['value'] as &$field) {
                        if ($field['type'] === 'field') {
                            $field['value'] = $this->fields()->get($field['config']['handle'])->setValue($field['value'])->{$method}()->value();
                        } elseif ($field['type'] === 'fieldset') {
                            $field['value'] = $this->fieldsets()->get($field['config']['handle'])->all()->map(function ($item) use ($field, $method) {
                                return $item->setValue($field['value'][$item->handle()])->{$method}()->value();
                            })->toArray();
                        }
                    }
                }
            }
        }

        return $data;
    }

    public function preload()
    {
        return [
            // 'defaultValue' => $this->defaultRowData()->all(),
            // 'defaultMeta' => $this->fields()->meta()->all(),
            'fields' => [
                'meta' => $this->fields()->meta()->all(),
                'value' => $this->fields()->all()->map(function ($field) {
                    return $field->fieldtype()->preProcess($field->defaultValue());
                }),
                'config' => $this->config('fields'),
            ],
            'fieldsets' => $this->fieldsets()->map(function ($fields, $key) {
                return [
                    'meta' => $fields->meta()->all(),
                    'value' => $fields->all()->map(function ($field) {
                        return $field->fieldtype()->preProcess($field->defaultValue());
                    }),
                    'config' => collect($this->config('sets'))->get($key),
                ];
            }),
        ];
    }

    public function fields()
    {
        return new Fields($this->config('fields'), $this->field()->parent(), $this->field());
    }

    public function fieldsets()
    {
        $fields = [];
        foreach ($this->config('sets') as $key => $value) {
            $fields[$key] = new Fields(
                $this->config("sets.{$key}.fields"),
                $this->field()->parent(),
                $this->field()
            );
        }

        return collect($fields);
    }

    public function extraRules(): array
    {
        $rules = $this->fields()->validator()->rules();

        return collect($rules)->mapWithKeys(function ($rules, $handle) {
            return ["{$this->field->handle()}.{$handle}" => $rules];
            //return ["{$this->field->handle()}.*.{$handle}" => $rules];
        })->all();
    }

    // protected function defaultRowData()
    // {
    //     return $this->fields()->all()->map(function ($field) {
    //         return $field->fieldtype()->preProcess($field->defaultValue());
    //     });
    // }

    public function augment($value)
    {
        return $this->performAugmentation($value, false);
    }

    public function shallowAugment($value)
    {
        return $this->performAugmentation($value, true);
    }

    private function performAugmentation($value, $shallow)
    {
        $method = $shallow ? 'shallowAugment' : 'augment';
        $field = $this->field()->setValue($value)->{$method}();

        return (new \Michaelr0\Buildamic\Buildamic($field->value(), $field->config(), $shallow))->render();
    }
}
