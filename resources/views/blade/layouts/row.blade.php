<div id="{{ $row->buildamicSetting('attributes.id') }}" class="buildamic-row {{ $row->computedAttribute('class') }}">
    @foreach($row->value() as $column)
        {!! $buildamic->renderColumn($column) !!}   
    @endforeach
</div>