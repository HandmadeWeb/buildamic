<?php

namespace HandmadeWeb\Buildamic\Traits;

trait HasBuildamicSettings
{
    protected $buildamicSettings = [];

    public function setBuildamicSettings(array $buildamicSettings): static
    {
        $this->buildamicSettings = $buildamicSettings;

        return $this;
    }

    public function mergeBuildamicSettings(array $buildamicSettings): static
    {
        $this->buildamicSettings = array_merge($this->buildamicSettings, $buildamicSettings);

        return $this;
    }

    public function buildamicSettings(): array
    {
        return $this->buildamicSettings;
    }

    public function buildamicSetting(string|null $key = null, $fallback = null)
    {
        if (is_null($key)) {
            return $this->buildamicSettings();
        }

        return array_get($this->buildamicSettings, $key, $fallback);
    }
}
