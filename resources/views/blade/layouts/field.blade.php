<div id="{{ $field->buildamicSetting('attributes.id') ?? '' }}" class="buildamic-field {{ modify($field->type())->ensureLeft('buildamic-')->ensureRight('-field') }} {{ $field->buildamicSetting('attributes.class') ?? '' }}">
    @yield('field_content')
</div>
