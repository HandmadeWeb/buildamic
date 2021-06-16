@extends('buildamic::blade.layouts.field')

@section('field_content')
    @if($field->get('value') instanceof \Illuminate\Support\Collection)
        @foreach($field->get('value') as $asset)
            {{-- @dd($asset) --}}
        @endforeach
    @elseif($field->get('value') instanceof \Statamic\Assets\Asset)
        {{-- @dd($field->get('value')) --}}
    @else
        <!-- Asset Field {{ $field->get('uuid') }} could not be rendered -->
    @endif
@overwrite