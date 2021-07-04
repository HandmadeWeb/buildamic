<?php

namespace Michaelr0\Buildamic;

use Michaelr0\HookableActionsAndFilters\Filter;

class BuildamicFilters
{
    /**
     * Define Filter/Method's to register.
     *
     * The $filters array expects the following format:
     * 'filter_name' => 'method_name',
     *
     * Where filter_name will be used by Filter::add() and Filter::run() function calls.
     * And method_name is the public static function that should be called for that filter.
     *
     * $data will always be passed to these filters.
     *
     * @var array
     */
    protected static $filters = [
        // 'buildamic_filter_everything' => 'filter_everything',
        // 'buildamic_filter_type:container' => 'filter_containers',
        // 'buildamic_filter_type:section' => 'filter_sections',
        // 'buildamic_filter_type:row' => 'filter_rows',
        // 'buildamic_filter_type:column' => 'filter_columns',
    ];

    public static function boot()
    {
        foreach (static::$filters as $filter_name => $method_name) {
            Filter::add($filter_name, [static::class, $method_name], 10, 1);
        }
    }

    // public static function filter_everything($data)
    // {
    //     return $data;
    // }

    // public static function filter_containers($data)
    // {
    //     return $data;
    // }

    // public static function filter_sections($data)
    // {
    //     return $data;
    // }

    // public static function filter_rows($data)
    // {
    //     return $data;
    // }

    // public static function filter_columns($data)
    // {
    //     // Example Filter.
    //     return $data;
    // }
}
