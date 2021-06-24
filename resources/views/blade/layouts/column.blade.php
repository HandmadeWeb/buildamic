<div id="{{ $column->field()->buildamicSetting('attributes.id') ?? '' }}" class="buildamic-column {{ $column->field()->buildamicSetting('attributes.class') ?? '' }}">
    @foreach($column->value() as $field)
        {!! $buildamic->renderField($field) !!}   
    @endforeach
</div>