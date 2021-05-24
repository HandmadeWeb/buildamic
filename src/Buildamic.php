<?php

namespace Michaelr0\Buildamic;

use Illuminate\Support\Arr;

class Buildamic
{
    // Default Engine
    protected $defaultViewEngine = 'blade';

    // Allowed Engines
    protected $compatibleViewEngines = [
        'blade',
        //'antlers',
    ];

    /**
     * All of the configuration items.
     *
     * @var array
     */
    protected $config = [];

    public function __construct($config)
    {
        if ($config instanceof \Statamic\Fields\Value) {
            $this->set('content', $config->raw());
        } elseif (is_array($config)) {
            $this->set($config);
        }

        if (! $this->has('viewEngine') || $this->has('viewEngine') && ! in_array($this->get('viewEngine'), $this->compatibleViewEngines)) {
            $this->set('viewEngine', $this->defaultViewEngine);
        }
    }

    public function __toString()
    {
        return $this->render();
    }

    /** View Engine Selectors */
    public function withBlade()
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
    public function has($key)
    {
        return Arr::has($this->config, $key);
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

        return Arr::get($this->config, $key, $default);
    }

    /**
     * Get many configuration values.
     *
     * @param  array  $keys
     * @return array
     */
    public function getMany($keys)
    {
        $config = [];

        foreach ($keys as $key => $default) {
            if (is_numeric($key)) {
                [$key, $default] = [$default, null];
            }

            $config[$key] = Arr::get($this->config, $key, $default);
        }

        return $config;
    }

    /**
     * Set a given configuration value.
     *
     * @param  array|string  $key
     * @param  mixed  $value
     * @return Buildamic
     */
    public function set($key, $value = null)
    {
        $keys = is_array($key) ? $key : [$key => $value];

        foreach ($keys as $key => $value) {
            Arr::set($this->config, $key, $value);
        }

        return $this;
    }

    /**
     * Push a value onto an array configuration value.
     *
     * @param  string  $key
     * @param  mixed  $value
     * @return Buildamic
     */
    public function push($key, $value)
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
    public function config()
    {
        return $this->config;
    }

    /** Config Helpers */

    /**
     * Undocumented function.
     *
     * @throws \Exception
     */
    protected function checkExceptions()
    {
        if (! $this->has('content') || empty($this->get('content'))) {
            throw new \Exception('Buildamic requires content.');
        }
    }

    /**
     * Undocumented function.
     *
     * @return string
     *
     * @throws \Exception
     */
    public function render()
    {
        $this->checkExceptions();

        $buildamic_html = '';

        if (is_array($this->get('content'))) {
            foreach ($this->get('content') as $part) {
                $buildamic_html .= $this->renderLayoutPart($part);
            }
        }

        return $buildamic_html;
    }

    public function renderLayoutPart($part = [])
    {
        if (empty($part)) {
            return;
        }

        return view('buildamic::'.$this->get('viewEngine').".{$part['type']}", ['buildamic' => $this, $part['type'] => $part]);
    }

    public function renderField($field = [])
    {
        if (empty($field) || empty($field['config'])) {
            return;
        }

        $fieldTemplate = $field['config']['field']['type'] ?? $field['value']['type'];

        return view('buildamic::'.$this->get('viewEngine').".fields.{$fieldTemplate}", ['buildamic' => $this, 'field' => $field]);
    }
}
