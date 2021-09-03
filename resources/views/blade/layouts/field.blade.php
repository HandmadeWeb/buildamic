<div {!! \HandmadeWeb\Buildamic\Helper::HtmlId($field->buildamicSetting('attributes.id')) !!} class="buildamic-field {{ $field->computedAttribute('class') }}">
    @yield('field_content')
</div>
