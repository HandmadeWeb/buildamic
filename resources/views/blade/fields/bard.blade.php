@extends('buildamic::blade.layouts.field')

@section('field_content')
    {{-- @dd($field->get('sets')) --}}
    @if(is_array($field->value()->value()))
        @foreach($field->value()->value() as $bardItem)
            @if(isset($bardItem['text']))
                {!! $bardItem['text'] !!}
            @else
                @dd($bardItem)
            @endif
        @endforeach
    @else
        {!! $field->value() !!}
    @endif
@overwrite
