<div {!! \HandmadeWeb\Buildamic\Helper::HtmlId($set->buildamicSetting('attributes.id')) !!} class="buildamic-set {{ $set->computedAttribute('class') }}">
    @yield('set_content')
</div>
