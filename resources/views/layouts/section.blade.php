@php
    $boxed = $section->buildamicSetting('boxed_layout') ? true : false;
    $background_image = $section->computedAttribute('background_image') ?? null;
    $background_video = $section->computedAttribute('background_video') ?? null;
    $mp4 = $background_video['mp4'][0] ?? null;
    $webm = $background_video['webm'][0] ?? null;
@endphp

<div @isset($background_image) style="background-image: url('{{ $background_image }}');" @endisset {!! BuildamicHelper()->HtmlId($section->buildamicSetting('attributes.id')) !!} {{ $section->computedAttribute('dataAtts') }} class="buildamic-section {{ $section->computedAttribute('class') }}">
    @if($background_video)
        <video class="buildamic-bg-video" playsinline autoplay muted loop>
            @isset($webm) <source src="{{ modify($webm)->url() }}" type="video/webm"> @endisset
            @isset($mp4) <source src="{{ modify($mp4)->url() }}" type="video/mp4"> @endisset
            Your browser does not support the video tag.
        </video>
    @endif

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
