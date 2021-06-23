<?php

namespace Michaelr0\Buildamic\Fieldtypes;

use Michaelr0\Buildamic\BuildamicRenderer;
use Michaelr0\Buildamic\Fields\Field;
use Michaelr0\Buildamic\Fields\Fields;

class Buildamic extends BuildamicBase
{
    protected static $handle = 'buildamic';
    protected $selectable = true;

    public function fields()
    {
        return new Fields($this->config('fields'), $this->field()->parent(), $this->field());
    }

    public function set(string $setHandle)
    {
        return new Fields($this->config("sets.{$setHandle}.fields"), $this->field()->parent(), $this->field());
    }

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
     * Load data into meta.
     *
     * @param mixed $data
     * @return array
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
     * $preProcess = true: Pre-process the data before it gets sent to the publish page.
     * $preProcess = true: Process the data before it gets saved.
     *
     * @param mixed $data
     * @param bool $preProcess
     * @return array
     */
    protected function processData($data, bool $preProcess = false)
    {
        $method = $preProcess ? 'preProcess' : 'process';

        $instance = $this;

        return collect($data)->map(function ($section) use ($instance, $method) {
            $section['value'] = collect($section['value'])->map(function ($row) use ($instance, $method) {
                $row['value'] = collect($row['value'])->map(function ($column) use ($instance, $method) {
                    $column['value'] = collect($column['value'])->map(function ($field) use ($instance, $method) {
                        if ($field['type'] === 'field') {
                            $field['value'] = $this->fields()->get($field['config']['statamic_settings']['handle'])->setValue($field['value'])->{$method}()->value();

                        // if($method === 'process'){
                        //     // Deduplicate Field Config
                        //     $field['config']['statamic_settings']['field'] = array_diff($field['config']['statamic_settings']['field'] ?? [], collect($instance->config('fields'))->firstWhere('handle', $field['config']['statamic_settings']['handle'])['field'] ?? []);
                        // }
                        } elseif ($field['type'] === 'set') {
                            $field['value'] = $this->set($field['config']['statamic_settings']['handle'])->all()->map(function ($item) use ($field, $method) {
                                return $item->setValue($field['value'][$item->handle()])->{$method}()->value();
                            })->toArray();
                        } elseif ($field['type'] === 'fieldset') {
                            // Fieldset (single field)
                            if (isset($field['config']['statamic_settings']['field']) && is_string($field['config']['statamic_settings']['field'])) {
                                $singleField = [
                                    'handle' => $field['config']['statamic_settings']['field'],
                                    'field' => $field['config']['statamic_settings']['field'],
                                    'config' => $field['config']['statamic_settings'] ?? [],
                                ];
                            }

                            $field['value'] = (new Fields([]))
                                ->setBuildamicSettings($field['config']['buildamic_settings'])
                                ->setItems([$singleField ?? $field['config']['statamic_settings']])
                                ->addValues($field['value'] ?? [])
                                ->{$method}()
                                ->values();
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

    protected function performAugmentation($value, $shallow = false)
    {
        $parent = $this;

        $method = $shallow ? 'shallowAugment' : 'augment';

        $value = collect($value)->map(function ($section) use ($parent, $method) {
            if (! $section['config']['enabled'] ?? false) {
                return;
            }

            return (new Field($section['uuid'], []))
                ->setConfig(array_merge(['type' => 'buildamic-section'], $section['config']))
                ->setParent($parent->field()->parent())
                ->setParentField($parent->field())
                ->setValue($section['value'])
                ->{$method}()->value();
        })->filter()->all();

        $this->field()->setValue($value);

        return new BuildamicRenderer($this, $shallow);
    }
}
