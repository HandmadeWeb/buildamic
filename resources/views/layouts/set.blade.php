@php
    $moduleLink = $set->buildamicSetting('moduleLink') ?? null;
@endphp

<div @isset($moduleLink) onclick="location.href='{{ $moduleLink }}';" @endisset {!! BuildamicHelper()->HtmlId($set->buildamicSetting('attributes.id')) !!} class="buildamic-set @isset($moduleLink) cursor-pointer @endisset {{ $set->computedAttribute('class') }}">
    @yield('set_content')
</div>
