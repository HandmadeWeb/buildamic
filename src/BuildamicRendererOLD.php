<?php

namespace Michaelr0\Buildamic;

use Facades\Statamic\Fields\FieldtypeRepository;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Statamic\Facades\Antlers;
use Statamic\Facades\Fieldset;
use Statamic\Fields\Field;
use Statamic\Fields\Value;
use Statamic\Fieldtypes\Sets;
use Statamic\View\Antlers\Parser as AntlersParser;

class BuildamicRendererOLD
{
    // // Default Engine
    // protected $defaultViewEngine = 'blade';

    // // Allowed Engines
    // protected $compatibleViewEngines = [
    //     'blade',
    //     //'antlers',
    // ];

    protected $config;
    protected $sections;
    protected $shallow;
    protected $blueprint;

    public function __construct(Value $value, array $config, bool $shallow = false)
    {
        $this->config = collect([]);
        $this->sections = collect([]);
        $this->blueprint = $value;
        $this->shallow = $shallow;

        //$this->config = $this->collectRecursive($this->config->mergeRecursive(collect($config)));
        $this->sections = $this->collectRecursive($this->sections->mergeRecursive(collect($value->raw())));
    }

    protected function collectRecursive($collection)
    {
        if ($collection instanceof Collection) {
            return $collection->map(function ($value) {
                if (is_array($value) && isset($value['type']) && in_array($value['type'], ['field', 'fieldset'])) {
                    return collect($value);
                }

                if (is_array($value) || is_object($value)) {
                    return $this->collectRecursive(collect($value));
                }

                return $value;
            });
        }

        return $collection;
    }

    public function __toString(): string
    {
        return $this->render();
    }

    public function render(): string
    {
        $buildamic_html = '';

        foreach ($this->sections as $section) {
            $buildamic_html .= $section->get('type') === 'section' ? $this->renderSection($section) : $this->renderGlobal($section);
        }

        return $buildamic_html;
    }

    public function renderSection(Collection $section)
    {
        return view('buildamic::blade.layouts.section', ['buildamic' => $this, 'section' => $section]);
    }

    public function renderGlobal(Collection $section)
    {
    }

    public function renderRow(Collection $row)
    {
        return view('buildamic::blade.layouts.row', ['buildamic' => $this, 'row' => $row]);
    }

    public function renderColumn(Collection $column)
    {
        return view('buildamic::blade.layouts.column', ['buildamic' => $this, 'column' => $column]);
    }

    public function renderFieldSet(Collection $fieldset)
    {
        $html = '';
        foreach ($fieldset->get('value') as $field) {
            $html .= $this->renderField(collect([
                'uuid' => $field->handle(),
                'config' => collect([
                    'type' => $field->field()->type(),
                    'handle' => $field->handle(),
                ]),
                'value' => $field,
            ]));
        }

        return $html;
    }

    public function renderField(Collection $field)
    {
        if ($field->get('type') === 'fieldset') {
            return $this->renderFieldSet($field);
        }

        $viewPrefix = 'buildamic::blade';
        $fieldHandle = $field->get('config')->get('handle');
        $fieldType = $field->get('config')->get('type');

        // type: markdown, handle:hero-blurb, file: markdown-hero-blurb
        if (view()->exists("{$viewPrefix}.fields.{$fieldType}-{$fieldHandle}")) {
            $view = "{$viewPrefix}.fields.{$fieldType}-{$fieldHandle}";
        }
        // type: markdown, file: markdown
        elseif (view()->exists("{$viewPrefix}.fields.{$fieldType}")) {
            $view = "{$viewPrefix}.fields.{$fieldType}";
        }
        // catch all, file:default-field
        else {
            $view = "{$viewPrefix}.default-field";
        }

        $additionalData = $this->additionalData($field->get('value'));

        return view($view, array_merge(['buildamic' => $this, 'field' => $field], $additionalData));
    }

    protected function additionalData($field)
    {
        if ($field->value() instanceof \Statamic\Forms\Form) {
            return ['form' => $field->value()];
        }

        return [];
    }
}
