<?php

namespace Michaelr0\Buildamic\Fieldtypes;

use Michaelr0\Buildamic\Fields\Field;

class BuildamicSection extends BuildamicBase
{
    protected static $handle = 'buildamic-section';

    protected function performAugmentation($value, $shallow = false)
    {
        $parent = $this;

        $method = $shallow ? 'shallowAugment' : 'augment';

        $value = collect($value)->map(function ($row) use ($parent, $method) {
            if (isset($row['config']['enabled']) && ! $row['config']['enabled']) {
                return;
            }

            return (new Field($row['uuid'], []))
                ->setConfig(array_merge(['type' => 'buildamic-row'], $row['config']))
                ->setParent($parent->field()->parent())
                ->setParentField($parent->field())
                ->setValue($row['value'])
                ->{$method}()->value();
        })->filter()->all();

        return $this->field()->setValue($value)->value();
    }
}
