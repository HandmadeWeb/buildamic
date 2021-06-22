<?php

namespace Michaelr0\Buildamic;

use Michaelr0\Buildamic\Fieldtypes\Buildamic;
use Michaelr0\Buildamic\Traits\Hydration;
use Statamic\Facades\Antlers;
use Statamic\Fields\Field;
use Statamic\Fields\Value;

class BuildamicRenderer
{
    protected $instance;
    protected $sections = [];
    protected $viewPrefix = 'buildamic::blade';

    public function __construct(Buildamic $fieldInstance, bool $shallowAugment = false)
    {
        $this->instance = $fieldInstance->field();
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

    public function renderField(Field $field)
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

        return view($view, ['buildamic' => $this, 'field' => $field->value()]);
    }

    // public function renderSet(array $set)
    // {
    //     if ($set['type'] === 'field') {
    //         return $this->renderField($set);
    //     }

    //     $viewPrefix = 'buildamic::blade';
    //     $fieldHandle = $set['config']['handle'];
    //     $view = "{$this->viewPrefix}.sets.{$fieldHandle}";

    //     if (! view()->exists($view)) {
    //         $buildamic_html = '';
    //         foreach ($set['value'] as $field) {
    //             $buildamic_html .= $this->renderField($field);
    //         }

    //         return $buildamic_html;
    //     }

    //     //$additionalData = $this->additionalData($field->get('value'));
    //     $additionalData = [];

    //     return view($view, array_merge(['buildamic' => $this, 'set' => $set], $additionalData));
    // }
}
