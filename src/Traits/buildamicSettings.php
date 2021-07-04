<?php

namespace Michaelr0\Buildamic\Traits;

trait buildamicSettings
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

    public function buildamicSetting(string | null $key = null, $fallback = null)
    {
        if (is_null($key)) {
            return $this->buildamicSettings();
        }

        return array_get($this->buildamicSettings, $key, $fallback);
    }
}
