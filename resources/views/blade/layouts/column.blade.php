<div id="{{ $column->buildamicSetting('attributes.id') ?? '' }}" class="buildamic-column {{ $column->buildamicSetting('attributes.class') ?? '' }}">
    @foreach($column->value() as $field)
        {!! $buildamic->renderField($field) !!}   
    @endforeach
</div>