<?php

namespace HandmadeWeb\Buildamic\Fieldtypes;

use HandmadeWeb\Buildamic\Fields\Field;

class BuildamicSection extends BuildamicBase
{
    protected static $handle = 'buildamic-section';
    protected $defaultValue = [];

    /**
     * $preProcess = true: Pre-process the data before it gets sent to the publish page.
     * $preProcess = false: Process the data before it gets saved.
     *
     * @param mixed $data
     *
     * @return array
     */
    protected function processData($data, bool $preProcess = false)
    {
        $method = $preProcess ? 'preProcess' : 'process';

        return collect($data)->map(function ($row) use ($method) {
            $row['value'] = (new Field($row['uuid'], []))
                ->setConfig(array_merge(['type' => 'buildamic-row'], $row['config']))
                ->setBuildamicSettings($row['config']['buildamic_settings'] ?? [])
                ->setParent($this->field()->parent())
                ->setParentField($this->field())
                ->setValue($row['value'])
                ->{$method}()
                ->value() ?? [];

            return $row;
        })->toArray();
    }

    protected function performAugmentation($value, $shallow = false)
    {
        $method = $shallow ? 'shallowAugment' : 'augment';

        $value = collect($value)->map(function ($row) use ($method) {
            if (isset($field['config']['buildamic_settings']['enabled']) && !$field['config']['buildamic_settings']['enabled']) {
                return;
            }

            return (new Field($row['uuid'], []))
                ->setConfig(array_merge(['type' => 'buildamic-row'], $row['config']))
                ->setBuildamicSettings($row['config']['buildamic_settings'] ?? [])
                ->setParent($this->field()->parent())
                ->setParentField($this->field())
                ->setValue($row['value'])
                ->{$method}();
        })->filter()->all();

        return $this->field()->setValue($value)->value();
    }
}
