<?php

namespace Michaelr0\Buildamic\Fields;

use Michaelr0\Buildamic\Fields\Field;
use Statamic\Fields\Fields as StatamicFields;

class Fields extends StatamicFields
{
    protected $buildamicSettings = [];

    public function setBuildamicSettings(array $buildamicSettings)
    {
        $this->buildamicSettings = $buildamicSettings;

        return $this;
    }

    public function buildamicSettings(): array
    {
        return $this->buildamicSettings;
    }

    public function buildamicSetting(string $key = null, $fallback = null)
    {
        if (is_null($key)) {
            return $this->buildamicSettings();
        }

        return array_get($this->buildamicSettings, $key, $fallback);
    }

    // Working
    public function newInstance()
    {
        return (new static)
            ->setBuildamicSettings($this->buildamicSettings())
            ->setParent($this->parent)
            ->setParentField($this->parentField)
            ->setItems($this->items)
            ->setFields($this->fields);
    }

    // Working
    public function createFields(array $config): array
    {
        $buildamicSettings = $this->buildamicSettings();

        $fields = parent::createFields($config);

        return collect($fields)->map(function ($field) use ($buildamicSettings) {
            return (new Field($field->handle(), []))
                ->setConfig($field->config())
                ->setBuildamicSettings($buildamicSettings)
                ->setParent($field->parent())
                ->setParentField($field->parentField())
                ->setValue($field->value() ?? null);
        })->all();
    }

    // Working
    protected function newField($handle, $config)
    {
        return (new Field($handle, $config))
            ->setBuildamicSettings($this->buildamicSettings())
            ->setParent($this->parent)
            ->setParentField($this->parentField);
    }
}
