@extends('buildamic::blade.layouts.field')

@section('field_content')
<x-search-form></x-search-form>
    {!! $field->value()->shouldParseAntlers() ? \Statamic\Facades\Antlers::parse($field->value()) : $field->value() !!}
@overwrite
