@extends('buildamic::blade.layouts.field')

@section('field_content')
@php
    $collection = $field->value()->value()->first()->handle();
@endphp

@if(!empty($collection))
<div class="collection flex gap-6 lg:gap-10">
    @collection($collection)
    {{-- @dd($entry['assets']->value()->first()->id()) --}}
        @if(!$entry)
            <p>There are no results</p>
        @else
            <div class="collection__entry flex-1" data-category="{{ $entry['developmental_level']->value()->first()->title() }}">
                <div class="collection__image mb-8">
                    @glide($entry['assets']->value()->first()->id(), ['width' => 740, 'height' => 250])
                        <img class="rounded" src="{{ $url }}">
                    @endglide
                </div>
                <h4>{{ $entry['title'] }}</h4>
            </div>
        @endif
    @endcollection
</div>
@endif
@overwrite
