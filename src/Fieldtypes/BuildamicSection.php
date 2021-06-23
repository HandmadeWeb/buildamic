<?php

namespace Michaelr0\Buildamic\Fieldtypes;

use Statamic\Fields\Field;
use Statamic\Fields\Fieldtype;

class BuildamicSection extends Fieldtype
{
    protected static $handle = 'buildamic-section';

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

        $value = collect($value)->map(function ($row) use ($parent, $method) {
            if (! $row['config']['enabled'] ?? false) {
                return;
            }

            return (new Field($row['uuid'], []))
            ->setConfig(array_merge(
                [
                    'type' => 'buildamic-row',
                ],
                collect($row['config'])
                ->except(['admin_label'])
                ->toArray()
            ))
            ->setParent($parent->field()->parent())
            ->setParentField($parent->field())
            ->setValue($row['value'])
            ->{$method}()->value();
        })->filter()->all();

        return $this->field()->setValue($value)->value();
    }
}