@extends('buildamic::blade.layouts.field')

@php
    $slider = $field->value()->value()->data();
    $slides = json_encode($slider->get('slides'));
    $slide_style = $slider->get('slide_style');
    $compontent = $slide_style ? "vue-slider-{$slide_style}" : 'vue-slider';
@endphp

@section('field_content')
    <{{ $compontent }} @if($slides) :slides="{{ $slides }}" @endif ></{{ $compontent }}>
@overwrite
