<div class="section">
    @foreach($section['rows'] as $row)
        {!! $buildamic->renderLayoutPart($row) !!}   
    @endforeach
</div>