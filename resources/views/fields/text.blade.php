@extends('buildamic::layouts.field')

@section('field_content')
    @php
        $fieldValue = $field->value();
    @endphp

    @if($field->get('input_type') === 'text')
        {!! $fieldValue->shouldParseAntlers() ? \Statamic\Facades\Antlers::parse($fieldValue, collect(get_defined_vars())->except('__data', '__path')->toArray()) : $fieldValue !!}
    @elseif($field->get('input_type') === 'email')
        <a href="mailto:{{ $fieldValue }}">{{ $fieldValue }}</a>
    @elseif($field->get('input_type') === 'tel')
        <a href="tel:{{ $fieldValue }}">{{ $fieldValue }}</a>
    @elseif($field->get('input_type') === 'url')
        <a href="{{ $fieldValue }}">{{ $fieldValue }}</a>
    @else
        {!! $fieldValue->shouldParseAntlers() ? \Statamic\Facades\Antlers::parse($fieldValue, collect(get_defined_vars())->except('__data', '__path')->toArray()) : $fieldValue !!}
    @endif
@overwrite
