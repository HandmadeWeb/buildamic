<?php

namespace Michaelr0\Buildamic;

use Michaelr0\Buildamic\Fields\Field;
use Michaelr0\HookableActionsAndFilters\Filter as BaseFilter;

class Filter extends BaseFilter
{
    /**
     * REQUIRED IN EACH CHILD CLASS
     * Array of defined callback Listeners.
     *
     * @var array
     */
    protected static $listeners = [];
}
