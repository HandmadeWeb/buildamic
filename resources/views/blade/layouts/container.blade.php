<div id="{{ $buildamic->containerId() }}" class="buildamic-container {{ $buildamic->containerClass() }}">
    @foreach($sections as $section)
        @if($section->type() === 'buildamic-section')
            {!! $buildamic->renderSection($section) !!} 
        @elseif($section->type() === 'buildamic-global-section')
            {!! $buildamic->renderGlobalSection($section) !!}
        @endif
    @endforeach
</div>
