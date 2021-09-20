@extends('buildamic::layouts.field')

@section('field_content')
    @php
        $fieldValue = $field->value();
    @endphp
    
    {!! $fieldValue->shouldParseAntlers() ? \Statamic\Facades\Antlers::parse($fieldValue) : $fieldValue !!}
@overwrite
