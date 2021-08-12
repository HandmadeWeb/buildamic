@extends('buildamic::blade.layouts.field')

@section('field_content')
    @php
        $collection = $field->value()->value()->first();
    @endphp

    @if(! empty($collection))
        <div class="collection flex gap-6 lg:gap-10">
            @if($entries = \Statamic\Facades\Entry::query()->where('collection', $collection->id())->get())
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
