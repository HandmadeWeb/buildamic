@php
 $fields = $field->value()->raw();
 $percentage = 350 - (350 * $fields['percentage'] / 100);
 $dash_color = $fields['dash_color'];
 $factoid = $fields['small_factoid'];
@endphp

<div class="progress-ring">
    <svg
       class="progress-ring-svg" width="280" height="280" viewBox="0 0 130 130">
        <circle
        class="progress-ring__bg"
        stroke-width="8"
        fill="transparent"
        cx="65"
        cy="65"
        r="55"/>
      <circle
        class="progress-ring__circle"
        stroke-width="2"
        fill="transparent"
        stroke-dasharray="3"
        stroke-dashoffset="20"
        stroke-linecap="round"
        stroke="{{ $dash_color }}"
        cx="65"
        cy="65"
        r="55"/>
        <circle
        class="progress-ring__cover"
        stroke-width="5"
        fill="transparent"
        cx="65"
        cy="65"
        r="55"
        stroke-dasharray="{{ $percentage }} 350"
    ></circle>
    </svg>
    <div class="progress-ring__content flex flex-col items-center justify-center">
        <div class="progress-ring__progress">
            {{ $fields['percentage'] }}%
        </div>
        <div class="progress-ring__factoid">
            {{ $factoid }}
        </div>
    </div>
</div>
