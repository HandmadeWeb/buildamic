<?php

namespace Michaelr0\Buildamic;

use Michaelr0\Buildamic\Fieldtypes\Altamic as AltamicFieldType;
use Statamic\Fields\Field;
use Statamic\Fields\Fields;

class AltamicRenderer
{
    protected function hydrateField($field)
    {
        $config = collect($this->instance->config('fields'))->firstWhere('handle', $field['handle']);

        $config = array_merge([
            'handle' => $field['handle'],
        ],
            $config['field'],
            $field['config']['field'] ?? []
        );

        $field['value'] = (new Field($field['handle'], $config))->setValue($field['value'])->augment()->value();

        return $field;
    }

    protected function hydrateFieldSet($field)
    {
        $config = [[
            'handle' => $field['handle'],
            'field' => $field['config']['field'],
        ]];

        $field['value'] = [$field['handle'] => $field['value']];

        $fields = (new Fields($config))->addValues($field['value'])->all();

        foreach ($fields as $item) {
            $field['value'][$item->handle()] = $item->augment()->value();
        }

        return $field;
    }

    protected function hydrateFieldSetSingle($field)
    {
        $config = [[
            'handle' => $field['handle'],
            'field' => $field['config']['field'],
        ]];

        $field['value'] = [
            $field['handle'] => $field['value'],
        ];

        $fields = (new Fields($config))->addValues($field['value'])->all();

        foreach ($fields as $item) {
            $field['value'][$item->handle()] = $item->augment()->value();
        }

        return $field;
    }

    public function renderFieldSet(array $fieldset)
    {
        $html = '';

        foreach ($fieldset['value'] as $item) {
            $field = [
                'uuid' => $fieldset['uuid'],
                'parent' => $fieldset['parent'],
                'type' => 'field',
                'handle' => $item->handle(),
                'component' => $item->field()->type(),
                'config' => [
                    'enabled' => true,
                    'field' => $item->field()->config(),
                ],
                'value' => $item,
            ];

            // type: markdown, file: markdown
            if (view()->exists("{$this->viewPrefix}.fields.{$field['component']}")) {
                $view = "{$this->viewPrefix}.fields.{$field['component']}";
            }
            // catch all, file:default-field
            else {
                $view = "{$this->viewPrefix}.default-field";
            }

            $html .= view($view, ['altamic' => $this, 'field' => $field]);
        }

        return $html;
    }
}
