@php
    $boxed = $section->buildamicSetting('boxed_layout') ?? true;
@endphp

<div {!! BuildamicHelper()->HtmlId($section->buildamicSetting('attributes.id')) !!} {{ $section->computedAttribute()['dataAtts'] }} class="buildamic-section {{ $section->computedAttribute('class') }}">
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
