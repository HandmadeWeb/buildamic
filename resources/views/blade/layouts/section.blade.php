<div class="section">
    @foreach($section->get('rows') as $row)
        {!! $buildamic->renderRow($row) !!}   
    @endforeach
</div>