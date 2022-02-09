const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix.disableNotifications();

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/buildamic.js', 'public/js').vue().sourceMaps();
// mix.css('resources/css/buildamic.css', 'public/css')

mix.sass('resources/sass/buildamic.scss', 'public/css')
    .options({
        postCss: [tailwindcss('./tailwind.config.js')],
    });

// mix.postCss('resources/css/buildamic.css', 'public/css', [
//     require('postcss-import'),
//     require('tailwindcss'),
//     require('postcss-nested'),
//     require('postcss-preset-env')({ stage: 0 })
// ]);
