<?php

namespace Michaelr0\Buildamic\Fieldtypes;

use Statamic\Fields\Fields;
use Statamic\Fields\Fieldtype;

class Altamic extends Fieldtype
{
    protected function configFieldItems(): array
    {
        return [
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
     * Get Fields from config.
     *
     * @param mixed $data
     * @return Fields
     */
    public function fields()
    {
        return new Fields($this->config('fields'), $this->field()->parent(), $this->field());
    }

    public function defaultValue()
    {
        return [
            'config' => [],
            'sections' => [],
            'rows' => [],
            'columns' => [],
            'fields' => [],
        ];
    }

    /**
     * Load data into meta.
     *
     * @param mixed $data
     * @return array|mixed
     */
    public function preload()
    {
        return [
            'fields' => collect($this->fields()->all())->map(function ($field) {
                return [
                    'handle' => $field->handle(),
                    'meta' => $field->meta(),
                    'value' => $field->fieldtype()->preProcess($field->defaultValue()),
                    'config' => $field->config(),
                ];
            })->toArray(),
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
        return array_merge_recursive($this->defaultValue(), $data);
    }

    /**
     * Process the data before it gets saved.
     *
     * @param mixed $data
     * @return array|mixed
     */
    public function process($data)
    {
        $instance = $this;

        // Deduplicate Field Config
        $data['fields'] = collect($data['fields'])->map(function ($field) use ($instance) {
            $field['config'] = array_diff($field['config'], collect($instance->config('fields'))->firstWhere('handle', $field['handle'])['field'] ?? []);

            return $field;
        })->toArray();

        dd($data);

        return $data;
    }
}
