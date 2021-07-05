@php {
    $boxed = $section->field()->buildamicSetting('boxed_layout') ?? true;
}
@endphp

<div id="{{ $section->field()->buildamicSetting('attributes.id') ?? '' }}" class="buildamic-section {{ $section->field()->buildamicSetting('attributes.class') ?? '' }}">
    @if ($boxed)
    <div class="container">
    @endif

        @foreach($section->value() as $row)
            {!! $buildamic->renderRow($row) !!}
        @endforeach

    @if ($boxed)
    </div>
    @endif
</div>
