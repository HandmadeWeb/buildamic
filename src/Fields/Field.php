<?php

namespace Michaelr0\Buildamic\Fields;

use Michaelr0\Buildamic\Traits\buildamicSettings;
use Michaelr0\Buildamic\Traits\computedProperties;
use Statamic\Fields\Field as StatamicField;

class Field extends StatamicField
{
    use buildamicSettings;
    use computedProperties;

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
