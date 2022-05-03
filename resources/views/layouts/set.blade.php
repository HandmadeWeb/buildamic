@php
    $background_image = $set->computedAttribute('background_image') ?? null;
@endphp

<div @isset($background_image) style="background-image: url('{{ $background_image }}');" @endisset @if($moduleLink = $set->buildamicSetting('moduleLink')) onclick="location.href='{{ $moduleLink }}';" @endif {!! BuildamicHelper()->HtmlId($set->buildamicSetting('attributes.id')) !!} class="buildamic-set @isset($class) {{ $class }} @endisset @if($moduleLink) cursor-pointer @endif {{ $set->computedAttribute('class') }}">
    @yield('set_content')
</div>
