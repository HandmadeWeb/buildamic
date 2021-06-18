<?php

namespace Michaelr0\Buildamic;

use Michaelr0\Buildamic\Fieldtypes\BuildamicFieldType;
use Michaelr0\Buildamic\Traits\Hydration;
use Statamic\Facades\Antlers;

class BuildamicRenderer
{
    use Hydration;

    protected $instance;
    protected $shallowAugment;
    protected $augmentMethod;
    protected $sections = [];

    public function __construct(BuildamicFieldType $fieldInstance, array $value, bool $shallowAugment = false)
    {
        $this->instance = $fieldInstance;
        $this->shallowAugment = $shallowAugment;
        $this->augmentMethod = $this->shallowAugment ? 'shallowAugment' : 'augment';

        $this->instance->field()->setValue($value);
    }

    public function __toString()
    {
        return $this->render();
    }

    public function render()
    {
        $buildamic_html = '';

        foreach ($this->hydrateSections() as $section) {
            $buildamic_html .= $section['type'] === 'section' ? $this->renderSection($section) : $this->renderGlobal($section);
        }

        return $buildamic_html;
    }

    protected function renderGlobal(array $section)
    {
    }

    protected function renderSection(array $section)
    {
        return view('buildamic::blade.layouts.section', ['buildamic' => $this, 'section' => $section]);
    }

    public function renderRow(array $row)
    {
        return view('buildamic::blade.layouts.row', ['buildamic' => $this, 'row' => $row]);
    }

    public function renderColumn(array $column)
    {
        return view('buildamic::blade.layouts.column', ['buildamic' => $this, 'column' => $column]);
    }

    public function renderField(array $field)
    {
        if ($field['type'] === 'set') {
            return $this->renderSet($field);
        }

        $viewPrefix = 'buildamic::blade';
        $fieldHandle = $field['config']['handle'];
        $fieldType = $field['config']['type'];

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

        //$additionalData = $this->additionalData($field->get('value'));
        $additionalData = [];

        return view($view, array_merge(['buildamic' => $this, 'field' => $field], $additionalData));
    }

    public function renderSet(array $set)
    {
        if ($set['type'] === 'field') {
            return $this->renderField($set);
        }

        $viewPrefix = 'buildamic::blade';
        $fieldHandle = $set['config']['handle'];
        $view = "{$viewPrefix}.sets.{$fieldHandle}";

        if (! view()->exists($view)) {
            $buildamic_html = '';
            foreach ($set['value'] as $field) {
                $buildamic_html .= $this->renderField($field);
            }

            return $buildamic_html;
        }

        //$additionalData = $this->additionalData($field->get('value'));
        $additionalData = [];

        return view($view, array_merge(['buildamic' => $this, 'set' => $set], $additionalData));
    }
}
