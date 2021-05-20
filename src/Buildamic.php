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
                if (in_array($part['type'], ['section', 'row', 'column'])) {
                    $buildamic_html .= $this->renderLayoutPart($part);
                } elseif ($part['type'] === 'field') {
                    $buildamic_html .= $this->renderField($part);
                } elseif ($part['type'] === 'set') {
                    //$buildamic_html .= $this->renderField($part);
                }
            }
        }

        return $buildamic_html;
    }

    public function renderLayoutPart($part = [])
    {
        if (empty($part)) {
            return;
        }

        return view("buildamic::{$this->viewEngine}.{$part['type']}", ["{$part['type']}" => $part]);
    }

    public function renderField($field = [])
    {
        if (empty($field)) {
            return;
        }

        return view("buildamic::{$this->viewEngine}.fields.{$field['config']['field']['type']}", ['field' => $field]);
    }
}
