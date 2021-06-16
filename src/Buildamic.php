<?php

namespace Michaelr0\Buildamic;

use Facades\Statamic\Fields\FieldtypeRepository;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Statamic\Facades\Antlers;
use Statamic\Fields\Field;
use Statamic\Fields\Value;
use Statamic\View\Antlers\Parser as AntlersParser;

class Buildamic
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

    public function __construct(Value $value, array $config, bool $shallow = false)
    {
        $this->config = collect([]);
        $this->sections = collect([]);
        $this->shallow = $shallow;

        $this->config = $this->collectRecursive($this->config->mergeRecursive(collect($config)));
        $this->sections = $this->collectRecursive($this->sections->mergeRecursive(collect($value->raw())));
    }

    protected function collectRecursive($collection)
    {
        if ($collection instanceof Collection) {
            return $collection->map(function ($value) {
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

    public function renderField(Collection $field)
    {
        $field->transform(function ($value, $key) use ($field) {
            if ($key === 'value') {
                $method = $this->shallow ? 'shallowAugment' : 'augment';
                $_config = $this->config->get('fields')->where('handle', $field->get('config')->get('handle'))->first();
                $_field = (new Field($_config->get('handle'), $_config->get('field')->toArray()))->setValue($value)->{$method}();
                $_value = $_field->value();

                return (method_exists($_value, 'shouldParseAntlers') && $_value->shouldParseAntlers()) ? Antlers::parse($_value) : $_value;
            }

            return $value;
        });

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

        return view($view, ['buildamic' => $this, 'field' => $field]);
    }
}
