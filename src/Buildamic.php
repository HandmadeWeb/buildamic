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

    public function render($content = null)
    {
        return $this->renderSection($content);
    }

    public function renderSection($content)
    {
        return view("buildamic::{$this->viewEngine}.section", []);
    }
}
