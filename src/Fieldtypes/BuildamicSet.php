<?php

namespace Michaelr0\Buildamic\Fieldtypes;

use Statamic\Fields\Field;
use Statamic\Fields\Fields;
use Statamic\Fields\Fieldtype;
use Statamic\Fields\Value;

class BuildamicSet extends Fieldtype
{
    protected static $handle = 'buildamic-set';

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

        $buildamicConfig = $parent->field()->parentField()->parentField()->parentField()->parentField()->config();
        $setConfg = collect($buildamicConfig['sets'][$this->config('config.handle')]['fields'] ?? []);

        $fields = [];

        foreach ($value as $handle => $value) {
            $config = array_merge($setConfg->firstWhere('handle', $handle)['field'] ?? [], $this->config("config.field.{$handle}") ?? []);

            $fields[] = (new Field($handle, []))
                ->setConfig($config)
                ->setParent($parent->field()->parent())
                ->setParentField($parent->field())
                ->setValue($value)
                ->{$method}();
        }

        $value = (new Field($this->handle(), []))
            ->setConfig(array_merge($this->config(), ['type' => 'sets']))
            ->setParent($parent->field()->parent())
            ->setParentField($parent->field())
            ->setValue($fields)
            ->{$method}();

        return $this->field()->setValue($value)->value();
    }
}
