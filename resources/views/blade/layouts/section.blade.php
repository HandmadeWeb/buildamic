<div id="{{ $section->buildamicSetting('attributes.id') ?? '' }}" class="buildamic-section {{ $section->buildamicSetting('attributes.class') ?? '' }}">
    @foreach($section->value() as $row)
        {!! $buildamic->renderRow($row) !!}   
    @endforeach
</div>