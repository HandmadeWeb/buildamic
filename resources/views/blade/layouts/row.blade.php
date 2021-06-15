<div class="row">
    @foreach($row->get('columns') as $column)
        {!! $buildamic->renderColumn($column) !!}   
    @endforeach
</div>