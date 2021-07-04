<?php

namespace Michaelr0\Buildamic\Fields;

use Statamic\Fields\Field as StatamicField;

class Field extends StatamicField
{
    protected $buildamicSettings = [];
    protected $computedProperties = [];

    public function setBuildamicSettings(array $buildamicSettings)
    {
        $this->buildamicSettings = $buildamicSettings;

        return $this;
    }

    public function buildamicSettings(): array
    {
        return $this->buildamicSettings;
    }

    public function buildamicSetting(string | null $key = null, $fallback = null)
    {
        if (is_null($key)) {
            return $this->buildamicSettings();
        }

        return array_get($this->buildamicSettings, $key, $fallback);
    }

    public function setComputedProperties(array $computedProperties)
    {
        $this->computedProperties = $computedProperties;

        return $this;
    }

    public function mergeComputedProperties(array $computedProperties)
    {
        $this->computedProperties = array_merge($this->computedProperties, $computedProperties);

        return $this;
    }

    public function computedProperties(): array
    {
        return $this->computedProperties;
    }

    public function computedProperty(string | null $key = null, $fallback = null)
    {
        if (is_null($key)) {
            return $this->computedProperties();
        }

        return array_get($this->computedProperties, $key, $fallback);
    }

    public function newInstance()
    {
        return (new static($this->handle, $this->config))
            ->setBuildamicSettings($this->buildamicSettings())
            ->setComputedProperties($this->computedProperties())
            ->setParent($this->parent)
            ->setParentField($this->parentField)
            ->setValue($this->value ?? null);
    }
}
