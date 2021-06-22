<?php

namespace Michaelr0\Buildamic;

use Michaelr0\Buildamic\Fieldtypes\Buildamic;
use Michaelr0\Buildamic\Traits\Hydration;
use Statamic\Facades\Antlers;
use Statamic\Fields\Field;
use Statamic\Fields\Value;

class BuildamicRenderer
{
    use Hydration;

    protected $instance;
    protected $shallowAugment;
    protected $augmentMethod;
    protected $sections = [];

    public function __construct(Buildamic $fieldInstance, bool $shallowAugment = false)
    {
        $this->instance = $fieldInstance->field();
        $this->sections = $this->instance->value();

        $this->shallowAugment = $shallowAugment;
        $this->augmentMethod = $this->shallowAugment ? 'shallowAugment' : 'augment';
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
        $buildamic_html = '';

        foreach ($this->sections() as $section) {
            $buildamic_html .= $this->renderSection($section);
        }

        return $buildamic_html;
    }

    public function renderSection(Value $section)
    {
        return view('buildamic::blade.layouts.section', ['buildamic' => $this, 'section' => $section]);
    }

    public function renderRow(Value $row)
    {
        return view('buildamic::blade.layouts.row', ['buildamic' => $this, 'row' => $row]);
    }

    public function renderColumn(Value $column)
    {
        return view('buildamic::blade.layouts.column', ['buildamic' => $this, 'column' => $column]);
    }

    public function renderField(Field $field)
    {
        $viewPrefix = 'buildamic::blade';

        // type: markdown, handle:hero-blurb, file: markdown-hero-blurb
        if (view()->exists("{$viewPrefix}.fields.{$field->type()}-{$field->handle('handle')}")) {
            $view = "{$viewPrefix}.fields.{$field->type()}-{$field->handle('handle')}";
        }
        // type: markdown, file: markdown
        elseif (view()->exists("{$viewPrefix}.fields.{$field->type()}")) {
            $view = "{$viewPrefix}.fields.{$field->type()}";
        }
        // catch all, file:default-field
        else {
            $view = "{$viewPrefix}.default-field";
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
    //     $view = "{$viewPrefix}.sets.{$fieldHandle}";

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
