<?php

namespace Michaelr0\Buildamic\Traits;

trait AugmentsOnce
{
    protected $isAugmented = false;
    protected $isShallowAugmented = false;

    public function isAugmented(): bool
    {
        return $this->isAugmented;
    }

    public function isShallowAugmented(): bool
    {
        return $this->isShallowAugmented;
    }

    protected function setAugmented(bool $augmented = true): static
    {
        $this->isAugmented = $augmented;

        return $this;
    }

    protected function setShallowAugmented(bool $shallowAugmented = true): static
    {
        $this->isShallowAugmented = $shallowAugmented;

        return $this;
    }

    public function augment(): static
    {
        if (! $this->isAugmented || $this->isShallowAugmented) {
            return parent::augment()->setAugmented();
        }

        return $this;
    }

    public function shallowAugment(): static
    {
        if ($this->isAugmented || ! $this->isShallowAugmented) {
            return parent::shallowAugment()->setShallowAugmented();
        }

        return $this;
    }
}
