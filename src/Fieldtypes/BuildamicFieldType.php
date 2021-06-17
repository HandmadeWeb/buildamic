<?php

namespace Michaelr0\Buildamic\Fieldtypes;

use Michaelr0\Buildamic\BuildamicRenderer;
use Statamic\Fields\Fields;
use Statamic\Fields\Fieldtype;

class BuildamicFieldType extends Fieldtype
{
    protected static $handle = 'buildamic';

    protected function configFieldItems(): array
    {
        return [
            'fields' => [
                'display' => __('Fields'),
                'type' => 'fields',
            ],
            'sets' => [
                'display' => __('Sets'),
                'type' => 'sets',
            ],
        ];
    }

    /**
     * The blank/default value.
     *
     * @return array
     */
    public function defaultValue()
    {
        return [];
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

        return $data;
    }

    /**
     * Process the data before it gets saved.
     *
     * @param mixed $data
     * @return array|mixed
     */
    public function process($data)
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

    private function performAugmentation($value, $shallow = false)
    {
        //$method = $shallow ? 'shallowAugment' : 'augment';

        return new BuildamicRenderer($this, $value, $shallow);
    }

    public function fields()
    {
        return new Fields($this->config('fields'), $this->field()->parent(), $this->field());
    }

    public function fieldset($setHandle)
    {
        return new Fields($this->config("sets.{$setHandle}.fields"), $this->field()->parent(), $this->field());
    }
}
