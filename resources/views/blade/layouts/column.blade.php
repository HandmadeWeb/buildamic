<div class="column">
    @foreach($column->get('value') as $field)
        {!! $buildamic->renderField($field) !!}   
    @endforeach
</div>