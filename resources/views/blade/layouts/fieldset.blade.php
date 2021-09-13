<div {!! \HandmadeWeb\Buildamic\Helper::HtmlId($fieldset->buildamicSetting('attributes.id')) !!} {{ $fieldset->computedAttribute()['dataAtts'] }} class="buildamic-fieldset {{ $fieldset->computedAttribute('class') }}">
    @yield('fieldset_content')
</div>
