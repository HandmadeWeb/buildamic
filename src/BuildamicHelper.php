<?php

namespace HandmadeWeb\Buildamic;

use HandmadeWeb\Buildamic\Fieldtypes\Buildamic;
use Statamic\Contracts\Entries\Entry as EntryContract;
use Statamic\Entries\AugmentedEntry;
use Statamic\Entries\Entry;
use Statamic\Facades\Entry as EntryFacade;

class BuildamicHelper
{
    protected $entry;

    public function entry(AugmentedEntry | EntryContract | string $entry)
    {
        if (is_string($entry)) {
            $entry = EntryFacade::find($entry);
        }

        if ($entry instanceof EntryContract) {
            $entry = $entry->augmented();
        }

        if ($entry instanceof AugmentedEntry) {
            $this->entry = $entry;
        }

        return $this;
    }

    public function renderField(?string $field = null)
    {
        if (! $this->entry instanceof AugmentedEntry) {
            return;
        }

        $fields = ['buildamic', 'content'];

        if (! empty($field) && ! in_array($field, $fields)) {
            $fields = array_merge([$field], $fields);
        }

        foreach ($fields as $field) {
            if (optional($this->entry->get($field))->value() instanceof BuildamicRenderer) {
                return $this->entry->get($field)->value();
            }
        }
    }
}
