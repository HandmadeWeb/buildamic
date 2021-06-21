<div class="section">
    @foreach($altamic->rows->where('parent', $section['uuid']) as $row)
        {!! $altamic->renderRow($row) !!}   
    @endforeach
</div>