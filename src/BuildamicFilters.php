<?php

namespace Michaelr0\Buildamic;

use Michaelr0\HookableActionsAndFilters\Filter;
use Statamic\Fields\Value;

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
            if (method_exists(static::class, $method_name)) {
                Filter::add($filter_name, [static::class, $method_name], 10, 1);
            }
        }
    }

    // public static function filter_everything(Value $data): Value
    // {
    //     // set/replace computed properties with the provided.
    //     $data->field()->setComputedProperties(['foo' => 'bar']);
    //     $data->field()->computedProperties();
    //     // [
    //     //     "foo" => "bar"
    //     // ]
    //     $data->field()->computedProperty('foo');
    //     // Bar

    //     // add/merge new data into the computed properties.
    //     $data->field()->mergeComputedProperties(['bar' => 'foo']);
    //     $data->field()->computedProperties();
    //     // [
    //     //     "foo" => "bar",
    //     //     "bar" => "foo"
    //     // ]
    //     $data->field()->computedProperty('bar');
    //     // Foo

    //     // set/replace computed properties with the provided.
    //     $data->field()->setComputedProperties(['bar' => 'foo']);
    //     $data->field()->computedProperties();
    //     // [
    //     //     "bar" => "foo"
    //     // ]
    //     $data->field()->computedProperty('bar');
    //     // Foo
    //     $data->field()->computedProperty('foo');
    //     // null or $fallback (second property on computedProperty method)

    //     // Must be returned!
    //     return $data;
    // }

    // public static function filter_everythingfilter_everything(Value $data): Value
    // {
    //     return $data;
    // }

    // public static function filter_containers(Value $data): Value
    // {
    //     return $data;
    // }

    // public static function filter_sections(Value $data): Value
    // {
    //     return $data;
    // }

    // public static function filter_rows(Value $data): Value
    // {
    //     return $data;
    // }

    // public static function filter_columns(Value $data): Value
    // {
    //     // Example Filter.
    //     return $data;
    // }
}
