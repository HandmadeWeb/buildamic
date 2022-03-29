<div @if($moduleLink = $field->buildamicSetting('moduleLink')) onclick="location.href='{{ $moduleLink }}';" @endif {!! BuildamicHelper()->HtmlId($field->buildamicSetting('attributes.id')) !!} {{ $field->computedAttribute('dataAtts') }} class="buildamic-field @isset($class) {{ $class }} @endisset @if($moduleLink) cursor-pointer @endif {{ $field->computedAttribute('class') }}">
    @yield('field_content')
</div>
