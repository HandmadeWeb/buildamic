<?php

namespace Michaelr0\Buildamic\Traits;

trait computedProperties
{
    protected $computedProperties = [];

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
}
