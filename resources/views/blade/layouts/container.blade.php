<div id="{{ $buildamic->containerId() }}" class="buildamic-container {{ $buildamic->containerClass() }}">
    @foreach($sections as $section)
        {!! $buildamic->renderSection($section) !!}   
    @endforeach
</div>
