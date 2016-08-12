<?php
if ( function_exists( 'add_theme_support' ) ) { 
add_theme_support( 'post-thumbnails' );
}

function waterweavers_scripts() {
	wp_register_style( 'mainStyles', get_stylesheet_uri() );
	wp_register_style( 'cursorMessageStyles', get_stylesheet_directory_uri() . '/js/0.2/jquery.cursorMessage.css' );

	wp_enqueue_style( 'mainStyles', get_stylesheet_uri() );
	wp_enqueue_style( 'cursorMessageStyles', get_stylesheet_directory_uri() . '/js/0.2/jquery.cursorMessage.css' );
	/*   REGISTER ALL JS FOR SITE */
    wp_register_script( 'jQuery', 'http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js' );
    wp_register_script( 'customjQueryUI', get_template_directory_uri() . '/js/jquery-ui-1.10.4.custom.min.js' );
    wp_register_script( 'slimScroll', get_template_directory_uri() . '/js/jQuery-slimScroll-1.3.0/jquery.slimscroll.js' );
	wp_register_script( 'googleMaps', 'http://maps.googleapis.com/maps/api/js?key=AIzaSyBj3Gr9mvVpPA3oo82rfTydrhZEAD8wEng&sensor=false' );
	wp_register_script( 'infobubble', get_template_directory_uri() . '/js/infobubble.js' );
	wp_register_script( 'mapLabel', get_template_directory_uri() . '/js/maplabel-compiled.js' );
	wp_register_script( 'mainScripts', get_template_directory_uri() . '/js/map2.js' );

	wp_enqueue_script( 'jQuery' );
	wp_enqueue_script( 'customjQueryUI' );
	wp_enqueue_script( 'slimScroll' );
	wp_enqueue_script( 'googleMaps' );
	wp_enqueue_script( 'infobubble' );
	wp_enqueue_script( 'mapLabel' );
	wp_enqueue_script( 'mainScripts' );
}

add_action( 'wp_enqueue_scripts', 'waterweavers_scripts' );
?>
