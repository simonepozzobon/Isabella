let mix = require('laravel-mix');

mix
    .js('resources/assets/js/app.js', 'themes/default/js')
    .extract(['jquery', 'vue', 'vue-router', 'bootstrap'])
    .autoload({
        jquery: ['$', 'jQuery', 'jquery'],
        'popper.js/dist/umd/popper.js': ['Popper'],
    })
    .sass('resources/assets/sass/app.scss', 'themes/default/css')
    .combine(['themes/default/js/manifest.js', 'themes/default/js/vendor.js', 'themes/default/js/app.js'], 'themes/default/js/isabella.js')
    .minify('themes/default/js/isabella.js')
    .minify('themes/default/css/app.css')
    .browserSync({
        proxy: 'http://isabella.test',
        browser: "google chrome",
        files: [
            '**/*',
        ]
    })
    .webpackConfig({
        resolve: {
            alias: {
                'styles'    : path.resolve(__dirname, 'resources/assets/sass'),
                'utils'     : path.resolve(__dirname, 'resources/assets/js/utils')
            }
        }
    });
