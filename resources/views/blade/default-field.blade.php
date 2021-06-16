@extends('buildamic::blade.layouts.field')

@section('field_content')
    <!-- Field could not be rendered, View not found -->
    <!-- ID: {{ $field->get('uuid') }} -->
    <!-- Type: {{ $field->get('config')->get('type') }} -->
    <!-- Handle: {{ $field->get('config')->get('handle') }} -->
@overwrite