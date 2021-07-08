<?php

namespace Michaelr0\Buildamic\Fieldtypes;

use Michaelr0\Buildamic\Fields\Field;

class BuildamicRow extends BuildamicBase
{
    protected static $handle = 'buildamic-row';

    /**
     * $preProcess = true: Pre-process the data before it gets sent to the publish page.
     * $preProcess = true: Process the data before it gets saved.
     *
     * @param mixed $data
     * @param bool $preProcess
     * @return array
     */
    protected function processData($data, bool $preProcess = false)
    {
        $method = $preProcess ? 'preProcess' : 'process';

        return collect($data)->map(function ($column) use ($method) {
            $column['value'] = (new Field($column['uuid'], []))
                ->setConfig(array_merge(['type' => 'buildamic-column'], $column['config']))
                ->setBuildamicSettings($column['config']['buildamic_settings'] ?? [])
                ->setParent($this->field()->parent())
                ->setParentField($this->field())
                ->setValue($column['value'])
                ->{$method}()
                ->value() ?? [];

            return $column;
        })->toArray();
    }

    protected function performAugmentation($value, $shallow = false)
    {
        $method = $shallow ? 'shallowAugment' : 'augment';

        $value = collect($value)->map(function ($column) use ($method) {
            if (isset($field['config']['buildamic_settings']['enabled']) && ! $field['config']['buildamic_settings']['enabled']) {
                return;
            }

            return (new Field($column['uuid'], []))
                ->setConfig(array_merge(['type' => 'buildamic-column'], $column['config']))
                ->setBuildamicSettings($column['config']['buildamic_settings'] ?? [])
                ->setParent($this->field()->parent())
                ->setParentField($this->field())
                ->setValue($column['value'])
                ->{$method}();
        })->filter()->all();

        return $this->field()->setValue($value)->value();
    }
}
