<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title><?php echo page_title('Page can’t be found'); ?> - <?php echo site_name(); ?></title>
    <meta name="description" content="<?php echo site_description(); ?>">
    <link rel="stylesheet" href="<?php echo theme_url('/css/app.css'); ?>">
  </head>
  <body>
    <div id="app" class="h-100 w-100">
      <!-- <transition :css="false" @enter="enter" @before-leave="beforeLeave" @leave="leave"> -->
        <router-view></router-view>
      <!-- </transition> -->
    </div>
    <script src="<?php echo theme_url('/js/manifest.js'); ?>"></script>
    <script src="<?php echo theme_url('/js/vendor.js'); ?>"></script>
    <script src="<?php echo theme_url('/js/app.js'); ?>"></script>
  </body>
</html>
