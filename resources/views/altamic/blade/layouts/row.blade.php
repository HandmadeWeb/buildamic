<div class="row">
    @foreach($altamic->columns->where('parent', $row['uuid']) as $column)
        {!! $altamic->renderColumn($column) !!}   
    @endforeach
</div>