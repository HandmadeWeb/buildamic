<?php

namespace Michaelr0\Buildamic;

use Facades\Statamic\View\Cascade;
use Illuminate\Support\Facades\View;
use Michaelr0\Buildamic\Fields\Field;
use Michaelr0\Buildamic\Fields\Fields;
use Michaelr0\Buildamic\Fieldtypes\Buildamic;
use Statamic\Fields\Value;

// use Statamic\View\View;

class BuildamicRenderer
{
    protected $augmentMethod;
    protected $cascade;
    protected $cascadeContent = [];
    protected $instance;
    protected $sections = [];
    protected $viewPrefix = 'buildamic::blade';

    public function __construct(Buildamic $fieldInstance, bool $shallowAugment = false)
    {
        $this->instance = $fieldInstance->field();
        $this->augmentMethod = $shallowAugment ? 'shallowAugment' : 'augment';

        $this->sections = $this->instance->value();
    }

    public function sections()
    {
        return $this->sections;
    }

    protected function cascade()
    {
        return $this->cascade = $this->cascade ?? Cascade::instance()
            ->withContent($this->cascadeContent)
            ->hydrate()
            ->toArray();
    }

    public function gatherData(array $data)
    {
        return array_merge(['cascade' => $this->cascade()], $data);
    }

    public function __toString()
    {
        return $this->render()->render();
    }

    public function render()
    {
        return $this->renderContainer();
    }

    public function renderContainer()
    {
        return View::make("{$this->viewPrefix}.layouts.container", $this->gatherData(['buildamic' => $this, 'sections' => $this->sections()]));
    }

    public function renderSection(Value $section)
    {
        return View::make("{$this->viewPrefix}.layouts.section", $this->gatherData(['buildamic' => $this, 'section' => $section]));
    }

    public function renderRow(Value $row)
    {
        return View::make("{$this->viewPrefix}.layouts.row", $this->gatherData(['buildamic' => $this, 'row' => $row]));
    }

    public function renderColumn(Value $column)
    {
        return View::make("{$this->viewPrefix}.layouts.column", $this->gatherData(['buildamic' => $this, 'column' => $column]));
    }

    public function renderField(Field | Fields $field)
    {
        if ($field instanceof Field && $field->type() === 'buildamic-set') {
            return $this->renderSet($field);
        }

        if ($field instanceof Fields) {
            return $this->renderFieldset($field);
        }

        return $this->renderSingleField($field);
    }

    public function renderSingleField(Field $field)
    {
        // type: markdown, handle:hero-blurb, file: markdown-hero-blurb
        $viewFromTypeAndHandle = "{$this->viewPrefix}.fields.{$field->type()}-{$field->handle('handle')}";

        // type: markdown, file: markdown
        $viewFromType = "{$this->viewPrefix}.fields.{$field->type()}";

        // catch all, file: default-field
        $fallbackView = "{$this->viewPrefix}.default-field";

        return View::first([$viewFromTypeAndHandle, $viewFromType, $fallbackView], $this->gatherData(['buildamic' => $this, 'field' => $field]));
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
            return View::make("{$this->viewPrefix}.fieldsets.{$handle}", $this->gatherData(['buildamic' => $this, 'field' => $fieldset, 'fields' => $fieldset->all()]));
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
            return View::make("{$this->viewPrefix}.sets.{$set->handle()}", $this->gatherData(['buildamic' => $this, 'field' => $set, 'fields' => collect($fields)]));
        }

        // catch all, render individual fields.
        $html = '';

        foreach ($fields as $field) {
            $html .= $this->renderSingleField($field);
        }

        return $html;
    }
}
