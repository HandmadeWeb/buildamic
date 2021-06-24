<div id="{{ $row->field()->buildamicSetting('attributes.id') ?? '' }}" class="buildamic-row {{ $row->field()->buildamicSetting('attributes.class') ?? '' }}">
    @foreach($row->value() as $column)
        {!! $buildamic->renderColumn($column) !!}   
    @endforeach
</div>