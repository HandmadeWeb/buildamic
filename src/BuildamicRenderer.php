<?php

namespace Michaelr0\Buildamic;

use Facades\Statamic\View\Cascade;
use Illuminate\Support\Facades\View;
use Michaelr0\Buildamic\Fields\Field;
use Michaelr0\Buildamic\Fields\Fields;
use Michaelr0\Buildamic\Fieldtypes\Buildamic;

class BuildamicRenderer
{
    protected $augmentMethod;
    protected $cascade;
    protected $cascadeContent = [];
    protected $containerId;
    protected $containerClass;
    protected $instance;
    protected $sections = [];
    protected $viewEngine;
    protected $viewPrefix;

    public function __construct(Buildamic $fieldInstance, bool $shallowAugment = false)
    {
        $this->instance = $fieldInstance->field();
        $this->augmentMethod = $shallowAugment ? 'shallowAugment' : 'augment';

        $this->viewEngine = $this->instance->get('view_engine') ?? 'blade';
        $this->viewPrefix = "buildamic::{$this->viewEngine}";

        $this->containerId = $this->instance->get('container_id');
        $this->containerClass = $this->instance->get('container_class');

        $this->sections = $this->instance->value();
    }

    public function containerId()
    {
        return $this->containerId;
    }

    public function containerClass()
    {
        return $this->containerClass;
    }

    public function viewEngine()
    {
        return $this->viewEngine;
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
        return $this->render();
    }

    public function render()
    {
        return $this->renderContainer();
    }

    public function renderContainer()
    {
        return View::make("{$this->viewPrefix}.layouts.container", $this->gatherData(['buildamic' => $this, 'sections' => $this->sections()]))->render();
    }

    public function renderSection(Field $section)
    {
        $section = Filter::run('buildamic_filter_everything', $section);
        $section = Filter::run('buildamic_filter_section', $section);

        return View::make("{$this->viewPrefix}.layouts.section", $this->gatherData(['buildamic' => $this, 'section' => $section]))->render();
    }

    public function renderRow(Field $row)
    {
        $row = Filter::run('buildamic_filter_everything', $row);
        $row = Filter::run('buildamic_filter_row', $row);

        return View::make("{$this->viewPrefix}.layouts.row", $this->gatherData(['buildamic' => $this, 'row' => $row]))->render();
    }

    public function renderColumn(Field $column)
    {
        $column = Filter::run('buildamic_filter_everything', $column);
        $column = Filter::run('buildamic_filter_column', $column);

        return View::make("{$this->viewPrefix}.layouts.column", $this->gatherData(['buildamic' => $this, 'column' => $column]))->render();
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
        $field = Filter::run('buildamic_filter_everything', $field);
        $field = Filter::run('buildamic_filter_field', $field);
        $field = Filter::exists("buildamic_filter_field:{$field->type()}-{$field->handle('handle')}") ?
            Filter::run("buildamic_filter_field:{$field->type()}-{$field->handle('handle')}", $field) :
            Filter::run("buildamic_filter_field:{$field->type()}", $field);

        if ($field->type() === 'collections') {
            if (View::exists("{$this->viewPrefix}.fields.{$field->type()}-{$field->value()->value()->first()->handle()}")) {
                return View::make("{$this->viewPrefix}.fields.{$field->type()}-{$field->value()->value()->first()->handle()}", $this->gatherData(['buildamic' => $this, 'field' => $field]))->render();
            }
        }

        // type: markdown, handle:hero-blurb, file: markdown-hero-blurb
        if (View::exists("{$this->viewPrefix}.fields.{$field->type()}-{$field->handle('handle')}")) {
            return View::make("{$this->viewPrefix}.fields.{$field->type()}-{$field->handle('handle')}", $this->gatherData(['buildamic' => $this, 'field' => $field]))->render();
        }

        // type: markdown, file: markdown
        if (View::exists("{$this->viewPrefix}.fields.{$field->type()}")) {
            return View::make("{$this->viewPrefix}.fields.{$field->type()}", $this->gatherData(['buildamic' => $this, 'field' => $field]))->render();
        }

        // catch all, file: default-field
        return View::make("{$this->viewPrefix}.default-field", $this->gatherData(['buildamic' => $this, 'field' => $field]))->render();
    }

    public function renderFieldset(Fields $fieldset)
    {
        $fieldset = Filter::run('buildamic_filter_everything', $fieldset);

        $config = $fieldset->items()->first();
        if (isset($config['import'])) {
            $handle = ($config['prefix'] ?? '').$config['import'];
        } elseif (isset($config['handle']) && is_string($config['field'])) {
            $handle = $config['handle'];
        }

        $fieldset = Filter::run("buildamic_filter_fieldset:{$handle}", $fieldset);

        // handle:blurb, file: blurb
        if (View::exists("{$this->viewPrefix}.fieldsets.{$handle}")) {
            return View::make("{$this->viewPrefix}.fieldsets.{$handle}", $this->gatherData(['buildamic' => $this, 'field' => $fieldset, 'fields' => $fieldset->all()]))->render();
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
        // $set = Filter::run('buildamic_filter_everything', $set);
        // $set = Filter::run("buildamic_filter_set", $set);
        // $set = Filter::run("buildamic_filter_set:{$set->handle()}", $set);

        // handle:blurb, file: blurb
        if (View::exists("{$this->viewPrefix}.sets.{$set->handle()}")) {
            return View::make("{$this->viewPrefix}.sets.{$set->handle()}", $this->gatherData(['buildamic' => $this, 'set' => $set]))->render();
        }

        // catch all, render individual fields.
        $html = '';

        foreach ($set->value()->value()->value()->value() as $field) {
            $html .= $this->renderSingleField($field);
        }

        return $html;
    }
}
