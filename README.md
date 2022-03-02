[![Latest Version on Packagist](https://img.shields.io/packagist/v/handmadeweb/buildamic.svg?style=flat-square)](https://packagist.org/packages/handmadeweb/buildamic)
[![Total Downloads](https://img.shields.io/packagist/dt/handmadeweb/buildamic.svg?style=flat-square)](https://packagist.org/packages/handmadeweb/buildamic)
[![MIT Licensed](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE.md)
[![Run Tests](https://github.com/handmadeweb/buildamic/actions/workflows/tests.yml/badge.svg)](https://github.com/handmadeweb/buildamic/actions/workflows/tests.yml)

Buildamic is a WIP "pagebuilder" for Statamic 3, It is currently in heavy development and likely to have breaking changes with frequency, as such is not considered ready to be used in production.

## THIS IS A BETA
Please be aware that it is not recommended to use this in production just yet.

## Requirements
* PHP 8.0 or higher
* Statamic 3.2 or higher
* Laravel 8.0 or higher

## Installation

You can install the package via composer:

```bash
composer require handmadeweb/buildamic
```

## Usage

### Backend
#### Adding to a blueprint

Add the field to your blueprint, you may then choose what fields or sets will be available for Buildamic to use.

#### Field/Fieldset/Set Display names
Buildamic will display the "label" for the "field" from the first available.
* Admin Label (Found in the options area of the "field")
* Display (As configured on the blueprint)
* Handle (As configured on the blueprint)

### Frontend
#### Grid
Buildamic comes with a grid starting point (which expects that you are using TailWind), If you aren't going to be writing your own grid, then you should include Buildamic's grid style in your header via the provided helpers for Antlers: `{{ buildamicStyles }}`, Blade: `@buildamicStyles` or PHP: `echo BuildamicHelper()->styles();`

#### Outputting
Outputting on the frontend is quite simple, you just use the handle that was given to the field when you configure it in your blueprint.
And reference the below two examples on how to render the output in Antlers or Blade.

Statamic automatically casts the handle to an instance of \Statamic\Fields\Value and will automatically render via the __toString methods.

By default the handle will be "buildamic"

#### Antlers output
```php
// The easy way
{{ buildamic }}
```

#### Blade output
If you are using Blade then We advise using "Our perferred way" listed below, which is slightly faster and will show a more complete picture should you choose to run a code profiler (Example: [blackfire.io](https://www.blackfire.io/))

```php
// The easy way
{!! $buildamic !!}

// Our perferred way.
{!! $buildamic->value()->render() !!}
```

#### View Engines & View Overrides
Currently Buildamic only comes with view files written in Blade.
Buildamic will still work if your front end uses Antlers, it just means that when Buildamic loops and renders fields, Blade will be used to do so.

Should you need to override a given view (or create new ones) you can do so by creating the views at `resources/views/vendor/buildamic`

#### Field view order
When Buildamic tries to render a field, it will use the first available file, checked in the below order.

* field type: markdown
* field handle: hero-blurb
* loaded file: fields/markdown-hero-blurb.blade.php

Then

* field type: markdown
* loaded file: fields/markdown.blade.php

Then

* catch all
* loaded file: default-field.blade.php

In the event that a suitable view could not be located, rather than erroring out or logging an exception, something like the below will instead appear as a html comment.

```html
<!-- Field could not be rendered, View not found -->
<!-- Type: bard -->
<!-- Handle: heading -->
```

#### Fieldset view order
When Buildamic tries to render a fieldset, it will first try to find a view that matches the handle of the fieldset.
* handle: blurb
* loaded file: fieldsets/blurb.blade.php

If no suitable view was found, then Buildamic will loop through each field within the fieldset and will treat them as separate fields, in which case the fields view order will apply.

#### Set view order
When Buildamic tries to render a set, it will first try to find a view that matches the handle of the set.

* handle: blurb
* loaded file: sets/blurb.blade.php

If no suitable view was found, then Buildamic will loop through each field within the set and will treat them as separate fields, in which case the fields view order will apply.

## Changelog

Please see [CHANGELOG](https://github.com/handmadeweb/buildamic/blob/main/CHANGELOG.md) for more information what has changed recently.

## Contributing

Please see [CONTRIBUTING](https://github.com/handmadeweb/buildamic/blob/main/CONTRIBUTING.md) for details.

## Credits

- [Handmade Web & Design](https://github.com/handmadeweb)
- [Michael Rook](https://github.com/michaelr0)
- [John Pieters](https://github.com/sliver37)
- [All Contributors](https://github.com/handmadeweb/buildamic/graphs/contributors)

## License

The MIT License (MIT). Please see [License File](https://github.com/handmadeweb/buildamic/blob/main/LICENSE.md) for more information.
