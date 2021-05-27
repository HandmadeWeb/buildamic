<div class="column">
    @foreach($column['fields'] as $field)
        {!! $buildamic->renderField($field) !!}   
    @endforeach
</div>