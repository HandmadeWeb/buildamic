<div @if($moduleLink = $set->buildamicSetting('moduleLink')) onclick="location.href='{{ $moduleLink }}';" @endif {!! BuildamicHelper()->HtmlId($set->buildamicSetting('attributes.id')) !!} class="buildamic-set @if($moduleLink) cursor-pointer @endif {{ $set->computedAttribute('class') }}">
    @yield('set_content')
</div>
