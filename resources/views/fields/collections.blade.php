@extends('buildamic::layouts.field')

@section('field_content')
    @php
        $collections = $field->value()->value();
    @endphp

    @if($collections->isNotEmpty())
        <div class="collection flex flex-col lg:flex-row gap-6 lg:gap-10">
            @if($entries = \Statamic\Facades\Entry::query()->where('collection', $collections->first()->id())->get())
                @foreach($entries as $entry)
                    <div class="collection__entry flex-1">
                        <h4>{{ $entry->augmentedValue('title') }}</h4>
                    </div>
                @endforeach
            @else
                <p>There are no results</p>
            @endif
        </div>
    @endif
@overwrite
