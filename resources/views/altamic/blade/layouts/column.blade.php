<div class="column">
    @foreach($altamic->fields->where('parent', $column['uuid']) as $field)
        {!! $altamic->renderField($field) !!}   
    @endforeach
</div>