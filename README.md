[![MIT Licensed](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)
[![Latest Version on Packagist](https://img.shields.io/packagist/v/michaelr0/buildamic.svg?style=flat-square)](https://packagist.org/packages/michaelr0/buildamic)
[![Total Downloads](https://img.shields.io/packagist/dt/michaelr0/buildamic.svg?style=flat-square)](https://packagist.org/packages/michaelr0/buildamic) 

Buildamic is a WIP "pagebuilder" for Statamic 3, It is currently in heavy development and likely to have breaking changes with frequency, as such is not considered ready to be used in production.

## Installation

You can install the package via composer:

```bash
composer require michaelr0/buildamic
```

## Usage

### Backend
#### Adding to a blueprint

Add the field to your blueprint, you may then choose what fields or sets will be available for Buildamic to use.

### Frontend
Outputting on the frontend is quite simple, you just use the handle that was given to the field when you configure it in your blueprint.
And reference the below two examples on how to render the output in Antlers or Blade.

By default the handle will be "buildamic"

#### Antlers output
```php
{{ buildamic }}
```
#### Blade output
```php
{!! $buildamic !!}
```
#### View Engines & View Overrides
Currently Buildamic only comes with view files written with Blade.
Buildamic will still work if your front end uses Antlers, it just means that when it loops and renders fields, it will use Blade todo so.
We have planned to allow Antlers to be a selectable option, but have not implemented this.

The following directories would be used should you need to override a given view (or create new ones)
* Antlers: resources/views/vendor/buildamic/antlers (Not currently enabled)
* Blade: resources/views/vendor/buildamic/blade

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

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

## Credits

- [Michael Rook](https://github.com/michaelr0)
- [John Pieters](https://github.com/sliver37)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.