@extends('buildamic::blade.layouts.field')

@section('field_content')
    {!! $field->get('value') !!}
@overwrite