<div {!! BuildamicHelper()->HtmlId($field->buildamicSetting('attributes.id')) !!} {{ $field->computedAttribute()['dataAtts'] }} class="buildamic-field {{ $field->computedAttribute('class') }}">
    @yield('field_content')
</div>
