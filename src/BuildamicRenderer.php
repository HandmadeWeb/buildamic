<?php

namespace HandmadeWeb\Buildamic;

use Exception;
use Facades\Statamic\View\Cascade;
use HandmadeWeb\Buildamic\Fields\Field;
use HandmadeWeb\Buildamic\Fields\Fields;
use HandmadeWeb\Buildamic\Fieldtypes\Buildamic;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\View;
use Statamic\Entries\Entry as StatamicEntry;
use Statamic\Facades\Entry;

class BuildamicRenderer
{
    protected $augmentMethod;
    protected $cascade;
    protected $data = [];
    protected $containerId;
    protected $containerClass;
    protected $instance;
    protected $sections = [];
    protected $viewPrefix;

    public function __construct(Buildamic $fieldInstance, bool $shallowAugment = false)
    {
        $this->instance = $fieldInstance;
        $this->augmentMethod = $shallowAugment ? 'shallowAugment' : 'augment';
        $this->viewPrefix = 'buildamic::';
        $this->containerId = $this->instance->field()->get('container_id');
        $this->containerClass = $this->instance->field()->get('container_class');
        $this->sections = $this->instance->field()->value();
    }

    protected function cascade()
    {
        return $this->cascade = $this->cascade ?? Cascade::instance()
            ->hydrate()
            ->toArray();
    }

    public function containerId(string $id = '')
    {
        if (!empty($id)) {
            $this->containerId = $id;
        }

        return $this->containerId;
    }

    public function containerClass(string $class = '')
    {
        if (!empty($class)) {
            $this->containerClass = $class;
        }

        return $this->containerClass;
    }

    public function sections()
    {
        return $this->sections;
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
        return View::make("{$this->viewPrefix}.layouts.container", array_merge(
            $this->cascade(),
            [
                'buildamic' => $this,
                'sections' => $this->sections(),
            ]
        ))->render();
    }

    protected function checkFieldType(Field $field, array $types =[])
    {
        if (!in_array($field->type(), $types)) {
            $types = implode(', ', $types);
            throw new Exception("Invalid FieldType: expected {$types} but received {$field->type()}");
        }
    }

    public function renderSection(Field $section)
    {
        $this->checkFieldType($section, ['buildamic-section']);

        $section = Filter::run('buildamic_filter_everything', $section);
        $section = Filter::run('buildamic_filter_section', $section);

        return View::make("{$this->viewPrefix}.layouts.section", array_merge(
            $this->cascade(),
            [
                'buildamic' => $this,
                'section' => $section,
            ]
        ))->render();
    }

    protected function renderFieldFromGlobalEntry(StatamicEntry $entry, Field $section)
    {
        $this->checkFieldType($section, ['buildamic-global-section']);

        if ($entry->has('buildamic')) {
            $content = optional($entry->augmentedValue('buildamic'))->value();
        } else {
            $content = optional($entry->augmentedValue('content'))->value();
        }

        if (isset($content) && $content instanceof self) {
            $content->containerId($section->buildamicSetting('attributes.id', ''));
            $content->containerClass($section->computedAttribute('class', ''));

            return $content->render();
        }
    }

    public function renderGlobalSection(Field $section)
    {
        $this->checkFieldType($section, ['buildamic-global-section']);

        $section = Filter::run('buildamic_filter_everything', $section);
        $section = Filter::run('buildamic_filter_global_section', $section);

        $globals = collect($section->value()->raw());

        if ($global = Entry::find($globals->first())) {
            return $this->renderFieldFromGlobalEntry($global, $section);
        }

        // Maybe if we wanted to allow more than one global?
        // $globals = Entry::query()->whereIn('id', $globals->toArray())->get();

        // return $globals->map(function ($global) {
        //     return $this->renderFieldFromGlobalEntry($global, $section);
        // })->implode('');
    }

    public function renderRow(Field $row)
    {
        $this->checkFieldType($row, ['buildamic-row']);

        $row = Filter::run('buildamic_filter_everything', $row);
        $row = Filter::run('buildamic_filter_row', $row);

        return View::make("{$this->viewPrefix}.layouts.row", array_merge(
            $this->cascade(),
            [
                'buildamic' => $this,
                'row' => $row,
            ]
        ))->render();
    }

    public function renderColumn(Field $column)
    {
        $this->checkFieldType($column, ['buildamic-column']);

        $column = Filter::run('buildamic_filter_everything', $column);
        $column = Filter::run('buildamic_filter_column', $column);

        return View::make("{$this->viewPrefix}.layouts.column", array_merge(
            $this->cascade(),
            [
                'buildamic' => $this,
                'column' => $column,
            ]
        ))->render();
    }

