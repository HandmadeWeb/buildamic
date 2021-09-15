<?php

namespace HandmadeWeb\Buildamic\Fieldtypes;

use Statamic\Fields\Fieldtype;

class BuildamicBase extends Fieldtype
{
    protected static $handle = 'buildamic-base';

    protected $localizable = false;
    protected $validatable = false;
    protected $defaultable = false;
    protected $selectable = false;
    protected $selectableInForms = false;
    protected $categories = [];
    protected $defaultValue;
    protected $icon = 'addons';

    public function defaultValue()
    {
        return $this->defaultValue;
    }

    // Don't display anything on the Collections index page.
    public function preProcessIndex($data)
    {
    }

    /**
     * Pre-process the data before it gets sent to the publish page.
     *
     * @param mixed $data
     * @return array|mixed
     */
    public function preProcess($data)
    {
        if (empty($data)) {
            return $this->defaultValue();
        }

        return $this->processData($data, true);
    }

    /**
     * Process the data before it gets saved.
     *
     * @param mixed $data
     * @return array|mixed
     */
    public function process($data)
    {
        if (! is_array($data)) {
            return $this->defaultValue();
        }

        return $this->processData($data, false);
    }

    /**
     * $preProcess = true: Pre-process the data before it gets sent to the publish page.
     * $preProcess = false: Process the data before it gets saved.
     *
     * @param mixed $data
     * @param bool $preProcess
     * @return array
     */
    protected function processData($data, bool $preProcess = false)
    {
        return $data;
    }

    public function augment($value)
    {
        return $this->performAugmentation($value, false);
    }

    public function shallowAugment($value)
    {
        return $this->performAugmentation($value, true);
    }

    protected function performAugmentation($value, $shallow = false)
    {
        return $value;
    }
}
