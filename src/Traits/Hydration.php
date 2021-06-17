<?php

namespace Michaelr0\Buildamic\Traits;

use Statamic\Facades\Antlers;
use Statamic\Fields\Field;
use Statamic\Fields\Fields;

trait Hydration
{
    protected function hydrateSections()
    {
        return collect($this->instance->field()->value())->map(function ($section) {
            if ($section['type'] === 'section') {
                $section['value'] = $this->hydrateRows($section['value'] ?? []);
            }

            return $section;
        })->toArray();
    }

    protected function hydrateRows(array $rows)
    {
        return collect($rows)->map(function ($row) {
            $row['value'] = $this->hydrateColumns($row['value'] ?? []);

            return $row;
        })->toArray();
    }

    protected function hydrateColumns(array $columns)
    {
        return collect($columns)->map(function ($column) {
            $column['value'] = $this->hydrateFields($column['value'] ?? []);

            return $column;
        })->toArray();
    }

    protected function hydrateFields(array $fields)
    {
        return collect($fields)->map(function ($field) {
            if ($field['type'] === 'field') {
                $field['value'] = $this->hydrateField($field);
            } elseif ($field['type'] === 'fieldset') {
                $field['value'] = $this->hydrateFieldSet($field);
            }

            return $field;
        })->toArray();
    }

    protected function hydrateField(array $field, array $config = [])
    {
        if ($field['type'] === 'fieldset') {
            return $this->hydrateFieldSet($field);
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

    protected function hydrateFieldSet(array $fieldset)
    {
        if ($fieldset['type'] === 'field') {
            return $this->hydrateField($fieldset);
        }

        if (! empty($fieldset['config']['handle'])) {
            $fields = [];
            $config = collect($this->instance->config("sets.{$fieldset['config']['handle']}.fields"));
            foreach ($fieldset['value'] as $handle => $value) {
                $field = [
                    'uuid' => "{$fieldset['uuid']}-{$fieldset['config']['handle']}-{$handle}",
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

        return $fieldset['value'];
    }
}
