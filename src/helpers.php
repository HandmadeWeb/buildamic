<?php

use HandmadeWeb\Buildamic\BuildamicHelper;
use Statamic\Statamic;

if (!class_exists(\Edalzell\Blade\ServiceProvider::class)) {
    if (!function_exists('modify')) {
        /**
         * Specify a value to start the modification chain.
         *
         * @param mixed $value
         */
        function modify($value)
        {
            return Statamic::modify($value);
        }
    }

    if (!function_exists('tag')) {
        /**
         * Tags are Antlers expressions giving you the ability to fetch, filter, and display content, enhance and simplify your markup, build forms, and build dynamic functionality.
         *
         * @return mixed
         */
        function tag(string $name, array $params = [], array $context = [])
        {
            return Statamic::tag($name)->params($params)->context($context);
        }
    }
}

function BuildamicHelper()
{
    return new BuildamicHelper();
}
