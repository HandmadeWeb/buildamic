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
        // 'buildamic_filter_section' => 'filter_section',
        // 'buildamic_filter_row' => 'filter_row',
        // 'buildamic_filter_column' => 'filter_column',
        // 'buildamic_filter_field:markdown' => 'filter_field_markdown',
        // 'buildamic_filter_field:markdown-blurb' => 'filter_field_markdown_handle_blurb',
        // 'buildamic_filter_fieldset:blurb' => 'filter_fieldset_blurb',
        // 'buildamic_filter_set:blurb' => 'filter_set_blurb',
    ];

    public static function boot()
    {
        foreach (static::$filters as $filter_name => $method_name) {
            if (method_exists(static::class, $method_name)) {
                Filter::add($filter_name, [static::class, $method_name], 10, 1);
            }
        }
    }

    // public static function example_filter(Value $data): Value
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

    // public static function filter_everything(Value $data): Value
    // {
    //     return $data;
    // }

    // public static function filter_section(Value $data): Value
    // {
    //     return $data;
    // }

    // public static function filter_row(Value $data): Value
    // {
    //     return $data;
    // }

    // public static function filter_column(Value $data): Value
    // {
    //     return $data;
    // }

    // public static function filter_field_markdown(Value $data): Value
    // {
    //     return $data;
    // }

    // public static function filter_field_markdown_handle_blurb(Value $data): Value
    // {
    //     return $data;
    // }

    // public static function filter_fieldset_blurb(Value $data): Value
    // {
    //     return $data;
    // }

    // public static function filter_set_blurb(Value $data): Value
    // {
    //     return $data;
    // }
}
