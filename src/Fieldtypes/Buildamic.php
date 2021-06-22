<?php

namespace Michaelr0\Buildamic\Fieldtypes;

use Michaelr0\Buildamic\BuildamicRenderer;
use Statamic\Fields\Field;
use Statamic\Fields\Fields;
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
        $instance = $this;

        return collect($data)->map(function ($section) use ($instance) {
            $section['value'] = collect($section['value'])->map(function ($row) use ($instance) {
                $row['value'] = collect($row['value'])->map(function ($column) use ($instance) {
                    $column['value'] = collect($column['value'])->map(function ($field) use ($instance) {
                        if ($field['type'] === 'field') {
                            $field['value'] = $this->fields()->get($field['config']['handle'])->setValue($field['value'])->process()->value();

                            // Deduplicate Field Config
                            $field['config']['field'] = array_diff($field['config']['field'] ?? [], collect($instance->config('fields'))->firstWhere('handle', $field['config']['handle'])['field'] ?? []);
                        } elseif ($field['type'] === 'set') {
                            $field['value'] = collect($field['value']);
                            $field['value'] = $this->set($field['config']['handle'])->all()->map(function ($item) use ($field) {
                                return $item->setValue($field['value']->firstWhere('handle', $item->handle())['value'])->process()->value();
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
        $parent = $this;

        $method = $shallow ? 'shallowAugment' : 'augment';

        $value = collect($value)->map(function ($section) use ($parent, $method) {
            if (! $section['config']['enabled'] ?? false) {
                return;
            }

            return (new Field($section['uuid'], []))
                ->setConfig(array_merge(
                    [
                    'type' => 'buildamic-section',
                    ],
                    collect($section['config'])
                    ->except(['admin_label'])
                    ->toArray()
                ))
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
