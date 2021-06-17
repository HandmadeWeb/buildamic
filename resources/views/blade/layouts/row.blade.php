<div class="row">
    @foreach($row['value'] as $column)
        {!! $buildamic->renderColumn($column) !!}   
    @endforeach
</div>