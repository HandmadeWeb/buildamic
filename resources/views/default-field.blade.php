@extends('buildamic::layouts.field')

@section('field_content')
    @if(config('app.debug'))
        <!-- Disable minification -->
        <!-- skip.minification -->
        <!-- /Disable minification -->
    @endif

    <!-- Field could not be rendered, View not found -->
    <!-- Type: {{ $field->type() }} -->
    <!-- Handle: {{ $field->handle() }} -->

    @if(config('app.debug'))
        <div class="bg-gray-100 border border-gray-200 text-xs text-left p-2">
            <p>This <strong><span class="inline-block border-b-2 border-gray-200 border-dotted" title="Field type">{{ $field->type() }}</span>::<span title="Field handle">{{ $field->handle() }}</span></strong> field could not be rendered, corresponding views not found.
            Create one of the following options in your `resources/views/vendor/buildamic/` folder:</p>
            <ul class="list-disc list-inside">
                <li>{{ $field->type() }}-{{ $field->handle() }}.blade.php</li>
                <li>{{ $field->type() }}.blade.php</li>
            </ul>
        </div>
    @endif
@overwrite
