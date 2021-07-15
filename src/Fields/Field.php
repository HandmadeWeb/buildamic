<?php

namespace Michaelr0\Buildamic\Fields;

use Michaelr0\Buildamic\Traits\buildamicSettings;
use Michaelr0\Buildamic\Traits\computedAttributes;
use Statamic\Fields\Field as StatamicField;

class Field extends StatamicField
{
    use buildamicSettings;
    use computedAttributes;

    public function newInstance()
    {
        return (new static($this->handle, $this->config))
            ->setBuildamicSettings($this->buildamicSettings())
            ->setParent($this->parent)
            ->setParentField($this->parentField)
            ->setValue($this->value ?? null);
    }
}
