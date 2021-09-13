<div {!! \HandmadeWeb\Buildamic\Helper::HtmlId($row->buildamicSetting('attributes.id')) !!} {{ $row->computedAttribute()['dataAtts'] }} class="buildamic-row {{ $row->computedAttribute('class') }}">
    @foreach($row->value() as $column)
        {!! $buildamic->renderColumn($column) !!}
    @endforeach
</div>
