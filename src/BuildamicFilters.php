<?php

namespace Michaelr0\Buildamic;

use Michaelr0\Buildamic\Fields\Field;

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
        'buildamic_filter_everything' => 'filter_everything',
        // 'buildamic_filter_section' => 'filter_section',
        // 'buildamic_filter_row' => 'filter_row',
        'buildamic_filter_column' => 'filter_column',
        'buildamic_filter_field' => 'filter_field',
        // 'buildamic_filter_field:markdown-blurb' => 'filter_field_markdown_handle_blurb',
        // 'buildamic_filter_set' => 'filter_set',
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

    // public static function example_filter(Field $data): Field
    // {
    //     // Can use computedProperties or computedAttributes separately.
    //
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

    public static function filter_everything(Field $data): Field
    {
        $classList = $data->buildamicSetting('attributes.class');

        if (is_array($data->buildamicSetting('inline'))) {
            // Remove anything we don't want generated with the loop (e.g background is handled separately)
            $inlineClassList = collect($data->buildamicSetting('inline'))->filter(function ($value, $key) {
                return $key !== 'background';
            })->toArray();

            if (! empty($inlineClassList)) {
                foreach ($inlineClassList as $item) {
                    $classList .= static::generateTailwindClasses($item);
                }
            }
        }

        $data->mergeComputedAttributes(['class' => $classList]);

        return $data;
    }

    // public static function filter_section(Field $section): Field
    // {
    //     return $section;
    // }

    // public static function filter_row(Field $row): Field
    // {
    //     return $row;
    // }

    public static function filter_column(Field $column): Field
    {
        if (! empty($column->buildamicSetting('columnSizes'))) {
            $columnSizes = collect($column->buildamicSetting('columnSizes'))->map(function ($value, $key) {
                if (! empty($value)) {
                    // if ($key == 'xs') {
                    //     return "col-{$val} ";
                    // } else {
                    // return "{$key}:col-{$val} ";
                    // }
                    return "{$key}:col-{$value}";
                }
            })->filter()->implode(' ');

            if (! empty($columnSizes)) {
                $column->mergeComputedAttributes(['class' => $column->computedAttribute('class')." {$columnSizes}"]);
            }
        }

        return $column;
    }

    public static function filter_field(Field $field): Field
    {
        $field->mergeComputedAttributes(['class' => modify($field->type())->ensureLeft('buildamic-')->ensureRight('-field').' '.$field->computedAttribute('class')]);

        return $field;
    }

    // public static function filter_field_markdown_handle_blurb(Field $field): Field
    // {
    //     return $field;
    // }

    // public static function filter_set_blurb(Value $data): Value
    // {
    //     return $data;
    // }

    /**
     * Takes all the inline attributes, font-size, margins, everything, then concatinates them into a big
     * string of tailwind classes.
     *
     * @param array|string $classes
     * @return string
     */
    protected static function generateTailwindClasses(array | string $classes): string
    {
        $generatedClasses = [];

        if (is_array($classes)) {
            foreach ($classes as $child) {
                if (! is_array($child)) {
                    $generatedClasses[] = $child;
                } else {
                    $generatedClasses[] = static::generateTailwindClasses($child);
                }
            }
        } else {
            $generatedClasses[] = $classes;
        }

        return ' '.implode(' ', $generatedClasses);
    }
}
