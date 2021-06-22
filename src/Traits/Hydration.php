<?php

namespace Michaelr0\Buildamic\Traits;

use Statamic\Facades\Antlers;
use Statamic\Fields\Field;
use Statamic\Fields\Fields;

trait Hydration
{
    protected function hydrateFields(array $fields)
    {
        return collect($fields)->map(function ($field) {
            if ($field['type'] === 'field') {
                $field['value'] = $this->hydrateField($field);
            } elseif ($field['type'] === 'set') {
                $field['value'] = $this->hydrateSet($field);
            }

            return $field;
        })->toArray();
    }

    protected function hydrateField(array $field, array $config = [])
    {
        if ($field['type'] === 'set') {
            return $this->hydrateSet($field);
        }

        if (! empty($field['config']['handle'])) {
            $fieldValue = (new Field(
                    $field['config']['handle'],
                    ! empty($config) ? $config : collect($this->instance->config('fields'))->where('handle', $field['config']['handle'])->pluck('field')->first()
                )
            )->setValue($field['value'])->{$this->augmentMethod}()->value();

            return $fieldValue;
        }

        return $field['value'];
    }

    protected function hydrateSet(array $set)
    {
        if ($set['type'] === 'field') {
            return $this->hydrateField($set);
        }

        if (! empty($set['config']['handle'])) {
            $fields = [];
            $config = collect($this->instance->config("sets.{$set['config']['handle']}.fields"));
            foreach ($set['value'] as $handle => $value) {
                $field = [
                    'uuid' => "{$set['uuid']}-{$set['config']['handle']}-{$handle}",
                    'type' => 'field',
                    'config' => [
                        'type' => $config->where('handle', $handle)->pluck('field')->first()['type'],
                        'handle' => $handle,
                    ],
                    'value' => $value,
                ];

                $field['value'] = $this->hydrateField($field, $config->where('handle', $handle)->pluck('field')->first());

                $fields[] = $field;
            }

            return $fields;
        }

        return $set['value'];
    }
}
