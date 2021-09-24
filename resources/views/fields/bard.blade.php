@extends('buildamic::layouts.field')

@section('field_content')
    @php 
        $bardValue = $field->value()->value();
    @endphp

    @if(is_array($bardValue))
        @foreach($bardValue as $bardItem)
            @if(isset($bardItem['text']))
                {!! $bardItem['text'] !!}
            @else
                {{-- @dd($bardItem) --}}
            @endif
        @endforeach
    @else
        {!! $bardValue !!}
    @endif
@overwrite
