<div class="row">
    @foreach($row['columns'] as $column)
        {!! $buildamic->renderLayoutPart($column) !!}   
    @endforeach
</div>