<?php

use Statamic\Modifiers\Modify;

if (! function_exists('modify')) {
    /**
     * Specify a value to start the modification chain.
     *
     * @param mixed $value
     * @return \Statamic\Modifiers\Modify
     */
    function modify($value): Modify
    {
        return Modify::value($value);
    }
}
