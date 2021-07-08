<div id="{{ $row->buildamicSetting('attributes.id') }}" class="buildamic-row {{ $row->buildamicSetting('attributes.class') }}">
    @foreach($row->value() as $column)
        {!! $buildamic->renderColumn($column) !!}   
    @endforeach
</div>