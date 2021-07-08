<div id="{{ $column->buildamicSetting('attributes.id') }}" class="buildamic-column {{ $column->computedAttribute('class') }}">
    @foreach($column->value() as $field)
        {!! $buildamic->renderField($field) !!}
    @endforeach
</div>
