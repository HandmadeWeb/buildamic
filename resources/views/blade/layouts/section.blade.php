<div id="section-{{ $section->handle() }}" class="section">
    @foreach($section->value() as $row)
        {!! $buildamic->renderRow($row) !!}   
    @endforeach
</div>