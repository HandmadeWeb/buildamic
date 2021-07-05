@extends('buildamic::blade.layouts.field')
@section('field_content')
    @if($field->get('input_type') === 'text')
        {{ $field->value()->shouldParseAntlers() ? \Statamic\Facades\Antlers::parse($field->value()) : $field->value() }}
    @elseif($field->get('input_type') === 'email')
        <a href="mailto:{{ $field->value() }}">{{ $field->value() }}</a>
    @elseif($field->get('input_type') === 'tel')
        <a href="tel:{{ $field->value() }}">{{ $field->value() }}</a>
    @elseif($field->get('input_type') === 'url')
        <a href="{{ $field->value() }}">{{ $field->value() }}</a>
    @else
        {{ $field->value()->shouldParseAntlers() ? \Statamic\Facades\Antlers::parse($field->value()) : $field->value() }}
    @endif
@overwrite
