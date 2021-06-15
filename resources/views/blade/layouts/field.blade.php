<div class="field {{ modify($field->get('config')->get('type'))->ensureRight('-field') }}">
    @yield('field_content')
</div>