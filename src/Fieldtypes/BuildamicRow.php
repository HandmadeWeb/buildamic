<?php

namespace Michaelr0\Buildamic\Fieldtypes;

use Statamic\Fields\Field;
use Statamic\Fields\Fieldtype;

class BuildamicRow extends Fieldtype
{
    protected static $handle = 'buildamic-row';

    protected $localizable = false;
    protected $validatable = false;
    protected $defaultable = false;
    protected $selectable = false;
    protected $selectableInForms = false;
    protected $categories = [];

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
        $parent = $this;

        $method = $shallow ? 'shallowAugment' : 'augment';

        $value = collect($value)->map(function ($column) use ($parent, $method) {
            if (! $column['config']['enabled'] ?? false) {
                return;
            }

            return (new Field($column['uuid'], []))
                ->setConfig(array_merge(
                    [
                        'type' => 'buildamic-column',
                    ],
                    collect($column['config'])
                    ->except(['admin_label'])
                    ->toArray()
                ))
                ->setParent($parent->field()->parent())
                ->setParentField($parent->field())
                ->setValue($column['value'])
                ->{$method}()->value();
        })->filter()->all();

        return $this->field()->setValue($value)->value();
    }
}
