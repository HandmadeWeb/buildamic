<?php

namespace Michaelr0\Buildamic\Modifiers;

use Statamic\Modifiers\Modifier;

class Buildamic extends Modifier
{
    /**
     * Modify a value.
     *
     * @param mixed  $value    The value to be modified
     * @param array  $params   Any parameters used in the modifier
     * @param array  $context  Contextual values
     * @return mixed
     */
    public function index($value, $params, $context)
    {
        if (in_array('blade', $params)) {
            return \Michaelr0\Buildamic\Buildamic::withBlade()->render($value);
        } elseif (in_array('antlers', $params)) {
            return \Michaelr0\Buildamic\Buildamic::withAntlers()->render($value);
        } else {
            return \Michaelr0\Buildamic\Buildamic::withBlade()->render($value);
        }
    }
}
