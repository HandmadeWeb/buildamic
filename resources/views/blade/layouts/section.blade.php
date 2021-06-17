<div class="section">
    @foreach($section->get('value') as $row)
        {!! $buildamic->renderRow($row) !!}   
    @endforeach
</div>