@extends('buildamic::blade.layouts.field')

@section('field_content')
    {!! $field->shouldParseAntlers() ? \Statamic\Facades\Antlers::parse($field->value()) : $field !!}
@overwrite
