<?php

namespace Michaelr0\Buildamic\Fields;

use Michaelr0\Buildamic\Traits\buildamicSettings;
use Michaelr0\Buildamic\Traits\computedProperties;
use Statamic\Fields\Fields as StatamicFields;

class Fields extends StatamicFields
{
    use buildamicSettings;
    use computedProperties;

    public function newInstance()
    {
        return (new static())
            ->setBuildamicSettings($this->buildamicSettings())
            ->setComputedProperties($this->computedProperties())
            ->setParent($this->parent)
            ->setParentField($this->parentField)
            ->setItems($this->items)
            ->setFields($this->fields);
    }

    public function createFields(array $config): array
    {
        $buildamicSettings = $this->buildamicSettings();
        $computedProperties = $this->computedProperties();

        $fields = parent::createFields($config);

        return collect($fields)->map(function ($field) use ($buildamicSettings, $computedProperties) {
            return (new Field($field->handle(), []))
                ->setConfig($field->config())
                ->setBuildamicSettings($buildamicSettings)
                ->setComputedProperties($computedProperties)
                ->setParent($field->parent())
                ->setParentField($field->parentField())
                ->setValue($field->value() ?? null);
        })->all();
    }

    protected function newField($handle, $config)
    {
        return (new Field($handle, $config))
            ->setBuildamicSettings($this->buildamicSettings())
            ->setComputedProperties($this->computedProperties())
            ->setParent($this->parent)
            ->setParentField($this->parentField);
    }
}
