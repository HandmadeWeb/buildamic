@extends('buildamic::blade.layouts.field')

@section('field_content')
    @if(config('app.debug'))
        <!-- Disable minification -->
        <!-- skip.minification -->
        <!-- /Disable minification -->
    @endif
    
    <!-- Field could not be rendered, View not found -->
    <!-- Type: {{ $field->type() }} -->
    <!-- Handle: {{ $field->handle() }} -->

@overwrite
