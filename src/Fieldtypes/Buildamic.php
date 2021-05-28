<?php

namespace Michaelr0\Buildamic\Fieldtypes;

use Illuminate\Support\Str;
use Statamic\Fields\Fields;
use Statamic\Fields\Fieldtype;

class Buildamic extends FieldType
{
    protected $defaultable = false;

    protected function configFieldItems(): array
    {
        return [
            'view_engine' => [
                'display' => __('View Engine'),
                'instructions' => '',
                'type' => 'select',
                'options' => [
                    'blade' => __('Blade'),
                    //'antlers' => __('Antlers'),
                ],
                'default' => 'blade',
            ],
            // 'fields' => [
            //     'display' => __('Fields'),
            //     'type' => 'fields',
            // ],
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
            'config' => [
                'view_engine' => $this->config('view_engine'),
            ],
            //'sections' => [],
            'sections' => [
                $this->makeSection($this->makeRow($this->makeColumn())),
            ],
        ];
    }

    protected function makeSection(...$rows)
    {
        return [
            //'uuid' => c38c5a87-9e05-4342-9897-75b8e68d40c0,
            'uuid' => Str::uuid(),
            'type' => 'section',
            'rows' => $rows,
        ];
    }

    protected function makeRow(...$columns)
    {
        return [
            'uuid' => Str::uuid(),
            'type' => 'row',
            'columns' => $columns,
        ];
    }

    protected function makeColumn(...$fields)
    {
        return [
            'uuid' => Str::uuid(),
            'type' => 'column',
            'fields' => $fields,
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
        return array_merge($this->defaultValue(), $data);
    }

    /**
     * Process the data before it gets saved.
     *
     * @param mixed $data
     * @return array|mixed
     */
    public function process($data)
    {
        return $data;
    }

    public function preload()
    {
        return [];
    }
}
