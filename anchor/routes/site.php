<?php

/**
 * Important pages
 */
$home_page = Registry::get('home_page');

Route::get('api/search-post/(:any)', function($slug) {
    $post = Post::slug($slug);
    if ($post->status != 'published') {
        return Reponse::json('not found', 500);
    }
    if ($extend = Extend::field('post', 'featured_img', $post->id)) {
      $post->featured_img = Extend::value($extend, '');
    }
    return Response::json($post, 200);
});

Route::get('api/search-posts', function(){
    $posts = Post::all();
    // if ($posts->count() == 0) {
    //   return Reponse::json('not found', 500);
    // }

    // $posts = new Items($posts);

    foreach ($posts[1] as $key => $post) {
      if ($extend = Extend::field('post', 'featured_img', $post->id)) {
        $post->featured_img = Extend::value($extend, '');
      }
    }

    return Response::json($posts, 200);
});

Route::get(array('(:all)'), function () use ($home_page) {
    if ($home_page->redirect) {
        return Response::redirect($home_page->redirect);
    }

        Registry::set('page', $home_page);

        return new Template('page');
});



//
// /**
//  * Post listings page
//  */
// $routes = array($posts_page->slug, $posts_page->slug . '/(:num)');
//
// if ($home_page->id == $posts_page->id) {
//     array_unshift($routes, '/');
// }

// Route::get($routes, function ($offset = 1) use ($posts_page) {
//     if ($offset > 0) {
//         // get public listings
//         list($total, $posts) = Post::listing(null, $offset, $per_page = Post::perPage());
//     } else {
//         return Response::create(new Template('404'), 404);
//     }
//     // get the last page
//     $max_page = ($total > $per_page) ? ceil($total / $per_page) : 1;
//
//     // stop users browsing to non existing ranges
//     if (($offset > $max_page) or ($offset < 1)) {
//         return Response::create(new Template('404'), 404);
//     }
//
//     $posts = new Items($posts);
//
//     Registry::set('posts', $posts);
//     Registry::set('total_posts', $total);
//     Registry::set('page', $posts_page);
//     Registry::set('page_offset', $offset);
//
//     return new Template('posts');
// });


//
// /**
//  * Redirect by article ID
//  */
// Route::get('(:num)', function ($id) use ($posts_page) {
//     if (! $post = Post::id($id)) {
//         return Response::create(new Template('404'), 404);
//     }
//
//     return Response::redirect($posts_page->slug . '/' . $post->data['slug']);
// });


// /**
//  * View article
//  */


// Route::get($posts_page->slug . '/(:any)', function ($slug) use ($posts_page) {
//     if (! $post = Post::slug($slug)) {
//         return Response::create(new Template('404'), 404);
//     }
//
//     Registry::set('page', $posts_page);
//     Registry::set('article', $post);
//     Registry::set('category', Category::find($post->category));
//
//     if ($post->status != 'published') {
//         if (!Auth::user()) {
//             Registry::set('article', false);
//             return Response::create(new Template('404'), 404);
//         }
//     }
//
//     return new Template('article');
// });

// /**
//  * Search
//  */
// Route::get(array('search', 'search/(:any)', 'search/(:any)/(:any)', 'search/(:any)/(:any)/(:num)'), function ($whatSearching = 'all', $slug = '', $offset = 1) {
//     // mock search page
//     $page = new Page;
//     $page->id = 0;
//     $page->title = 'Search';
//     $page->slug = 'search';
//
//     if ($offset <= 0) {
//         return Response::create(new Template('404'), 404);
//     }
//
//     // Convert custom escaped characters and escape MySQL special characters.
//     // http://stackoverflow.com/questions/712580/list-of-special-characters-for-sql-like-clause
//     $term = str_replace(
//                 array('-sl-', '-bsl-', '-sp-', '%', '_'),
//                 array('/', '\\\\', ' ', '\\%', '\\_'),
//                 $slug
//             );
//
//     // Posts, pages, or all
//     if ($whatSearching === 'posts') {
//         list($total, $results) = Post::search($term, $offset, Post::perPage());
//     } elseif ($whatSearching === 'pages') {
//         list($total, $results) = Page::search($term, $offset);
//     } else {
//         $postResults = Post::search($term, $offset, Post::perPage());
//         $pageResults = Page::search($term, $offset);
//         $total = $postResults[0] + $pageResults[0];
//         $results = array_merge($postResults[1], $pageResults[1]);
//     }
//
//     // search templating vars
//     $safeTerm = eq(str_replace(
//                     array('\\\\', '\\%', '\\_'),
//                     array('\\', '%', '_'),
//                     $term
//                 ));
//
//     Registry::set('page', $page);
//     Registry::set('page_offset', $offset);
//     Registry::set('search_term', $safeTerm);
//     Registry::set('search_results', new Items($results));
//     Registry::set('total_posts', $total);
//
//     return new Template('search');
// });
//
// Route::post('search', function () {
//     // Search term, placeholders for / and \
//     $term = str_replace(
//                 array('/', '\\', ' '),
//                 array('-sl-', '-bsl-', '-sp-'),
//                 Input::get('term', '')
//             );
//     $term = rawurlencode($term);
//
//     // Get what we are searching for
//     $whatSearch = Input::get('whatSearch', '');
//
//     // clamp the choices
//     switch ($whatSearch) {
//         case 'posts':
//             break;
//         case 'pages':
//             break;
//         default:
//             $whatSearch = 'all';
//             break;
//     }
//
//     return Response::redirect('search/' . $whatSearch . '/' . $term);
// });
//
