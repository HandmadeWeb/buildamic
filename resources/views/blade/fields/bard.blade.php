@extends('buildamic::blade.layouts.field')

@php 
    $bardFields = $field->value()->value();
@endphp

@section('field_content')
    @if(is_array($bardFields))
        @foreach($bardFields as $bardItem)
            @if(isset($bardItem['text']))
                {!! $bardItem['text'] !!}
            @else
                {{-- @dd($bardItem) --}}
            @endif
        @endforeach
    @else
        {!! $field->value() !!}
    @endif
@overwrite
