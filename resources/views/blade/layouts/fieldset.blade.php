<div {!! \HandmadeWeb\Buildamic\Helper::HtmlId($fieldset->buildamicSetting('attributes.id')) !!} class="buildamic-fieldset {{ $fieldset->computedAttribute('class') }}">
    @yield('fieldset_content')
</div>
