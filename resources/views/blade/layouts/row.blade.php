<div {!! \HandmadeWeb\Buildamic\Helper::HtmlId($row->buildamicSetting('attributes.id')) !!} {{ $row->computedAttribute()['dataAtts'] }} class="buildamic-row {{ $row->computedAttribute('class') }} {{ $row->computedAttribute('col_gap') }}">
    @foreach($row->value() as $column)
        {!! $buildamic->renderColumn($column) !!}
    @endforeach
</div>
