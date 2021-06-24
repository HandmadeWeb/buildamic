<div id="{{ $section->field()->buildamicSetting('attributes.id') ?? '' }}" class="buildamic-section {{ $section->field()->buildamicSetting('attributes.class') ?? '' }}">
    @foreach($section->value() as $row)
        {!! $buildamic->renderRow($row) !!}   
    @endforeach
</div>