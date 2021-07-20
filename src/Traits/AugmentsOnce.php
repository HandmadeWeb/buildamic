<?php

namespace Michaelr0\Buildamic\Traits;

trait AugmentsOnce
{
    protected $isAugmented = false;
    protected $isShallowAugmented = false;

    protected function setAugmented($augmented = true)
    {
        $this->isAugmented = $augmented;

        return $this;
    }

    protected function setShallowAugmented($shallowAugmented = true)
    {
        $this->isShallowAugmented = $shallowAugmented;

        return $this;
    }

    public function augment()
    {
        if (! $this->isAugmented || $this->isShallowAugmented) {
            return parent::augment()->setAugmented();
        }

        return $this;
    }

    public function shallowAugment()
    {
        if ($this->isAugmented || ! $this->isShallowAugmented) {
            return parent::shallowAugment()->setShallowAugmented();
        }

        return $this;
    }
}
