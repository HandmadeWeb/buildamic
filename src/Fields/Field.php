<?php

namespace Michaelr0\Buildamic\Fields;

use Statamic\Fields\Field as StatamicField;

class Field extends StatamicField
{
    protected $buildamicSettings = [];

    public function setBuildamicSettings(array $buildamicSettings)
    {
        $this->buildamicSettings = $buildamicSettings;

        return $this;
    }

    public function buildamicSettings(): array
    {
        return $this->buildamicSettings;
    }

    public function buildamicSetting(string $key = null, $fallback = null)
    {
        if (is_null($key)) {
            return $this->buildamicSettings();
        }

        return array_get($this->buildamicSettings, $key, $fallback);
    }

    public function newInstance()
    {
        return (new static($this->handle, $this->config))
            ->setBuildamicSettings($this->buildamicSettings())
            ->setParent($this->parent)
            ->setParentField($this->parentField)
            ->setValue($this->value);
    }
}
