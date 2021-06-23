<?php

namespace Michaelr0\Buildamic\Fieldtypes;

use Michaelr0\Buildamic\Fields\Field;

class BuildamicRow extends BuildamicBase
{
    protected static $handle = 'buildamic-row';

    protected function performAugmentation($value, $shallow = false)
    {
        $parent = $this;

        $method = $shallow ? 'shallowAugment' : 'augment';

        $value = collect($value)->map(function ($column) use ($parent, $method) {
            if (isset($column['config']['enabled']) && ! $column['config']['enabled']) {
                return;
            }

            return (new Field($column['uuid'], []))
                ->setConfig(array_merge(['type' => 'buildamic-column'], $column['config']))
                ->setParent($parent->field()->parent())
                ->setParentField($parent->field())
                ->setValue($column['value'])
                ->{$method}()->value();
        })->filter()->all();

        return $this->field()->setValue($value)->value();
    }
}
