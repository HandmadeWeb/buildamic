@extends('buildamic::blade.layouts.field')

@section('field_content')

    <form method="POST" action="{{ route('statamic.forms.submit', $form->handle()) }}" @if($form->hasFiles()) enctype="multipart/form-data" @endif>
        @csrf
        @method('POST')
        
        @if($form->honeypot())
            <input type="text" name="{{ $form->honeypot() }}" style="display: none !important;" />
        @endif

        @foreach($form->fields() as $form_field)
            <div class="p-2">
                <label>{{ $form_field->display() }}</label>
                <div class="p-1">
                    {!! view($form_field->fieldtype()->view(), array_merge($form_field->toArray(), [
                        'error' => (session('errors') ? session('errors')->getBag("form.{$form->handle()}") : new \Illuminate\Support\MessageBag)->first($form_field->handle()) ?: null,
                        'old' => old($form_field->handle()),
                    ])) !!}
                </div>
                @if($errors && $errors->hasBag("form.{$form->handle()}") && $errors->getBag("form.{$form->handle()}")->has($form_field->handle()))
                    <p class="text-gray-500">{{ $errors->getBag("form.{$form->handle()}")->first($form_field->handle()) }}</p>
                @endif
            </div>
        @endforeach

        <input type="submit" />
    </form>
@overwrite