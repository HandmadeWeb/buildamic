@extends('buildamic::blade.layouts.field')

@php
    $terms = $field->value()->value()->all();
@endphp

@section('field_content')
    @if(!empty($terms))
        <ul class="terms">
            @foreach($terms as $term)
                {{-- @dd($term->data()) --}}
                <li class="term term-{{ $term->slug() }}">{{ $term->get('title') }}</li>
            @endforeach
        </ul>
    @endif
@overwrite
