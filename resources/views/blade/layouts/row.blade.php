<div id="row-{{ $row->handle() }}" class="row">
    @foreach($row->value() as $column)
        {!! $buildamic->renderColumn($column) !!}   
    @endforeach
</div>