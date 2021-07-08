@php
    $columnSizes = $column->buildamicSetting('columnSizes');
    if (!empty($column->buildamicSetting('columnSizes'))) {
        $sizes = join("", array_map(function($val, $key) {
                if (!empty($val)) {
                // Legacy -- XS no longer exists and is defaulted to just col-val
                if ($key == 'xs') {
                    // This is for backwards compatibility
                    return "col-{$val} ";
                } else {
                    return "{$key}:col-{$val} ";
                }
            }
        }, $columnSizes, array_keys($columnSizes)));
    }
@endphp

<div id="{{ $column->buildamicSetting('attributes.id') }}" class="buildamic-column {{ $sizes }} {{ $column->buildamicSetting('attributes.class') }}">
    @foreach($column->value() as $field)
        {!! $buildamic->renderField($field) !!}
    @endforeach
</div>
