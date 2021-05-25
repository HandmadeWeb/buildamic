<?php

namespace Michaelr0\Buildamic\Fieldtypes;

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
            'sections' => [],
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
