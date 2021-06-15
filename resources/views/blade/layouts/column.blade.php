<div class="column">
    @foreach($column->get('fields') as $field)
        {!! $buildamic->renderField($field) !!}   
    @endforeach
</div>