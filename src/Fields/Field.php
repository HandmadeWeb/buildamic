<?php

namespace HandmadeWeb\Buildamic\Fields;

use HandmadeWeb\Buildamic\Traits\AugmentsOnce;
use HandmadeWeb\Buildamic\Traits\HasBuildamicSettings;
use HandmadeWeb\Buildamic\Traits\HasComputedAttributes;
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
