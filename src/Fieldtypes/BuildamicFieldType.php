<?php

namespace Michaelr0\Buildamic\Fieldtypes;

use Michaelr0\Buildamic\BuildamicRenderer;
use Statamic\Fields\Fields;
use Statamic\Fields\Fieldtype;

class BuildamicFieldType extends Fieldtype
{
    protected static $handle = 'buildamic';

    protected function configFieldItems(): array
    {
        return [
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
        return [];
    }

    /**
     * Load data into meta.
     *
     * @param mixed $data
     * @return array|mixed
     */
    public function preload()
    {
        $instance = $this;

        return [
            'fields' => collect($this->fields()->all())->map(function ($field) {
                return [
                    'handle' => $field->handle(),
                    'meta' => $field->meta(),
                    'value' => $field->fieldtype()->preProcess($field->defaultValue()),
                    'config' => $field->config(),
                ];
            })->toArray(),
            'sets' => collect($this->config('sets'))->map(function ($set, $handle) use ($instance) {
                $fields = [
                    'handle' => $handle,
                    'display' => $set['display'],
                    'fields' => [],
                ];

                foreach ($instance->set($handle)->all() as $field) {
                    $fields['fields'][] = [
                        'handle' => $field->handle(),
                        'meta' => $field->meta(),
                        'value' => $field->fieldtype()->preProcess($field->defaultValue()),
                        'config' => $field->config(),
                    ];
                }

                return $fields;
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
        if (empty($data)) {
            return $this->defaultValue();
        }

        return collect($data)->map(function ($section) {
            $section['value'] = collect($section['value'])->map(function ($row) {
                $row['value'] = collect($row['value'])->map(function ($column) {
                    $column['value'] = collect($column['value'])->map(function ($field) {
                        if ($field['type'] === 'field') {
                            $field['value'] = $this->fields()->get($field['config']['handle'])->setValue($field['value'])->preProcess()->value();
                        } elseif ($field['type'] === 'set') {
                            $field['value'] = $this->set($field['config']['handle'])->all()->map(function ($item) use ($field) {
                                return $item->setValue($field['value'][$item->handle()])->preProcess()->value();
                            })->toArray();
                        }

                        return $field;
                    })->toArray();

                    return $column;
                })->toArray();

                return $row;
            })->toArray();

            return $section;
        })->toArray();
    }

    /**
     * Process the data before it gets saved.
     *
     * @param mixed $data
     * @return array|mixed
     */
    public function process($data)
    {
        return collect($data)->map(function ($section) {
            $section['value'] = collect($section['value'])->map(function ($row) {
                $row['value'] = collect($row['value'])->map(function ($column) {
                    $column['value'] = collect($column['value'])->map(function ($field) {
                        if ($field['type'] === 'field') {
                            $field['value'] = $this->fields()->get($field['config']['handle'])->setValue($field['value'])->process()->value();
                        } elseif ($field['type'] === 'set') {
                            $field['value'] = $this->set($field['config']['handle'])->all()->map(function ($item) use ($field) {
                                return $item->setValue($field['value'][$item->handle()])->process()->value();
                            })->toArray();
                        }

                        return $field;
                    })->toArray();

                    return $column;
                })->toArray();

                return $row;
            })->toArray();

            return $section;
        })->toArray();
    }

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
        return new BuildamicRenderer($this, $value, $shallow);
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

    /**
     * Get the Set from config by handle.
     *
     * @param string $setHandle
     * @return Fields
     */
    public function set(string $setHandle)
    {
        return new Fields($this->config("sets.{$setHandle}.fields"), $this->field()->parent(), $this->field());
    }
}
