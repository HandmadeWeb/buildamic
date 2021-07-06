@extends('buildamic::blade.layouts.field')

@section('field_content')
@php
    $terms = $field->value()->value()->all();
@endphp

@if(!empty($terms))
    <ul class="terms">
        @foreach($terms as $term)
            {{-- @dd($term->data()) --}}
            <li class="term term-{{ $term->slug() }}">{{ $term->get('title') }}</li>
        @endforeach
    </ul>
@endif
@overwrite
