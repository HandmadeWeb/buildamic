<?php

namespace Michaelr0\Buildamic;

class Buildamic
{
    // Default Engine
    protected $viewEngine = 'blade';

    // Allowed Engines
    protected $compatibleViewEngines = [
        'blade',
        'antlers',
    ];

    public function __construct(string $viewEngine = 'blade')
    {
        if (in_array($viewEngine, $this->compatibleViewEngines)) {
            $this->viewEngine = $viewEngine;
        }
    }

    public static function withBlade()
    {
        return new static('blade');
    }

    public static function withAntlers()
    {
        return new static('antlers');
    }

    public function render($content = [])
    {
        $buildamic_html = '';

        if (is_array($content)) {
            foreach ($content as $part) {
                if ($part['type'] === 'section') {
                    $buildamic_html .= $this->renderSection($part);
                } elseif ($part['type'] === 'row') {
                    $buildamic_html .= $this->renderRow($part);
                } elseif ($part['type'] === 'column') {
                    $buildamic_html .= $this->renderColumn($part);
                } elseif ($part['type'] === 'field') {
                    $buildamic_html .= $this->renderField($part);
                } elseif ($part['type'] === 'set') {
                    //$buildamic_html .= $this->renderField($part);
                }
            }
        }

        return $buildamic_html;
    }

    public function renderSection($section = [])
    {
        return view("buildamic::{$this->viewEngine}.section", ['section' => $section]);
    }

    public function renderRow($row = [])
    {
        return view("buildamic::{$this->viewEngine}.row", ['row' => $row]);
    }

    public function renderColumn($column = [])
    {
        return view("buildamic::{$this->viewEngine}.column", ['column' => $column]);
    }

    public function renderField($field = [])
    {
        return view("buildamic::{$this->viewEngine}.fields.{$field['config']['field']['type']}", ['field' => $field]);
    }
}
