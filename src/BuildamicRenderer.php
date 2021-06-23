<?php

namespace Michaelr0\Buildamic;

use Michaelr0\Buildamic\Fieldtypes\Buildamic;
use Michaelr0\Buildamic\Traits\Hydration;
use Statamic\Facades\Antlers;
use Statamic\Fields\Field;
use Statamic\Fields\Fields;
use Statamic\Fields\Value;

class BuildamicRenderer
{
    protected $instance;
    protected $sections = [];
    protected $viewPrefix = 'buildamic::blade';
    protected $augmentMethod;

    public function __construct(Buildamic $fieldInstance, bool $shallowAugment = false)
    {
        $this->instance = $fieldInstance->field();
        $this->augmentMethod = $shallowAugment ? 'shallowAugment' : 'augment';

        $this->sections = $this->instance->value();
    }

    public function __toString()
    {
        return $this->render();
    }

    public function render()
    {
        $buildamic_html = '';

        foreach ($this->sections() as $section) {
            $buildamic_html .= $this->renderSection($section);
        }

        return $buildamic_html;
    }

    public function sections()
    {
        return $this->sections;
    }

    public function renderSection(Value $section)
    {
        return view("{$this->viewPrefix}.layouts.section", ['buildamic' => $this, 'section' => $section]);
    }

    public function renderRow(Value $row)
    {
        return view("{$this->viewPrefix}.layouts.row", ['buildamic' => $this, 'row' => $row]);
    }

    public function renderColumn(Value $column)
    {
        return view("{$this->viewPrefix}.layouts.column", ['buildamic' => $this, 'column' => $column]);
    }

    public function renderField($field)
    {
        if ($field instanceof Field && $field->type() === 'buildamic-set') {
            return $this->renderSet($field);
        } elseif ($field instanceof Fields) {
            return $this->renderFieldset($field);
        }

        return $this->renderSingleField($field);
    }

    public function renderSingleField(Field $field)
    {
        // type: markdown, handle:hero-blurb, file: markdown-hero-blurb
        if (view()->exists("{$this->viewPrefix}.fields.{$field->type()}-{$field->handle('handle')}")) {
            $view = "{$this->viewPrefix}.fields.{$field->type()}-{$field->handle('handle')}";
        }
        // type: markdown, file: markdown
        elseif (view()->exists("{$this->viewPrefix}.fields.{$field->type()}")) {
            $view = "{$this->viewPrefix}.fields.{$field->type()}";
        }
        // catch all, file: default-field
        else {
            $view = "{$this->viewPrefix}.default-field";
        }

        return view($view, ['buildamic' => $this, 'field' => $field]);
    }

    public function renderFieldset(Fields $fieldset)
    {
        $config = $fieldset->items()->first();

        if (isset($config['import'])) {
            $handle = ($config['prefix'] ?? '').$config['import'];
        } elseif (isset($config['handle']) && is_string($config['field'])) {
            $handle = $config['handle'];
        }

        // handle:blurb, file: blurb
        if (view()->exists("{$this->viewPrefix}.fieldsets.{$handle}")) {
            return view("{$this->viewPrefix}.fieldsets.{$handle}", ['buildamic' => $this, 'field' => $fieldset, 'fields' => $fieldset->all()]);
        }

        // catch all, render individual fields.
        $html = '';

        foreach ($fieldset->all() as $field) {
            $html .= $this->renderSingleField($field);
        }

        return $html;
    }

    public function renderSet(Field $set)
    {
        $fields = [];
        foreach ($set->value()->value()->value()->value() as $field) {
            $fields[$field->handle()] = $field;
        }

        // handle:blurb, file: blurb
        if (view()->exists("{$this->viewPrefix}.sets.{$set->handle()}")) {
            return view("{$this->viewPrefix}.sets.{$set->handle()}", ['buildamic' => $this, 'field' => $set, 'fields' => collect($fields)]);
        }

        // catch all, render individual fields.
        $html = '';

        foreach ($fields as $field) {
            $html .= $this->renderSingleField($field);
        }

        return $html;
    }
}
