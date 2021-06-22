<div id="field-{{ $field->handle() }}" class="field {{ modify($field->field()->fieldtype()->config('type'))->ensureRight('-field') }}">
    @yield('field_content')
</div>