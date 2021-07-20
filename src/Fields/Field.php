<?php

namespace Michaelr0\Buildamic\Fields;

use Michaelr0\Buildamic\Traits\AugmentsOnce;
use Michaelr0\Buildamic\Traits\HasBuildamicSettings;
use Michaelr0\Buildamic\Traits\HasComputedAttributes;
use Statamic\Fields\Field as StatamicField;

class Field extends StatamicField
{
    use HasBuildamicSettings;
    use HasComputedAttributes;
    use AugmentsOnce;

    public function newInstance()
    {
        return (new static($this->handle, $this->config))
            ->setBuildamicSettings($this->buildamicSettings())
            ->setParent($this->parent)
            ->setParentField($this->parentField)
            ->setValue($this->value ?? null);
    }
}
