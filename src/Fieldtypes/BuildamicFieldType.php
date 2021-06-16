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
            // 'sets' => [
            //     'display' => __('Sets'),
            //     'type' => 'sets',
            // ],
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
        return (object) [
            //'uuid' => c38c5a87-9e05-4342-9897-75b8e68d40c0,
            'uuid' => Str::uuid(),
            'type' => 'section',
            'rows' => (array) $rows,
        ];
    }

    protected function makeRow(...$columns)
    {
        return (object) [
            'uuid' => Str::uuid(),
            'columns' => (array) $columns,
        ];
    }

    protected function makeColumn(...$fields)
    {
        return (object) [
            'uuid' => Str::uuid(),
            'fields' => (array) $fields,
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
        return empty($data) ? $this->defaultValue() : $data;
    }

    /**
     * Process the data before it gets saved.
     *
     * @param mixed $data
     * @return array|mixed
     */
    public function process($data)
    {
        return collect($data)->transform(function ($section) {
            $section['rows'] = collect($section['rows'])->map(function ($row) {
                $row['columns'] = collect($row['columns'])->map(function ($column) {
                    $column['fields'] = collect($column['fields'])->map(function ($field) {
                        $field['value'] = $this->modifyValue($field['value'], $field['config']['handle']);

                        return $field;
                    })->toArray();

                    return $column;
                })->toArray();

                return $row;
            })->toArray();

            return $section;
        })->toArray();
    }

    private function modifyValue($value, $handle)
    {
        return $this->fields()->get($handle)->setValue($value)->process()->value();
    }

    public function preload()
    {
        return [
            'defaultValue' => $this->defaultRowData()->all(),
            'defaultMeta' => $this->fields()->meta()->all(),
        ];
    }

    public function fields()
    {
        return new Fields($this->config('fields'), $this->field()->parent(), $this->field());
    }

    protected function defaultRowData()
    {
        return $this->fields()->all()->map(function ($field) {
            return $field->fieldtype()->preProcess($field->defaultValue());
        });
    }

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
