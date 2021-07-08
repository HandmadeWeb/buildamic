<?php

namespace Michaelr0\Buildamic\Traits;

trait computedAttributes
{
    protected $computedAttributes = [];

    public function setComputedAttributes(array $computedAttributes)
    {
        $this->computedAttributes = $computedAttributes;

        return $this;
    }

    public function mergeComputedAttributes(array $computedAttributes)
    {
        $this->computedAttributes = array_merge($this->computedAttributes, $computedAttributes);

        return $this;
    }

    public function computedAttributes(): array
    {
        return $this->computedAttributes;
    }

    public function computedAttribute(string | null $key = null, $fallback = null)
    {
        if (is_null($key)) {
            return $this->computedAttributes();
        }

        return array_get($this->computedAttributes, $key, $fallback);
    }
}
