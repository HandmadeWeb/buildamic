@php
    $moduleLink = $field->buildamicSetting('moduleLink') ?? null;
@endphp

<div @isset($moduleLink) onclick="location.href='{{ $moduleLink }}';" @endisset {!! BuildamicHelper()->HtmlId($field->buildamicSetting('attributes.id')) !!} {{ $field->computedAttribute()['dataAtts'] }} class="buildamic-field @isset($moduleLink) cursor-pointer @endisset {{ $field->computedAttribute('class') }}">
    @yield('field_content')
</div>
