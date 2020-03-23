const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

 const appJS = [
   'resources/js/variables.js',
   'resources/js/ajax-requests.js',
   'resources/js/functions.js'
 ];

mix.sass('resources/sass/app.scss', 'public/css').options({
    processCssUrls: false
})
.combine(appJS,'public/js/app.js');
