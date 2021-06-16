<?php

namespace Michaelr0\Buildamic;

use Illuminate\Support\Arr;

class BuildamicOLD
{
    // Default Engine
    protected $defaultViewEngine = 'blade';

    // Allowed Engines
    protected $compatibleViewEngines = [
        'blade',
        //'antlers',
    ];

    /**
     * Define the Instance Store.
     *
     * @var array
     */
    protected $instance = [
        'config' => [],
        'sections' => [],
    ];

    /**
     * Undocumented function.
     *
     * @param mixed $config
     */
    public function __construct($config)
    {
        if ($config instanceof \Statamic\Fields\Value) {
            $this->set($config->value());
        } elseif (is_array($config)) {
            $this->set($config);
        }

        if (! $this->has('config.view_engine') || $this->has('config.view_engine') && ! in_array($this->get('config.view_engine'), $this->compatibleViewEngines)) {
            $this->set('config.view_engine', $this->defaultViewEngine);
        }
    }

    /**
     * Undocumented function.
     *
     * @return string
     */
    public function __toString(): string
    {
        return $this->render();
    }

    /** View Engine Selectors */

    /**
     * @return static
     */
    public function withBlade(): static
    {
        $this->set('viewEngine', 'blade');

        return $this;
    }

    /** View Engine Selectors */

    /** Config Helpers */

    /**
     * Determine if the given configuration value exists.
     *
     * @param  string  $key
     * @return bool
     */
    public function has($key): bool
    {
        return Arr::has($this->instance, $key);
    }

    /**
     * Get the specified configuration value.
     *
     * @param  array|string  $key
     * @param  mixed  $default
     * @return mixed
     */
    public function get($key, $default = null)
    {
        if (is_array($key)) {
            return $this->getMany($key);
        }

        return Arr::get($this->instance, $key, $default);
    }

    /**
     * Get many configuration values.
     *
     * @param  array  $keys
     * @return array
     */
    public function getMany($keys): array
    {
        $config = [];

        foreach ($keys as $key => $default) {
            if (is_numeric($key)) {
                [$key, $default] = [$default, null];
            }

            $config[$key] = Arr::get($this->instance, $key, $default);
        }

        return $config;
    }

    /**
     * Set a given configuration value.
     *
     * @param  array|string  $key
     * @param  mixed  $value
     * @return static
     */
    public function set($key, $value = null): static
    {
        $keys = is_array($key) ? $key : [$key => $value];

        foreach ($keys as $key => $value) {
            Arr::set($this->instance, $key, $value);
        }

        return $this;
    }

    /**
     * Push a value onto an array configuration value.
     *
     * @param  string  $key
     * @param  mixed  $value
     * @return static
     */
    public function push($key, $value): static
    {
        $array = $this->get($key);

        $array[] = $value;

        $this->set($key, $array);

        return $this;
    }

    /**
     * Get all of the configuration items for the application.
     *
     * @return array
     */
    public function config(): array
    {
        return $this->instance;
    }

    /** Config Helpers */

    /**
     * Undocumented function.
     *
     * @throws \Exception
     */
    protected function checkExceptions()
    {
        if (! $this->has('sections')) {
            throw new \Exception('Buildamic requires content sections.');
        } elseif (! is_array($this->get('sections'))) {
            throw new \Exception('Buildamic requires sections to be an array. '.gettype($this->get('sections')).' was given.');
        }
    }

    /**
     * Undocumented function.
     *
     * @return string
     *
     * @throws \Exception
     */
    public function render(): string
    {
        $this->checkExceptions();

        $buildamic_html = '';

        foreach ($this->get('sections') as $part) {
            $buildamic_html .= $this->renderLayoutPart($part);
        }

        return $buildamic_html;
    }

    /**
     * Undocumented function.
     *
     * @param array $part
     * @return void|string
     */
    public function renderLayoutPart($part = [])
    {
        if (empty($part)) {
            return;
        }

        $view_engine = $this->get('config.view_engine');
        $part_type = $part['type'];

        return view("buildamic::{$view_engine}.layouts.{$part_type}", ['buildamic' => $this, $part_type => $part]);
    }

    /**
     * Undocumented function.
     *
     * @param array $field
     * @return void|string
     */
    public function renderField($field = [])
    {
        if (empty($field) || empty($field['config']['type']) || $field['type'] === 'set') { // disable sets for now
            return;
        }

        $view_engine = $this->get('config.view_engine');
        $field_template = $field['config']['type'] ?? $field['value']['type'];

        return view("buildamic::{$view_engine}.fields.{$field_template}", ['buildamic' => $this, 'field' => $field]);
    }
}
