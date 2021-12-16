<?php

namespace HandmadeWeb\Buildamic;

use HandmadeWeb\Buildamic\Fields\Field;
use HandmadeWeb\Buildamic\Fields\Fields;

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
        'buildamic_filter_row' => 'filter_row',
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
    //     // Can use computedAttributes.
    //
    //     // set/replace computed attributes with the provided.
    //     $data->field()->setcomputedAttributes(['foo' => 'bar']);
    //     $data->field()->computedAttributes();
    //     // [
    //     //     "foo" => "bar"
    //     // ]
    //     $data->field()->computedAttribute('foo');
    //     // Bar

    //     // add/merge new data into the computed attribuites.
    //     $data->field()->mergeComputedAttributes(['bar' => 'foo']);
    //     $data->field()->computedAttributes();
    //     // [
    //     //     "foo" => "bar",
    //     //     "bar" => "foo"
    //     // ]
    //     $data->field()->computedAttribute('bar');
    //     // Foo

    //     // set/replace computed attributes with the provided.
    //     $data->field()->setcomputedAttributes(['bar' => 'foo']);
    //     $data->field()->computedAttributes();
    //     // [
    //     //     "bar" => "foo"
    //     // ]
    //     $data->field()->computedAttribute('bar');
    //     // Foo
    //     $data->field()->computedAttribute('foo');
    //     // null or $fallback (second property on computedAttribute method)

    //     // Must be returned!
    //     return $data;
    // }

    public static function filter_everything(Field | Fields $field)
    {
        $classList = collect(explode(' ', $field->buildamicSetting('attributes.class')))->filter()->toArray();
        $dataAtts = static::get_data_attributes(collect($field->buildamicSetting('attributes.dataAtts'))->filter()->toArray()) ?? [];


        if (is_array($field->buildamicSetting('inline'))) {
            // Remove anything we don't want generated with the loop (e.g background is handled separately)
            $inlineClassList = collect($field->buildamicSetting('inline'))->filter(function ($value, $key) {
                return $key !== 'background';
            })->filter()->toArray();

            if (! empty($inlineClassList)) {
                foreach ($inlineClassList as $item) {
                    $classList[] = static::get_tw_classes_from_inline_atts($item);
                }
            }

            if (!empty($field->buildamicSetting('inline.background'))) {
                // [] loop the background options
            }
        }

        $background_image = $field->buildamicSetting('inline')['background']['image']['value'][0] ?? null;

        if (isset($background_image)) {
            $field->mergeComputedAttributes(['background_image' => glide_url($background_image)]);
        }
        $field->mergeComputedAttributes(['class' => implode(' ', $classList)]);
        $field->mergeComputedAttributes(['dataAtts' => implode(' ', $dataAtts)]);


        return $field;
    }

    // public static function filter_section(Field $section): Field
    // {
    //     return $section;
    // }

    public static function filter_row(Field $row): Field
    {
        $colGaps = static::get_col_gap(collect($row->buildamicSetting('attributes.col_gap'))->filter()->toArray()) ?? [];
        $columnCountTotal = static::column_count_total($row->buildamicSetting('attributes.column_count_total') ?? 12);
        $row->mergeComputedAttributes(['col_gap' => implode(' ', $colGaps)]);
        $row->mergeComputedAttributes(['column_count_total' => $columnCountTotal]);
        return $row;
    }

    public static function filter_column(Field $column): Field
    {
        if (! empty($column->buildamicSetting('columnSizes'))) {
            $columnSizes = collect($column->buildamicSetting('columnSizes'))->map(function ($value, $key) {
                if (! empty($value)) {
                    if ($key == 'xs') {
                        return "col-{$value} ";
                    } else {
                        return "{$key}:col-{$value} ";
                    }
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
    protected static function get_tw_classes_from_inline_atts(array | string $classes): string
    {
        if (is_array($classes)) {
            foreach ($classes as $child) {
                if (! is_array($child)) {
                    $generatedClasses[] = $child;
                } else {
                    $generatedClasses[] = static::get_tw_classes_from_inline_atts($child);
                }
            }
        } else {
            $generatedClasses[] = $classes;
        }

        return trim(implode(' ', $generatedClasses), ' ');
    }

    protected static function get_data_attributes(array $dataAtts = []): array
    {
        $generatedAtts = [];

        if (is_array($dataAtts) && !empty($dataAtts)) {
            foreach ($dataAtts as $att) {
                $generatedAtts[] = "data-{$att['key']}={$att['value']}";
            }
        }

        return $generatedAtts;
    }

    protected static function get_col_gap(array $colgaps = []): array
    {
        $generatedClasses = [];

        if (!is_array($colgaps) || empty($colgaps)) {
            return $colgaps;
        }

        foreach ($colgaps as $breakpoint=>$colgap) {
            // dd($breakpoint);
            if ($breakpoint == 'xs') {
                $generatedClasses[] = "gap-{$colgap}";
            } else {
                $generatedClasses[] = "{$breakpoint}:gap-{$colgap}";
            }
        }

        return $generatedClasses;
    }

    protected static function column_count_total(int $columnCountTotal = 12): string
    {
        if (empty($columnCountTotal)) {
            return "";
        }
        if ((int) $columnCountTotal % 12 != 0) {
          return "--b-columns: {$columnCountTotal};";
        }
        return "";
    }

    // protected static function get_inline_styles(array | string $attribute = ''): string
    // {
    //     // [] get the background options and create an inline style attribute string
    // }
}
