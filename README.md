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

### Adding to a blueprint

Add the field to your blueprint, you may then choose what fields or sets will be available for Buildamic to use.

### Frontend
Outputting on the frontend is quite simple, you just use the handle that was given to the field when you configure it in your blueprint.
And reference the below two examples on how to render the output in Antlers or Blade.

By default the handle will be "buildamic"

#### Antlers
```php
{{ buildamic }}
```
#### Blade
```php
{!! $buildamic !!}
```

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

## Credits

- [Michael Rook](https://github.com/michaelr0)
- [John Pieters](https://github.com/sliver37)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.