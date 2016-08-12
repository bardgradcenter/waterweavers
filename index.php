<!DOCTYPE html>
  <head>
    <meta name="viewport" content="width=device-width, height=device-height, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
    <link href='http://fonts.googleapis.com/css?family=Arvo:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
    <link href="//cloud.webtype.com/css/087f02d9-2620-4e86-87ce-d064d2b8f56a.css" rel="stylesheet" type="text/css" />
    <link rel="icon" href="<?php bloginfo('template_url'); ?>/images/favicon.ico" type="image/x-icon">
    <title>Waterweavers</title>
    <script>
    if (window.top!=window.self)
    {
      // In a Frame or IFrame
      document.write('<link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_directory_uri() ?>/appStyles.css">');
    }
    </script>
    <?php wp_head(); ?>
  </head>
 
  <body>
    <?php $sitewide = 2; ?>
    <?php if ( have_posts() ) : ?>
      <!-- WordPress has found matching posts -->
      <div id="titlePane" class="titleDown">
        <h1>Waterweavers</h1><br>
        <div id="controlPanel">
          <div class="filter checkboxAbout"><div id="checkboxAbout" class="checkbox checked"></div>About</div>
          <div class="filter checkboxList"><div id="checkboxList" class="checkbox unchecked"></div>List of Artists</div>
          <div class="filter checkboxObjects"><div id="checkboxObjects" class="checkbox checked"></div>Exhibition</div>
              <div class="filter checkboxRiver"><div id="checkboxRiver" class="checkbox checked"></div></label>Images of the River</div>
              <div class="filter">Map: 
                <select name="mapTypes" id="mapTypes">
                  <option id="water" value="water">Water</option>
                  <option id="borders" value="borders">Borders</option>
                  <option id="satellite" value="satellite">Satellite</option>
                  <option id="terrain" value="terrain">Terrain</option>
                </select>
              </div>
            </div>
      </div>
      <div id="listView" class="listClosed">
        <div id="listSizing">
        <div class="listContainer" id="listContainer">
          <?php query_posts('cat=3&showposts=500'); ?>
          <?php $posts = get_posts('cat=3&numberposts=500&offset=0'); ?>
          <?php  $i = 1; while ( have_posts() ) : the_post(); ?>
            <?php if ( get_post_meta($post->ID, 'latlng', true) !== '' ) : ?>
              <div id="Item<?php echo $i; ?>" class="hiddenListItems theListItem<?php the_ID(); ?>"></div>
            <?php endif; ?>
            <?php $i++;  ?>
          <?php endwhile; ?>
          <?php query_posts('cat=4&showposts=500&meta_key=sorting_field&orderby=meta_value&order=ASC'); ?>
          <?php $posts = get_posts('cat=4&numberposts=500&offset=0&meta_key=sorting_field&orderby=meta_value&order=ASC'); ?>
          <?php while ( have_posts() ) : the_post(); ?>
            <div id="artist<?php the_ID(); ?>" class="listItem listItemArtist artist<?php the_ID(); ?>">
              <div><?php the_title();?></div>
            </div>

            <?php $post_objects = get_field('related_objects');
            if( $post_objects ):
              foreach ( $post_objects as $post): setup_postdata($post); ?>
                <div class="linkedListItem<?php the_ID(); ?> listItem listItemObject">
                  <div><?php the_title();?></div>
                </div>
              <?php endforeach; ?>
            <?php wp_reset_postdata(); ?>
            <?php endif; ?>

            <script>
              <?php $post_objects = get_field('related_objects');
              if( $post_objects ): ?>
                $(document).ready(function() {
                  <?php foreach ( $post_objects as $post): setup_postdata($post); ?>
                    var theListItemId<?php the_ID(); ?> = 'list' + $('.listContainer').find('.theListItem<?php the_ID(); ?>').attr('id');
                    $(".linkedListItem<?php the_ID(); ?>").addClass(theListItemId<?php the_ID(); ?>);                
                  <?php endforeach; ?>
                });
              <?php wp_reset_postdata(); ?>
              <?php endif; ?>
            </script>

          <?php endwhile; ?>
        </div>
        <br clear="all">
        </div>
        <br clear="all">
      </div>
      <div id="mapPane">
        <div id="aboutText">
          <?php the_field('about_text', $sitewide); ?>
          <div id="closeBtn" class="nonMobile">
            X CLOSE
          </div>
          <div id="closeBtn" class="mobile">
            View the Interactive Map
          </div>
        </div>
        <div id="map"><br clear="all"></div>
        <br clear="all">
      </div>
      <div class="contentPane contentDown" id="contentPane">
        <div class="contentPaneContainer">
          <div class="updownbtns">
            <button id="up">Up &#8593;</button>
            <button id="down">&#8595; Hide</button>
            <br clear="all">
          </div>
          <div style="height:100%;">
            <?php query_posts('cat=3&showposts=500'); ?>
            <?php $posts = get_posts('cat=3&numberposts=500&offset=0'); ?>
            <?php  $i = 1; while ( have_posts() ) : the_post(); ?>
              <?php if ( get_post_meta($post->ID, 'latlng', true) !== '' ) : ?>
                <div id="item<?php echo $i; ?>" class="postItem post objectItem" style="display:none;">
                  <div class="teaserContent">
                    <div class="postHeaders">
                      <h1><?php the_title(); ?></h1>
                      <?php $post_object = get_field('artist_name');
                      if( $post_object ):
                          $post = $post_object;
                          setup_postdata( $post ); ?>
                        <h2 class="artistName"><a href="#<?php the_field('url_hash'); ?>" class="artist<?php the_ID(); ?>"><?php the_title(); ?></a></h2>
                        <?php wp_reset_postdata();
                      endif; ?>
                    </div>
                    <div class="featuredImageContainer">
                      <div id="featuredImage<?php echo $i; ?>" class="featuredImage">
                        <?php the_post_thumbnail('thumbnail'); ?>
                      </div>
                    </div>
                    <br clear="all">
                  </div>
                  <div class="postContent">
                    <?php the_content(); ?>
                  </div>
                  <div class="images">
                    <?php
                    $images = get_field('object_images');
 
                    if( $images ): ?>
                        <div class="lrgImg">
                            <ul class="slides">
                                <?php foreach( $images as $image ): ?>
                                    <li id="lrg<?php echo $image['id']; ?>">
                                        <a href="<?php echo $image['sizes']['large']; ?>"><img src="<?php echo $image['sizes']['medium']; ?>" alt="<?php echo $image['alt']; ?>" border="0" title="<?php echo $image['caption']; ?>" /></a>
                                        <div class="caption"><?php echo $image['caption']; ?></div>
                                    </li>
                                <?php endforeach; ?>
                            </ul>
                        </div>
                        <div class="thumbnail">
                          <ul class="thumbGroup">
                            <?php foreach( $images as $image ): ?>
                              <li id="thumb<?php echo $image['id']; ?>">
                                <div class="thumbRadio"></div>
                              </li>
                              <script>
                                $('#thumb<?php echo $image['id']; ?>').mouseover(function() {
                                  $('.activeThumb').removeClass('activeThumb');
                                  $('#thumb<?php echo $image['id']; ?> .thumbRadio').addClass('activeThumb');
                                  $('.activeLrgImage').hide();
                                  $('.activeLrgImage').removeClass('activeLrgImage');
                                  $('#lrg<?php echo $image['id']; ?>').show();
                                  $('#lrg<?php echo $image['id']; ?>').addClass('activeLrgImage');
                                })
                              </script>
                            <?php endforeach; ?>
                          </ul>
                        </div>
                    <?php endif; 
                     
                    ?>
                  </div>
                </div>
              <?php endif; ?>
              <?php $i++;  ?>
            <?php endwhile; ?>

            <?php query_posts('cat=2&showposts=500'); ?>
            <?php $posts = get_posts('cat=2&numberposts=500&offset=0'); ?>
            <?php  $i = 1; while ( have_posts() ) : the_post(); ?>
              <?php if ( get_post_meta($post->ID, 'latlng', true) !== '' ) : ?>
                <div id="river<?php echo $i; ?>" class="postItem post riverItem" style="display:none;">
                  <div class="teaserContent">
                    <div class="postHeaders">
                      <h1><?php the_title(); ?></h1>
                      <h2><?php echo get_post_meta($post->ID, 'latlng', true); ?></h2>
                    </div>
                    <div class="featuredImageContainer">
                      <div id="featuredRImage<?php echo $i; ?>" class="featuredImage">
                        <?php the_post_thumbnail('thumbnail'); ?>
                      </div>
                    </div>
                    <br clear="all">
                  </div>
                  <div class="images">
                    <?php the_content(); ?>
                    <div class="source">
                      <p><?php the_field('source'); ?></p>
                    </div>
                  </div>
                </div>
              <?php endif; ?>
              <?php $i++;  ?>
            <?php endwhile; ?>

            <?php query_posts('cat=4&showposts=500'); ?>
            <?php $posts = get_posts('cat=4&numberposts=500&offset=0'); ?>
            <?php while ( have_posts() ) : the_post(); ?>
              <div id="itemArtist<?php the_ID(); ?>" class="postItem artistItem" style="display:none;">
                <div class="teaserContent">
                  <div class="postHeaders">
                    <h1><?php the_title(); ?></h1>
                    <h2><?php the_field('artist-deets'); ?></h2>
                  </div>
                  <br clear="all">
                </div>
                <div class="postContent">
                  <div class="artistContent">
                    <?php the_content(); ?>
                  </div>
                  <div class="relatedExItems">
                    <h2 id='relatedExHeader'>Related Exhibition Objects</h2>
                    <?php $post_objects = get_field('related_objects');
                    if( $post_objects ):
                      foreach ( $post_objects as $post): setup_postdata($post); ?>
                        <div class="linkedListItem<?php the_ID(); ?> relatedExItem">
                          <?php the_post_thumbnail('medium'); ?>
                          <h2><?php the_title();?></h2>
                          <br clear="all">
                        </div>
                      <?php endforeach; ?>
                    <?php wp_reset_postdata(); ?>
                    <?php endif; ?>



                  </div>
                </div>
              </div>
              <script>
                $('.artist<?php the_ID(); ?>').click(function(){
                  var theDivId = 'Artist<?php the_ID(); ?>'
                  $('.teaserContent').fadeIn(200);
                  showContent(theDivId);
                  up();
                  window.location.hash = "<?php the_field('url_hash'); ?>";
                });
                $(window).load(function() {
                  var thehash = "<?php the_field('url_hash'); ?>";
                      if(urlhash == thehash){
                        var theDivId = 'Artist<?php the_ID(); ?>'
                        $('.teaserContent').fadeIn(200);
                    showContent(theDivId);
                    $(up);
                      }
                    });
              </script>
            <?php endwhile; ?>
          </div>
        </div>
      </div>
      <script type="text/javascript">
        var locations = [
          <?php query_posts('cat=3&showposts=500'); ?>
          <?php $posts = get_posts('cat=3&numberposts=500&offset=0'); ?>
          <?php  $i = 1; while ( have_posts() ) : the_post(); ?>
            <?php if ( get_post_meta($post->ID, 'latlng', true) !== '' ) : ?>
              {
                latlng : new google.maps.LatLng<?php echo get_post_meta($post->ID, 'latlng', true); ?>,
                image : document.getElementById('featuredImage<?php echo $i; ?>'),
                info : document.getElementById('item<?php echo $i; ?>'),
                category: '<?php single_cat_title(); ?>',
                thehash: '<?php the_field('url_hash'); ?>',
              },
            <?php endif; ?>
          <?php $i++; endwhile; ?>
        ];
        var riverSpots = [
          <?php query_posts('cat=2&showposts=500'); ?>
          <?php $posts = get_posts('cat=2&numberposts=500&offset=0'); ?>
          <?php  $i = 1; while ( have_posts() ) : the_post(); ?>
            <?php if ( get_post_meta($post->ID, 'latlng', true) !== '' ) : ?>
              {
                latlng : new google.maps.LatLng<?php echo get_post_meta($post->ID, 'latlng', true); ?>,
                rimage : document.getElementById('featuredRImage<?php echo $i; ?>'),
                info : document.getElementById('river<?php echo $i; ?>'),
                category: '<?php single_cat_title(); ?>',
                thehash: '<?php the_field('url_hash'); ?>',
              },
            <?php endif; ?>
          <?php $i++; endwhile; ?>
        ];
      </script>
    <?php else : ?>
      <!-- No matching posts, show an error -->
      <h1>Error 404 &mdash; Page not found.</h1>
    <?php endif; ?>
    <?php wp_footer(); ?>
    <script>
    if (window.top!=window.self)
    {
      // In a Frame or IFrame
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-10183145-4', 'waterweavers.dreamhosters.com');
      if(window.location.hash) {
         ga('send', 'pageview', {
           'page': location.pathname + location.search  + location.hash
          });
        } else { 
          ga('send', 'pageview');
        }
        $(window).on('hashchange', function() {
          ga('send', 'pageview', {
           'page': location.pathname + location.search  + location.hash
          });
        });

    } else {
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
       m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
        ga('create', 'UA-10183145-3', 'bard.edu');
        if(window.location.hash) {
         ga('send', 'pageview', {
           'page': location.pathname + location.search  + location.hash
          });
        } else { 
          ga('send', 'pageview');
        }
        $(window).on('hashchange', function() {
          ga('send', 'pageview', {
           'page': location.pathname + location.search  + location.hash
          });
        });
    }
    </script>
  </body>
</html>
