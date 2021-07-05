@extends('buildamic::blade.layouts.field')

@section('field_content')
        {!! $field->value()->shouldParseAntlers() ? \Statamic\Facades\Antlers::parse($field->value()) : $field->value() !!}
@overwrite