    public function renderField(Field|Fields $field)
    {
        if ($field instanceof Field && 'sets' === $field->type()) {
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

        // type: collections, collection: sponsors, file: collections-sponsors
        if ('collections' === $field->type()) {
            $field = $field->{$this->augmentMethod}()
                ->setComputedAttributes($field->computedAttributes());

            if ($field->value()->value() instanceof Collection) {
                $collectionHandle = $field->value()->value()->first()->handle();
            } else {
                $collectionHandle = $field->value()->value()->handle();
            }

            if (view()->exists("{$this->viewPrefix}.fields.{$field->type()}-{$collectionHandle}")) {
                return View::make("{$this->viewPrefix}.fields.{$field->type()}-{$collectionHandle}", array_merge(
                    $this->cascade(),
                    [
                        'buildamic' => $this, 'field' => $field,
                    ]
                ))->render();
            }
        }

        // type: markdown, handle:hero-blurb, file: markdown-hero-blurb
        if (view()->exists("{$this->viewPrefix}.fields.{$field->type()}-{$field->handle('handle')}")) {
            $field = $field->{$this->augmentMethod}()
                ->setComputedAttributes($field->computedAttributes());

            return View::make("{$this->viewPrefix}.fields.{$field->type()}-{$field->handle('handle')}", array_merge(
                $this->cascade(),
                [
                    'buildamic' => $this,
                    'field' => $field,
                ]
            ))->render();
        }

        // type: markdown, file: markdown
        if (view()->exists("{$this->viewPrefix}.fields.{$field->type()}")) {
            $field = $field->{$this->augmentMethod}()
                ->setComputedAttributes($field->computedAttributes());

            return View::make("{$this->viewPrefix}.fields.{$field->type()}", array_merge(
                $this->cascade(),
                [
                    'buildamic' => $this,
                    'field' => $field,
                ]
            ))->render();
        }

        // catch all, file: default-field
        return View::make("{$this->viewPrefix}.default-field", array_merge(
            $this->cascade(),
            [
                'buildamic' => $this,
                'field' => $field,
            ]
        ))->render();
    }

    public function renderFieldset(Fields $fieldset)
    {
        $fieldset = $fieldset->{$this->augmentMethod}()
            ->setComputedAttributes($fieldset->computedAttributes());

        $fields = $fieldset->all();

        $fieldset = Filter::run('buildamic_filter_everything', $fieldset);

        $config = $fieldset->items()->first();
        if (isset($config['import'])) {
            $handle = ($config['prefix'] ?? '').$config['import'];
        } elseif (isset($config['handle']) && is_string($config['field'])) {
            $handle = $config['handle'];
        }

        $fieldset = Filter::run("buildamic_filter_fieldset:{$handle}", $fieldset);

        // handle:blurb, file: blurb
        if (view()->exists("{$this->viewPrefix}.fieldsets.{$handle}")) {
            return View::make("{$this->viewPrefix}.fieldsets.{$handle}", array_merge(
                $this->cascade(),
                [
                    'buildamic' => $this,
                    'fieldset' => $fieldset,
                    'fields' => $fields,
                ]
            ))->render();
        }

        // catch all, render individual fields.
        $html = '';

        foreach ($fields as $field) {
            $html .= $this->renderSingleField($field);
        }

        return $html;
    }

    public function renderSet(Field $set)
    {
        $this->checkFieldType($set, ['sets']);

        $set = Filter::run('buildamic_filter_everything', $set);
        $set = Filter::run('buildamic_filter_set', $set);
        $set = Filter::run("buildamic_filter_set:{$set->handle()}", $set);

        $values = $set->value();
        $values = is_array($values) ? $values : [];

        $set = $set->{$this->augmentMethod}()
            ->setComputedAttributes($set->computedAttributes());

        // Build Fields
        $fields = $this->instance->set($set->handle());
        $fields = $fields
            ->setBuildamicSettings($set->buildamicSettings())
            ->setParent($set->parent())
            ->setParentField($set)
            ->addValues($values)
            ->{$this->augmentMethod}()
            ->all();

        // handle:blurb, file: blurb
        if (view()->exists("{$this->viewPrefix}.sets.{$set->handle()}")) {
            return View::make("{$this->viewPrefix}.sets.{$set->handle()}", array_merge(
                $this->cascade(),
                [
                    'buildamic' => $this,
                    'set' => $set,
                    'fields' => $fields,
                ]
            ))->render();
        }

        // catch all, render individual fields.
        $html = '';

        foreach ($fields as $field) {
            $html .= $this->renderSingleField($field);
        }

        return $html;
    }
}
