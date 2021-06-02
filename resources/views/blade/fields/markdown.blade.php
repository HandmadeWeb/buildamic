@extends('buildamic::blade.layouts.field')

@section('field_content')
    {!! modify($field['value'])->markdown() !!}
@overwrite