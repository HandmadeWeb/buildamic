@extends('buildamic::blade.layouts.field')

@section('field_content')

@php
    $slider = $field->value()->value()->data();
    $slides = json_encode($slider->get('slides'));
    $slide_style = $slider->get('slide_style');
    $compontent = $slide_style ? "vue-slider-{$slide_style}" : 'vue-slider';
@endphp

    <{{ $compontent }} @if($slides) :slides="{{ $slides }}" @endif ></{{ $compontent }}>

@overwrite
