<?php

namespace Michaelr0\Buildamic\Fieldtypes;

use Michaelr0\Buildamic\BuildamicRenderer;
use Michaelr0\Buildamic\Fields\Field;
use Michaelr0\Buildamic\Fields\Fields;
use Statamic\Fields\Fieldtype;

class Buildamic extends Fieldtype
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
                            if (empty($field['config']['buildamic_settings']['admin_label'])) {
                                $field['config']['buildamic_settings']['admin_label'] = $field['config']['statamic_settings']['handle'];
                            }

                            $field['value'] = $this->fields()->get($field['config']['statamic_settings']['handle'])->setValue($field['value'])->preProcess()->value();
                        } elseif ($field['type'] === 'set') {
                            if (empty($field['config']['buildamic_settings']['admin_label'])) {
                                $field['config']['buildamic_settings']['admin_label'] = $field['config']['statamic_settings']['handle'];
                            }

                            $field['value'] = $this->set($field['config']['statamic_settings']['handle'])->all()->map(function ($item) use ($field) {
                                return $item->setValue($field['value'][$item->handle()])->preProcess()->value();
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

                            if (empty($field['config']['buildamic_settings']['admin_label'])) {
                                if (! empty($field['config']['statamic_settings']['import'])) {
                                    if (! empty($field['config']['statamic_settings']['prefix'])) {
                                        $field['config']['buildamic_settings']['admin_label'] = "{$field['config']['statamic_settings']['prefix']}_{$field['config']['statamic_settings']['import']}";
                                    } else {
                                        $field['config']['buildamic_settings']['admin_label'] = $field['config']['statamic_settings']['import'];
                                    }
                                } elseif (isset($singleField)) {
                                    $field['config']['buildamic_settings']['admin_label'] = $singleField['handle'];
                                } else {
                                    $field['config']['buildamic_settings']['admin_label'] = 'fieldset';
                                }
                            }

                            $field['value'] = (new Fields([]))
                                ->setBuildamicSettings($field['config']['buildamic_settings'])
                                ->setItems([$singleField ?? $field['config']['statamic_settings']])
                                ->addValues($field['value'] ?? [])
                                ->preProcess()
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

    /**
     * Process the data before it gets saved.
     *
     * @param mixed $data
     * @return array|mixed
     */
    public function process($data)
    {
        $instance = $this;

        return collect($data)->map(function ($section) use ($instance) {
            $section['value'] = collect($section['value'])->map(function ($row) use ($instance) {
                $row['value'] = collect($row['value'])->map(function ($column) use ($instance) {
                    $column['value'] = collect($column['value'])->map(function ($field) use ($instance) {
                        if ($field['type'] === 'field') {
                            if (empty($field['config']['buildamic_settings']['admin_label'])) {
                                $field['config']['buildamic_settings']['admin_label'] = $field['config']['statamic_settings']['handle'];
                            }

                            $field['value'] = $this->fields()->get($field['config']['statamic_settings']['handle'])->setValue($field['value'])->process()->value();

                            // Deduplicate Field Config
                            $field['config']['statamic_settings']['field'] = array_diff($field['config']['statamic_settings']['field'] ?? [], collect($instance->config('fields'))->firstWhere('handle', $field['config']['statamic_settings']['handle'])['field'] ?? []);
                        } elseif ($field['type'] === 'set') {
                            if (empty($field['config']['buildamic_settings']['admin_label'])) {
                                $field['config']['buildamic_settings']['admin_label'] = $field['config']['statamic_settings']['handle'];
                            }

                            $field['value'] = $this->set($field['config']['statamic_settings']['handle'])->all()->map(function ($item) use ($field) {
                                $_item = collect($field['value'])->firstWhere('config.statamic_settings.handle', 'title');

                                return $item->setValue($_item['value'])->process()->value();
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

                            if (empty($field['config']['buildamic_settings']['admin_label'])) {
                                if (! empty($field['config']['statamic_settings']['import'])) {
                                    if (! empty($field['config']['statamic_settings']['prefix'])) {
                                        $field['config']['buildamic_settings']['admin_label'] = "{$field['config']['statamic_settings']['prefix']}_{$field['config']['statamic_settings']['import']}";
                                    } else {
                                        $field['config']['buildamic_settings']['admin_label'] = $field['config']['statamic_settings']['import'];
                                    }
                                } elseif (isset($singleField)) {
                                    $field['config']['buildamic_settings']['admin_label'] = $singleField['handle'];
                                } else {
                                    $field['config']['buildamic_settings']['admin_label'] = 'fieldset';
                                }
                            }

                            $field['value'] = (new Fields([]))
                                ->setBuildamicSettings($field['config']['buildamic_settings'] ?? [])
                                ->setItems([$singleField ?? $field['config']['statamic_settings']])
                                ->addValues($field['value'])
                                ->process()
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
