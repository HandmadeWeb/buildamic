<div class="buildamic-container">
    @foreach($sections as $section)
        {!! $buildamic->renderSection($section) !!}   
    @endforeach
</div>