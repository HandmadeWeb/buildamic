<div class="row">
    @foreach($row->get('value') as $column)
        {!! $buildamic->renderColumn($column) !!}   
    @endforeach
</div>