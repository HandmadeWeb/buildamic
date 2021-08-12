@extends('buildamic::blade.layouts.field')

@section('field_content')
    @php 
        $bardFields = $field->value()->value();
    @endphp

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
