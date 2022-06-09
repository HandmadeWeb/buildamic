<?php

namespace HandmadeWeb\Buildamic\Traits;

trait HasComputedAttributes
{
    protected $computedAttributes = [];

    public function setComputedAttributes(array $computedAttributes): static
    {
        $this->computedAttributes = $computedAttributes;

        return $this;
    }

    public function mergeComputedAttributes(array $computedAttributes): static
    {
        $this->computedAttributes = array_merge($this->computedAttributes, $computedAttributes);

        return $this;
    }

    public function computedAttributes(): array
    {
        return $this->computedAttributes;
    }

    public function computedAttribute(string|null $key = null, $fallback = null)
    {
        if (is_null($key)) {
            return $this->computedAttributes();
        }

        $value = array_get($this->computedAttributes, $key, $fallback);
        return $value ?? $fallback;
    }
}
