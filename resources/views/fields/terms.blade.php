@extends('buildamic::layouts.field')

@section('field_content')
    @php
        $terms = $field->value()->value();
    @endphp

    @if($terms->isNotEmpty())
        <ul class="terms">
            @foreach($terms as $term)
                <li class="term term-{{ $term->slug() }}">{{ $term->get('title') }}</li>
            @endforeach
        </ul>
    @endif
@overwrite
