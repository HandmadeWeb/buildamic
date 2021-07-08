@extends('buildamic::blade.layouts.field')

@php
    $collection = $field->value()->value()->first()->handle();
@endphp

@section('field_content')
    @if(!empty($collection))
        <div class="collection flex gap-6 lg:gap-10">
            @collection($collection)
            {{-- @dd($entry['assets']->value()->first()->id()) --}}
                @if(!$entry)
                    <p>There are no results</p>
                @else
                    <div class="collection__entry flex-1">
                        <h4>{{ $entry['title'] }}</h4>
                    </div>
                @endif
            @endcollection
        </div>
    @endif
@overwrite
