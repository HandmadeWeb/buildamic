@extends('buildamic::layouts.field')

@section('field_content')
    @php
        $fieldValue = $field->value();
    @endphp

    {!! $fieldValue->shouldParseAntlers() ? \Statamic\Facades\Antlers::parse($fieldValue, collect(get_defined_vars())->except('__data', '__path')->toArray()) : $fieldValue !!}
@overwrite
