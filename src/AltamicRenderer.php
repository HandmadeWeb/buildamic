<?php

namespace Michaelr0\Buildamic;

use Michaelr0\Buildamic\Fieldtypes\Altamic as AltamicField;
use Statamic\Fields\Field;
use Statamic\Fields\Fields;

class AltamicRenderer
{
    public $instance;

    public $sections;
    public $rows;
    public $columns;
    public $fields;

    protected $viewPrefix = 'buildamic::altamic.blade';

    public function __construct(AltamicField $fieldInstance, array $value)
    {
        $this->instance = $fieldInstance;

        //$this->instance->field()->setValue($value);

        $this->sections = collect($value['sections'] ?? []);
        $this->rows = collect($value['rows'] ?? []);
        $this->columns = collect($value['columns'] ?? []);
        $this->fields = collect($value['fields'] ?? []);
    }

    public function __toString()
    {
        return $this->render();
    }

    public function render()
    {
        $this->hydrate();

        $html = '';

        foreach ($this->sections as $section) {
            $html .= $this->renderSection($section);
        }

        return $html;
    }

    protected function hydrate()
    {
        $this->hydrateSections();
        $this->hydrateRows();
        $this->hydrateColumns();
        $this->hydrateFields();
    }

    protected function hydrateSections()
    {
        $this->sections = $this->sections->filter(function ($section) {
            return $section['config']['enabled'] ?? false;
        });
    }

    protected function hydrateRows()
    {
        $instance = $this;
        $this->rows = $this->rows->filter(function ($row) use ($instance) {
            return $instance->sections->firstWhere('uuid', $row['parent']) && ($row['config']['enabled'] ?? false);
        });
    }

    protected function hydrateColumns()
    {
        $instance = $this;
        $this->columns = $this->columns->filter(function ($column) use ($instance) {
            return $instance->rows->firstWhere('uuid', $column['parent']) && ($column['config']['enabled'] ?? false);
        });
    }

    protected function hydrateFields()
    {
        $instance = $this;
        $this->fields = $this->fields->filter(function ($field) use ($instance) {
            return $instance->columns->firstWhere('uuid', $field['parent']) && ($field['config']['enabled'] ?? false);
        });
    }

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
        if (is_string($field['config']['field'])) {
            return $this->hydrateFieldSetSingle($field);
        }

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

    protected function renderSection(array $section)
    {
        return view('buildamic::altamic.blade.layouts.section', ['altamic' => $this, 'section' => $section]);
    }

    public function renderRow(array $row)
    {
        return view('buildamic::altamic.blade.layouts.row', ['altamic' => $this, 'row' => $row]);
    }

    public function renderColumn(array $column)
    {
        return view('buildamic::altamic.blade.layouts.column', ['altamic' => $this, 'column' => $column]);
    }

    public function renderField(array $field)
    {
        if ($field['type'] === 'fieldset') {
            $field = $this->hydrateFieldSet($field);

            return $this->renderFieldSet($field);
        } else {
            $field = $this->hydrateField($field);
        }

        // type: markdown, handle:hero-blurb, file: markdown-hero-blurb
        if (view()->exists("{$this->viewPrefix}.fields.{$field['component']}-{$field['handle']}")) {
            $view = "{$this->viewPrefix}.fields.{$field['component']}-{$field['handle']}";
        }
        // type: markdown, file: markdown
        elseif (view()->exists("{$this->viewPrefix}.fields.{$field['component']}")) {
            $view = "{$this->viewPrefix}.fields.{$field['component']}";
        }
        // catch all, file:default-field
        else {
            $view = "{$this->viewPrefix}.default-field";
        }

        return view($view, ['altamic' => $this, 'field' => $field]);
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
