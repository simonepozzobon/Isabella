let mix = require('laravel-mix');

mix
    .sass('resources/assets/sass/app.scss', 'themes/default/css')
    .js('resources/assets/js/app.js', 'themes/default/js')
    .extract(['jquery', 'vue', 'vue-router', 'bootstrap'])
    .autoload({
        jquery: ['$', 'jQuery', 'jquery'],
        'popper.js/dist/umd/popper.js': ['Popper'],
    })
    .browserSync({
        proxy: 'http://isabella.test',
        browser: "google chrome",
        files: [
            '**/*',
        ]
    });
