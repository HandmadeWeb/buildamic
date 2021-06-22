<div id="column-{{ $column->handle() }}" class="column">
    @foreach($column->value() as $field)
        {!! $buildamic->renderField($field) !!}   
    @endforeach
</div>