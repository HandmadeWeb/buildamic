<div id="field-{{ $field->handle() }}" class="field {{ modify($field->type())->ensureRight('-field') }}">
    @yield('field_content')
</div>