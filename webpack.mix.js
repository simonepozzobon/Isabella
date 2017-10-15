let mix = require('laravel-mix');

mix
  .sass('resources/assets/sass/app.scss', 'themes/default/css')
  .js('resources/assets/js/app.js', 'themes/default/js')
  .js('resources/assets/js/home.js', 'themes/default/js')
  .extract(['jquery', 'tether', 'bootstrap'])
  .autoload({
      jquery: ['$', 'jQuery', 'jquery'],
      tether: ['Tether'],
      'popper.js/dist/umd/popper.js': ['Popper']
  })
  .browserSync({
      proxy: 'http://isabella.dev:8888/'
  });
