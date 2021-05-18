<?php

namespace Michaelr0\Buildamic\Scopes;

use Statamic\Query\Scopes\Scope;

class Buildamic extends Scope
{
    /**
     * Apply the scope.
     *
     * @param \Statamic\Query\Builder $query
     * @param array $values
     * @return void
     */
    public function apply($query, $values)
    {
        // $query->where('featured', true);
    }
}
