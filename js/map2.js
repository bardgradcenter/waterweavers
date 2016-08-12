var theDivId;
var WATERMAP = 'custom_style';
var riverMarker;
var objectMarker;
var theListId;
var listItemId;
var listItem;
var map;
var infoBubble;
var urlhash = (window.location.hash).replace("#","").replace("/","");
(function (jQuery) {
  function initialize() {
    var featureOpts = [
      {
        stylers: [
        ]
      },{
        featureType: 'water',
        stylers: [
          { color: '#10b9dd' },
        ]
      },{
        featureType: "water",
        elementType: "labels",
        stylers: [
          { visibility: "on" },
          { color: "#333333"},
          { hue: "#333333" }
        ]
      },{
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [
          { visibility: "off" },
        ]
      },{
        featureType: "administrative",
        stylers: [
          { visibility: "off" }
        ]
      },{
        featureType: "landscape",
        stylers: [
          { visibility: "on" }
        ]
      },{
        featureType: "landscape",
        elementType: "geometry",
        stylers: [
          { color: "#e8edcd" }
        ]
      },{
        featureType: "landscape",
        elementType: "geometry.stroke",
        stylers: [
          { visibility: "off" }
        ]
      },{
        featureType: "landscape",
        elementType: "labels",
        stylers: [
          { visibility: "off" }
        ]
      },{
        featureType: "poi",
        stylers: [
          { visibility: "off" }
        ]
      },{
        featureType: "road",
        stylers: [
          { visibility: "off" }
        ]
      },{
        featureType: 'transit',
        stylers: [
          { visibility: 'off' }
        ]
      }
    ];



    var styles = [
      {
        stylers: [
        ]
      },{
        featureType: 'water',
        stylers: [
          { color: '#10b9dd' },
        ]
      },{
        featureType: "water",
        elementType: "labels",
        stylers: [
          { visibility: "on" },
          { color: "#333333"},
          { hue: "#333333" }
        ]
      },{
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [
          { visibility: "off" },
        ]
      },{
        featureType: "landscape",
        elementType: "geometry",
        stylers: [
          { color: "#e8edcd" }
        ]
      },{
        featureType: "landscape",
        elementType: "geometry.stroke",
        stylers: [
          { visibility: "off" }
        ]
      }
    ];
    var mapOptions = {
      zoom: 6,
      center: new google.maps.LatLng(5.165456, -72.548015),
      scrollwheel: true,
      styles: styles,
      mapTypeControl: false,
      mapTypeControlOptions: {
        mapTypeIds: [WATERMAP, google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.SATELLITE, google.maps.MapTypeId.TERRAIN],
        position: google.maps.ControlPosition.RIGHT_TOP
      },
      streetViewControl: false,
      zoomControl: true,
      zoomControlOptions: {
        position: google.maps.ControlPosition.LEFT_TOP
      },
      panControl: false,
      mapTypeId: WATERMAP
    }
    map = new google.maps.Map(document.getElementById('map'),
      mapOptions);

    var styledMapOptions = {
      name: 'Water Only'
    };



    var zoomDiv = document.createElement('div');
    zoomDiv.className = 'zoomControls';
    zoomDiv.index = 0;
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(zoomDiv);

    var mapTypeDiv = document.createElement('div');
    mapTypeDiv.className = 'mapTypeControls';
    mapTypeDiv.index = 0;
    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(mapTypeDiv);


    var wwMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);
    map.mapTypes.set(WATERMAP, wwMapType);

    var infoBubble = new InfoBubble({
      map: map,
      shadowStyle: 0,
      padding: 0,
      borderRadius: 0,
      disableAutoPan: true,
      backgroundClassName: 'theInfoBoxes',
      disableAnimation: '',
      hideCloseButton: true,
      borderColor: '#cfcfcf'
    });

    // BEGIN OBJECT MARKERS
    var oMarkers = [];
    for (var i = 0; i < locations.length; i++) {  
      var objectMarkerImage = new google.maps.MarkerImage('http://waterweavers.bgc.bard.edu/wp-content/themes/waterweavers/markers/marker_orange.png',
          new google.maps.Size(16,16),
          new google.maps.Point(0,0),
          new google.maps.Point(8,16));  
      var objectMarker = new google.maps.Marker({
          position: locations[i].latlng,
          category: locations[i].category,
          map: map,
          icon: objectMarkerImage
      });
      oMarkers.push(objectMarker);
      var theListId = (objectMarker, i) + 1;
      var listItemClass = ('.listItem' + theListId)
      var listItemLeave = (function(objectMarker, i) {
          return function() {
            infoBubble.close(map, objectMarker);
          }
      }(objectMarker, i));
      var listItemEnter = (function(objectMarker, i){
        return function() {
          infoBubble.setContent(locations[i].image);
          infoBubble.open(map, objectMarker);
          jQuery(this).bind('mouseleave', listItemLeave);
        };
      }(objectMarker, i));
      jQuery(listItemClass).bind('mouseenter', listItemEnter);
      
      jQuery(listItemClass).click(function(objectMarker, i){
        return function() {
            if (jQuery('#contentPane').hasClass( 'contentDown' )) {
              jQuery('.contentDown#up').show();
              jQuery( "#contentPane" ).animate({
                top: '60%',
                height: '40%'
              }, 200, function() {
                // Animation complete.
              });
              jQuery( ".updownbtns" ).animate({
                top: '60%',
              }, 200, function() {
                // Animation complete.
              });
              jQuery( ".images" ).animate({
                top: '60%',
              }, 200, function() {
                // Animation complete.
              });
              jQuery('#mapPane').animate({
                 height: '60%'
              }, 200, function(){
                // animation complete.
                google.maps.event.trigger(map, 'resize');
                var mapHeight = jQuery('#mapPane').height();
                var aboutTextHeight = jQuery('#aboutText').height();
                var setAboutTop = ((mapHeight)/2)-((aboutTextHeight)/2)-15
                jQuery('#aboutText').css('top', setAboutTop);
                infoBubble.setContent(locations[i].image);
                infoBubble.open(map, objectMarker);
                map.panTo(infoBubble.getPosition());
                map.panBy(0,-55);
                var theDivId = (objectMarker, i) + 1;
                showContent(theDivId);
              });
              jQuery('#listView').animate({
                height: '60%'
              }, 200, function(){
                setSizes();
              });
              jQuery('.teaserContent').fadeIn(200);
              window.location.hash = locations[i].thehash;
              jQuery(this).unbind('mouseleave', listItemLeave);
              jQuery('#down').show();
              jQuery('#up').show();
              jQuery('.postContent').fadeIn(500);
              jQuery('.images').fadeIn(500);
              jQuery('#contentPane').removeClass('contentUp');
              jQuery('#contentPane').addClass('contentDown');
            } else {
              infoBubble.setContent(locations[i].image);
              infoBubble.open(map, objectMarker);
              map.panTo(infoBubble.getPosition());
              map.panBy(0,-55);
              var theDivId = (objectMarker, i) + 1;
              showContent(theDivId);
              window.location.hash = locations[i].thehash;
              jQuery(this).unbind('mouseleave', listItemLeave);
            }
          }
      }(objectMarker, i));
      var imageItemId = (objectMarker, i) + 1;
      var theFeaturedImageId = ('#featuredImage' + imageItemId)
      jQuery(theFeaturedImageId).click(function(objectMarker, i){
        return function() {
            if (jQuery('#contentPane').hasClass( 'contentDown' )) {
              jQuery('.contentDown#up').show();
              jQuery( "#contentPane" ).animate({
                top: '60%',
                height: '40%'
              }, 200, function() {
                // Animation complete.
              });
              jQuery( ".updownbtns" ).animate({
                top: '60%',
              }, 200, function() {
                // Animation complete.
              });
              jQuery( ".images" ).animate({
                top: '60%',
              }, 200, function() {
                // Animation complete.
              });
              jQuery('#mapPane').animate({
                 height: '60%'
              }, 200, function(){
                // animation complete.
                google.maps.event.trigger(map, 'resize');
                var mapHeight = jQuery('#mapPane').height();
                var aboutTextHeight = jQuery('#aboutText').height();
                var setAboutTop = ((mapHeight)/2)-((aboutTextHeight)/2)-15
                jQuery('#aboutText').css('top', setAboutTop);
                infoBubble.setContent(locations[i].image);
                map.panTo(infoBubble.getPosition());
                map.panBy(0,-55);
                var theDivId = (objectMarker, i) + 1;
                showContent(theDivId);
              });
              jQuery('#listView').animate({
                height: '60%'
              }, 200, function(){
                setSizes();
              });
              jQuery('.teaserContent').fadeIn(200);
              window.location.hash = locations[i].thehash;
              google.maps.event.clearListeners(objectMarker,'mouseout');
              jQuery('#down').show();
              jQuery('#up').show();
              jQuery('.postContent').fadeIn(500);
              jQuery('.images').fadeIn(500);
              jQuery('#contentPane').removeClass('contentUp');
              jQuery('#contentPane').addClass('contentDown');
            } else {
              infoBubble.setContent(locations[i].image);
              map.panTo(infoBubble.getPosition());
              map.panBy(0,-55);
              var theDivId = (objectMarker, i) + 1;
              showContent(theDivId);
              window.location.hash = locations[i].thehash;
              google.maps.event.clearListeners(objectMarker,'mouseout');
            }
          }
      }(objectMarker, i));
      google.maps.event.addListener(objectMarker, 'mouseover', (function(objectMarker, i) {
          return function() {
            infoBubble.setContent(locations[i].image);
            infoBubble.open(map, objectMarker);
            google.maps.event.addListener(objectMarker, 'mouseout', (function(objectMarker, i) {
                return function() {
                  infoBubble.close(map, objectMarker);
                }
            })(objectMarker, i));
          }
      })(objectMarker, i));
      google.maps.event.addListener(objectMarker, 'click', (function(objectMarker, i) {
        return function() {
            if (jQuery('#contentPane').hasClass( 'contentDown' )) {
              jQuery('.contentDown#up').show();
              jQuery( "#contentPane" ).animate({
                top: '60%',
                height: '40%'
              }, 200, function() {
                // Animation complete.
              });
              jQuery( ".updownbtns" ).animate({
                top: '60%',
              }, 200, function() {
                // Animation complete.
              });
              jQuery( ".images" ).animate({
                top: '60%',
              }, 200, function() {
                // Animation complete.
              });
              jQuery('#mapPane').animate({
                 height: '60%'
              }, 200, function(){
                // animation complete.
                google.maps.event.trigger(map, 'resize');
                var mapHeight = jQuery('#mapPane').height();
                var aboutTextHeight = jQuery('#aboutText').height();
                var setAboutTop = ((mapHeight)/2)-((aboutTextHeight)/2)-15
                jQuery('#aboutText').css('top', setAboutTop);
                infoBubble.setContent(locations[i].image);
                map.panTo(infoBubble.getPosition());
                map.panBy(0,-55);
                var theDivId = (objectMarker, i) + 1;
                showContent(theDivId);
              });
              jQuery('#listView').animate({
                height: '60%'
              }, 200, function(){
                setSizes();
              });
              jQuery('.teaserContent').fadeIn(200);
              window.location.hash = locations[i].thehash;
              google.maps.event.clearListeners(objectMarker,'mouseout');
              jQuery('#down').show();
              jQuery('#up').show();
              jQuery('.postContent').fadeIn(500);
              jQuery('.images').fadeIn(500);
              jQuery('#contentPane').removeClass('contentUp');
              jQuery('#contentPane').addClass('contentDown');
            } else {
              infoBubble.setContent(locations[i].image);
              map.panTo(infoBubble.getPosition());
              map.panBy(0,-55);
              var theDivId = (objectMarker, i) + 1;
              showContent(theDivId);
              window.location.hash = locations[i].thehash;
              google.maps.event.clearListeners(objectMarker,'mouseout');
            }
          }
      })(objectMarker, i));
      
      var thehash = locations[i].thehash;
      if(urlhash == thehash){
        infoBubble.setContent(locations[i].image);
        map.setCenter(objectMarker.getPosition());
        var theDivId = (objectMarker, i) + 1;
        showContent(theDivId);
        jQuery(up);
      }
    }
    jQuery('.checkboxObjects').click(function(){
      if(jQuery('#checkboxObjects').hasClass('checked')) {
        jQuery('#checkboxObjects').removeClass('checked');
        jQuery('#checkboxObjects').addClass('unchecked');
        for (var i = 0; i < oMarkers.length; i++) {  
          oMarkers[i].setVisible(false);
        }
      } else {
        jQuery('#checkboxObjects').removeClass('unchecked');
        jQuery('#checkboxObjects').addClass('checked');
        for (var i = 0; i < oMarkers.length; i++) {  
          oMarkers[i].setVisible(true);
        }
      }
    });

    // BEGIN RIVER MARKERS
    var rMarkers = [];
    for (var i = 0; i < riverSpots.length; i++) {
      var riverMarkerImage = new google.maps.MarkerImage('http://waterweavers.bgc.bard.edu/wp-content/themes/waterweavers/markers/marker_blue.png',
          new google.maps.Size(16,16),
          new google.maps.Point(0,0),
          new google.maps.Point(8,8));  
      var riverMarker = new google.maps.Marker({
          position: riverSpots[i].latlng,
          category: riverSpots[i].category,
          map: map,
          icon: riverMarkerImage
      });
      rMarkers.push(riverMarker);
      google.maps.event.addListener(riverMarker, 'mouseover', (function(riverMarker, i) {
          return function() {
            infoBubble.setContent(riverSpots[i].rimage);
            infoBubble.open(map, riverMarker);
            google.maps.event.addListener(riverMarker, 'mouseout', (function(riverMarker, i) {
                return function() {
                  infoBubble.close(map, riverMarker);
                }
            })(riverMarker, i));
          }
      })(riverMarker, i));
      var rImageItemId = (riverMarker, i) + 1;
      var theFeaturedRImageId = ('#featuredRImage' + rImageItemId)
      jQuery(theFeaturedRImageId).click(function(riverMarker, i){
        return function() {
            if (jQuery('#contentPane').hasClass( 'contentDown' )) {
              jQuery('.contentDown#up').show();
              jQuery( "#contentPane" ).animate({
                top: '60%',
                height: '40%'
              }, 200, function() {
                // Animation complete.
              });
              jQuery( ".updownbtns" ).animate({
                top: '60%',
              }, 200, function() {
                // Animation complete.
              });
              jQuery( ".images" ).animate({
                top: '60%',
              }, 200, function() {
                // Animation complete.
              });
              jQuery('#mapPane').animate({
                 height: '60%'
              }, 200, function(){
                // animation complete.
                google.maps.event.trigger(map, 'resize');
                var mapHeight = jQuery('#mapPane').height();
                var aboutTextHeight = jQuery('#aboutText').height();
                var setAboutTop = ((mapHeight)/2)-((aboutTextHeight)/2)-15
                jQuery('#aboutText').css('top', setAboutTop);
                jQuery('.teaserContent').fadeIn(200);
                infoBubble.setContent(riverSpots[i].rimage);
                map.panTo(infoBubble.getPosition());
                map.panBy(0,-55);
                var theDivId = (riverMarker, i) + 1;
                showRiverContent(theDivId);
              });
              jQuery('#listView').animate({
                height: '60%'
              }, 200, function(){
                setSizes();
              });
              jQuery('.teaserContent').fadeIn(200);
              window.location.hash = riverSpots[i].thehash;
              google.maps.event.clearListeners(riverMarker,'mouseout');
              jQuery('#down').show();
              jQuery('#up').show();
              jQuery('.postContent').fadeIn(500);
              jQuery('.images').fadeIn(500);
              jQuery('#contentPane').removeClass('contentUp');
              jQuery('#contentPane').addClass('contentDown');
            } else {
              infoBubble.setContent(riverSpots[i].rimage);
              map.panTo(infoBubble.getPosition());
              map.panBy(0,-55);
              var theDivId = (riverMarker, i) + 1;
              showRiverContent(theDivId), function(){

              };
              window.location.hash = riverSpots[i].thehash;
              google.maps.event.clearListeners(riverMarker,'mouseout');
            }
          }
      }(riverMarker, i));
      google.maps.event.addListener(riverMarker, 'click', (function(riverMarker, i) {
        return function() {
            if (jQuery('#contentPane').hasClass( 'contentDown' )) {
              jQuery('.contentDown#up').show();
              jQuery( "#contentPane" ).animate({
                top: '60%',
                height: '40%'
              }, 200, function() {
                // Animation complete.
              });
              jQuery( ".updownbtns" ).animate({
                top: '60%',
              }, 200, function() {
                // Animation complete.
              });
              jQuery( ".images" ).animate({
                top: '60%',
              }, 200, function() {
                // Animation complete.
              });
              jQuery('#mapPane').animate({
                 height: '60%'
              }, 200, function(){
                // animation complete.
                google.maps.event.trigger(map, 'resize');
                var mapHeight = jQuery('#mapPane').height();
                var aboutTextHeight = jQuery('#aboutText').height();
                var setAboutTop = ((mapHeight)/2)-((aboutTextHeight)/2)-15
                jQuery('#aboutText').css('top', setAboutTop);
                jQuery('.teaserContent').fadeIn(200);
                infoBubble.setContent(riverSpots[i].rimage);
                map.panTo(infoBubble.getPosition());
                map.panBy(0,-55);
                var theDivId = (riverMarker, i) + 1;
                showRiverContent(theDivId);
              });
              jQuery('#listView').animate({
                height: '60%'
              }, 200, function(){
                setSizes();
              });
              jQuery('.teaserContent').fadeIn(200);
              window.location.hash = riverSpots[i].thehash;
              google.maps.event.clearListeners(riverMarker,'mouseout');
              jQuery('#down').show();
              jQuery('#up').show();
              jQuery('.postContent').fadeIn(500);
              jQuery('.images').fadeIn(500);
              jQuery('#contentPane').removeClass('contentUp');
              jQuery('#contentPane').addClass('contentDown');
            } else {
              infoBubble.setContent(riverSpots[i].rimage);
              map.panTo(infoBubble.getPosition());
              map.panBy(0,-55);
              var theDivId = (riverMarker, i) + 1;
              showRiverContent(theDivId);
              window.location.hash = riverSpots[i].thehash;
              google.maps.event.clearListeners(riverMarker,'mouseout');
            }
          }
      })(riverMarker, i));
      var thehash = riverSpots[i].thehash;
      if(urlhash == thehash){
        infoBubble.setContent(riverSpots[i].rimage);
        map.setCenter(riverMarker.getPosition());
        var theDivId = (riverMarker, i) + 1;
        showRiverContent(theDivId);
        jQuery(up);
      }
    }
    jQuery('.checkboxRiver').click(function(){
      if(jQuery('#checkboxRiver').hasClass('checked')) {
        jQuery('#checkboxRiver').removeClass('checked');
        jQuery('#checkboxRiver').addClass('unchecked');
        for (var i = 0; i < rMarkers.length; i++) {  
          rMarkers[i].setVisible(false);
        }
      } else {
        jQuery('#checkboxRiver').removeClass('unchecked');
        jQuery('#checkboxRiver').addClass('checked');
        for (var i = 0; i < rMarkers.length; i++) {  
          rMarkers[i].setVisible(true);
        }
      }
    });


    //KML RIVER TRACES
    kmlLayer01 = new google.maps.KmlLayer({
      url: 'http://waterweavers.bgc.bard.edu/wp-content/themes/waterweavers/markers/magdalena.kml',
      preserveViewport: 1,
      suppressInfoWindows: true,
      clickable: false
    });
    kmlLayer01.setMap(map);
    var kmlLayer01Label = new MapLabel ({
      text: ' Río Magdalena',
      position: new google.maps.LatLng(7.929323, -73.847148),
      map: map,
      fontSize: 10,
      strokeWeight: 0,
      minZoom: 6,
      align: 'left'
    });

    kmlLayer02 = new google.maps.KmlLayer({
      url: 'http://waterweavers.bgc.bard.edu/wp-content/themes/waterweavers/markers/putamayo.kml',
      preserveViewport: 1,
      suppressInfoWindows: true,
      clickable: false
    });
    kmlLayer02.setMap(map);
    var kmlLayer02Label = new MapLabel ({
      text: 'Río Putumayo ',
      position: new google.maps.LatLng(-1.695799, -73.532665),
      map: map,
      fontSize: 10,
      strokeWeight: 0,
      minZoom: 6,
      align: 'right'
    });

    kmlLayer03 = new google.maps.KmlLayer({
      url: 'http://waterweavers.bgc.bard.edu/wp-content/themes/waterweavers/markers/rancheria.kml',
      preserveViewport: 1,
      suppressInfoWindows: true,
      clickable: false
    });
    kmlLayer03.setMap(map);
    var kmlLayer03Label = new MapLabel ({
      text: ' Río Ranchería',
      position: new google.maps.LatLng(11.088046, -72.649515),
      map: map,
      fontSize: 10,
      strokeWeight: 0,
      minZoom: 6,
      align: 'left'
    });

    kmlLayer04 = new google.maps.KmlLayer({
      url: 'http://waterweavers.bgc.bard.edu/wp-content/themes/waterweavers/markers/bogota.kml',
      preserveViewport: 1,
      suppressInfoWindows: true,
      clickable: false
    });
    kmlLayer04.setMap(map);
    var kmlLayer04Label = new MapLabel ({
      text: ' Río Bogotá',
      position: new google.maps.LatLng(4.586569, -74.553475),
      map: map,
      fontSize: 10,
      strokeWeight: 0,
      minZoom: 6,
      align: 'left'
    });

    kmlLayer05 = new google.maps.KmlLayer({
      url: 'http://waterweavers.bgc.bard.edu/wp-content/themes/waterweavers/markers/cauca.kml',
      preserveViewport: 1,
      suppressInfoWindows: true,
      clickable: false
    });
    kmlLayer05.setMap(map);
    var kmlLayer05Label = new MapLabel ({
      text: 'Río Cauca ',
      position: new google.maps.LatLng(6.560999, -75.796753),
      map: map,
      fontSize: 10,
      strokeWeight: 0,
      minZoom: 6,
      align: 'right'
    });

    kmlLayer06 = new google.maps.KmlLayer({
      url: 'http://waterweavers.bgc.bard.edu/wp-content/themes/waterweavers/markers/fuquene.kml',
      preserveViewport: 1,
      suppressInfoWindows: true,
      clickable: false
    });
    kmlLayer06.setMap(map);
    var kmlLayer06Label = new MapLabel ({
      text: ' Laguna de Fúquene',
      position: new google.maps.LatLng(5.461811, -73.718360),
      map: map,
      fontSize: 10,
      strokeWeight: 0,
      minZoom: 6,
      align: 'left'
    });

    kmlLayer07 = new google.maps.KmlLayer({
      url: 'http://waterweavers.bgc.bard.edu/wp-content/themes/waterweavers/markers/cahuinari.kml',
      preserveViewport: 1,
      suppressInfoWindows: true,
      clickable: false
    });
    kmlLayer07.setMap(map);
    var kmlLayer07Label = new MapLabel ({
      text: ' Río Cahuinari',
      position: new google.maps.LatLng(-1.644106, -71.372230),
      map: map,
      fontSize: 10,
      strokeWeight: 0,
      minZoom: 6,
      align: 'left'
    });

    kmlLayer08 = new google.maps.KmlLayer({
      url: 'http://waterweavers.bgc.bard.edu/wp-content/themes/waterweavers/markers/amazon.kml',
      preserveViewport: 1,
      suppressInfoWindows: true,
      clickable: false
    });
    kmlLayer08.setMap(map);
    var kmlLayer08Label = new MapLabel ({
      text: ' Río Amazon',
      position: new google.maps.LatLng(-4.144436, -69.377094),
      map: map,
      fontSize: 10,
      strokeWeight: 0,
      minZoom: 6,
      align: 'left'
    });

    //MAP TYPE SELECTORS
    jQuery('#mapTypes').change(function(){ 
      if (jQuery(this).val() == 'water') {
        map.setMapTypeId(WATERMAP);
      }
      if (jQuery(this).val() == 'borders') {
        map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
      }
      if (jQuery(this).val() == 'satellite') {
          map.setMapTypeId(google.maps.MapTypeId.SATELLITE);
      }
      if (jQuery(this).val() == 'terrain') {
          map.setMapTypeId(google.maps.MapTypeId.TERRAIN);
      }
    });
  }

  google.maps.event.addDomListener(window, 'load', initialize);
  

  jQuery(function() {
    // SET ABOUT TEXT LOCATION ON LOAD
    var mapHeight = jQuery('#map').height();
    var aboutTextHeight = jQuery('#aboutText').height();
    var setAboutTop = ((mapHeight)/2)-((aboutTextHeight)/2)-15
    jQuery('#aboutText').css('top', setAboutTop);


    if (jQuery('#contentPane').hasClass( 'contentUp' )) {
      if (jQuery(window).width() < 550) {
        jQuery('#titlePane').addClass('titleUp');
        jQuery('#titlePane').removeClass('titleDown');
      } else {
        jQuery('#titlePane').removeClass('titleUp');
        jQuery('#titlePane').removeClass('titleDown');
      }
    } else {
      if (jQuery(window).width() < 550) {
        jQuery('#titlePane').addClass('titleDown');
        jQuery('#titlePane').removeClass('titleUp');
      } else {
        jQuery('#titlePane').removeClass('titleUp');
        jQuery('#titlePane').removeClass('titleDown');
      }
    }

    

    // ABOUT TEXT CHECKBOX CONTROL
    jQuery('.checkboxAbout').click(function() {
      if(jQuery('#checkboxAbout').hasClass('unchecked')) {
        jQuery('#checkboxAbout').removeClass('unchecked');
        jQuery('#checkboxAbout').addClass('checked');
        jQuery('#titlePane').addClass('titleDown');
        jQuery('#titlePane').removeClass('titleUp');
        var currCenter = map.getCenter();
        if (jQuery('#contentPane').hasClass( 'contentDown' )) {
          var mapHeight = jQuery('#map').height();
          var aboutTextHeight = jQuery('#aboutText').height();
          var setAboutTop = ((mapHeight)/2)-((aboutTextHeight)/2)-15
          jQuery('#aboutText').css('top', setAboutTop);
          jQuery('#aboutText').animate({
              right: '0',
              left: '0'
          }, 250, function(){
          });
        } else {
          jQuery( "#contentPane" ).animate({
            top: '60%',
            height: '40%'
          }, 500, function() {
              // Animation complete.
              jQuery('#contentPane').removeClass('contentUp');
              jQuery('#contentPane').addClass('contentDown');
              var mapHeight = jQuery('#map').height();
              var aboutTextHeight = jQuery('#aboutText').height();
              var setAboutTop = ((mapHeight)/2)-((aboutTextHeight)/2)-15
              jQuery('#aboutText').css('top', setAboutTop);
              jQuery('#aboutText').animate({
                  right: '0',
                  left: '0'
              }, 250, function(){
              });
          });
          jQuery( ".updownbtns" ).animate({
            top: '60%',
          }, 500, function() {
            // Animation complete.
          });
          jQuery( ".images" ).animate({
            top: '60%',
          }, 500, function() {
            // Animation complete.
          });
          jQuery( "#contentPane" ).css('position', 'fixed')
          jQuery('#mapPane').animate({
               height: '60%'
          }, 500, function(){
              // animation complete.
              google.maps.event.trigger(map, 'resize');
              map.panTo(currCenter);
              jQuery('.featuredImage').fadeIn(100);
          });
          jQuery('#down').show();
          jQuery('.contentUp').find('#up').show();
          jQuery('.postContent').fadeIn(500);
          jQuery('.images').fadeIn(500);
        }
        if (jQuery('#listView').hasClass('listOpen')) {
          jQuery('#listView').animate({
            right: '-100%',
            height: '60%'
          }, 250, function(){
          });
          jQuery('#checkboxList').removeClass('checked');
          jQuery('#checkboxList').addClass('unchecked');
          jQuery('#map').animate({
              width: '100%',
          }, 250, function(){
              var currCenter = map.getCenter();
              google.maps.event.trigger(map, 'resize');
              map.panTo(currCenter);
          });
          jQuery('#listView').removeClass('listOpen');
          jQuery('#listView').addClass('listClosed');
        } else {
          jQuery('#listView').css('height', '60%');
        }
      } else {
        jQuery('#checkboxAbout').removeClass('checked');
        jQuery('#checkboxAbout').addClass('unchecked');
        jQuery('#aboutText').animate({
            right: '150%',
            left: '-150%'
        }, 250, function(){
        });
      }
    });

    // ABOUT TEXT CLOSE BUTTON
    jQuery('#closeBtn.mobile').click(function() {
      jQuery('#aboutText').animate({
          right: '150%',
          left: '-150%'
      }, 250, function(){
      });
      jQuery('#checkboxAbout').removeClass('checked');
      jQuery('#checkboxAbout').addClass('unchecked');
    })
    jQuery('#closeBtn.nonMobile').click(function() {
      jQuery('#aboutText').animate({
          right: '150%',
          left: '-150%'
      }, 250, function(){
      });
      jQuery('#checkboxAbout').removeClass('checked');
      jQuery('#checkboxAbout').addClass('unchecked');
    })

    //LIST VIEW CHECKBOX CONTROL
    jQuery('.checkboxList').click(function() {
      if(jQuery('#checkboxList').hasClass('unchecked')) {
        jQuery('#aboutText').animate({
            right: '150%',
            left: '-150%'
        }, 250, function(){
        });
        jQuery('#checkboxAbout').removeClass('checked');
        jQuery('#checkboxAbout').addClass('unchecked');
        jQuery('#checkboxList').removeClass('unchecked');
        jQuery('#checkboxList').addClass('checked');
        jQuery('#titlePane').addClass('titleDown');
        jQuery('#titlePane').removeClass('titleUp');
        jQuery('#listView').addClass('listOpen');
        jQuery('#listView').removeClass('listClosed');
        var currCenter = map.getCenter();
        if (jQuery('#contentPane').hasClass( 'contentDown' )) {
          jQuery('#map').animate({
              width: '60%',
          }, 250, function(){
              google.maps.event.trigger(map, 'resize');
              map.panTo(currCenter);
          });
          var mapHeight = jQuery('#map').height();
          jQuery('#listView').animate({
              right: '0',
              height: mapHeight
          }, 250, function(){
              setSizes();
          });
        } else {
          jQuery( "#contentPane" ).animate({
            top: '60%',
            height: '40%'
          }, 500, function() {
            // Animation complete.
            jQuery('#contentPane').removeClass('contentUp');
            jQuery('#contentPane').addClass('contentDown');
            jQuery('#listView').css('height', '60%');
            jQuery('#listView').animate({
                right: '0',
            }, 250, function(){
                setSizes();
            });
            jQuery('#map').animate({
                width: '60%',
            }, 250, function(){
                google.maps.event.trigger(map, 'resize');
                map.panTo(currCenter);
            });
          });
          jQuery( ".updownbtns" ).animate({
            top: '60%',
          }, 500, function() {
            // Animation complete.
          });
          jQuery( ".images" ).animate({
            top: '60%',
          }, 500, function() {
            // Animation complete.
          });
          jQuery( "#contentPane" ).css('position', 'fixed')
          jQuery('#mapPane').animate({
              height: '60%'
          }, 500, function(){
              // animation complete.
              google.maps.event.trigger(map, 'resize');
              map.panTo(currCenter);
              jQuery('.featuredImage').fadeIn(100);
          });
          jQuery('#down').show();
          jQuery('.contentUp').find('#up').show();
        }
      } else {
        jQuery('#checkboxList').removeClass('checked');
        jQuery('#checkboxList').addClass('unchecked');
        jQuery('#listView').animate({
            right: '-100%',
        }, 250, function(){
        });
        jQuery('#map').animate({
            width: '100%',
        }, 250, function(){
            var currCenter = map.getCenter();
            google.maps.event.trigger(map, 'resize');
            map.panTo(currCenter);
        });
        jQuery('#listView').removeClass('listOpen');
        jQuery('#listView').addClass('listClosed');
      }
    });

    var state = true;
    jQuery('.listItem').hover(function(){
      if ( state ) {
        jQuery(this).animate({
          backgroundColor: "#9b9a95",
        }, 100 );
      } else {
        jQuery(this).animate({
          backgroundColor: "#a6a59f",
        }, 100 );
      }
      state = !state;
    });
    var state = true;
    jQuery('.relatedExItem').hover(function(){
      if ( state ) {
        jQuery(this).animate({
          backgroundColor: "#e8eae1",
        }, 100 );
      } else {
        jQuery(this).animate({
          backgroundColor: "#f8faf0",
        }, 100 );
      }
      state = !state;
    });
    
    //LOAD APP SCRIPTS
    if (window.top!=window.self)
    {
      jQuery.getScript("http://waterweavers.bgc.bard.edu/wp-content/themes/waterweavers/js/mapApp.js");
    } else {
    }

    //LIST CONTROLS 
    if (window.top!=window.self)
    {
      // In a Frame or IFrame
      jQuery(function(){
        jQuery('#listContainer').slimScroll({
            height: '100%',
            alwaysVisible: true,
            width: '100%',
            size: '25px',
            distance: '7px'
        });
      });
    } else {
      jQuery(function(){
        jQuery('#listContainer').slimScroll({
            height: '100%',
            alwaysVisible: true,
            width: '100%',
            size: '5px',
        });
      });
    }

    $('a').each(function() {
      $(this).attr("href", function(index, old) {
          return old.replace("dreamhosters.com", "bgc.bard.edu");
      });
    });
    $('img').each(function() {
      $(this).attr("src", function(index, old) {
          return old.replace("dreamhosters.com", "bgc.bard.edu");
      });
    });

    // UP BUTTON
    jQuery('#up').click(up);

    //DOWN BUTTON
    jQuery('#down').click(function() {
      var currCenter = map.getCenter();
      jQuery( "#contentPane" ).animate({
        top: '100%',
        height: '0%'
      }, 500, function() {
        // Animation complete.
      });
      jQuery( ".updownbtns" ).animate({
        top: '100%',
      }, 500, function() {
        // Animation complete.
      });
      jQuery( ".images" ).animate({
        top: '100%',
      }, 500, function() {
        // Animation complete.
      });
      jQuery( "#contentPane" ).css('position', 'fixed')
      jQuery('#mapPane').animate({
         height: '100%'
      }, 500, function(){
        // animation complete.
        google.maps.event.trigger(map, 'resize');
        map.panTo(currCenter);
      });
      jQuery('#listView').animate({
        height: '100%'
      }, 500, function(){
        setSizes();
      });
      jQuery(this).hide();
      jQuery('#up').show();
      jQuery('.postContent').fadeOut(100);
      jQuery('.images').fadeOut(100);
      jQuery('.teaserContent').fadeOut(100);
      jQuery('#contentPane').removeClass('contentUp');
      jQuery('#contentPane').addClass('contentDown');
      jQuery('.titleUp #controlPanel').slideDown(250, function(){
        jQuery('.titleUp').removeClass('titleUp');
        jQuery('#titlePane').addClass('titleDown');
      });
    })

    //Another method
    jQuery('.activeThumb').removeClass('activeThumb');
    jQuery('.thumbGroup').each(function(){
        jQuery('.thumbRadio:first', this).addClass('activeThumb');
    });
  })
})(jQuery);


jQuery(window).resize(function() {
    var currCenter = map.getCenter();
    google.maps.event.trigger(map, 'resize');
    map.panTo(currCenter);
    var mapHeight = jQuery('#mapPane').height();
    var aboutTextHeight = jQuery('#aboutText').height();
    var setAboutTop = ((mapHeight)/2)-((aboutTextHeight)/2)-15
    jQuery('#aboutText').css('top', setAboutTop);
    setSizes();
    var windowWidth = jQuery(window).width();
    var artistContentWidth = (((windowWidth)*0.40)+250-15)
    var contentPaneWidth = jQuery('.activeMarker').width();
    var relatedExItemsWidth = (contentPaneWidth)-(artistContentWidth)-45
    jQuery('.artistContent').css('width', artistContentWidth);
    jQuery('.relatedExItems').css('width', relatedExItemsWidth);
    riverImageSizing();
    if (jQuery('#contentPane').hasClass( 'contentUp' )) {
      if (jQuery(window).width() < 550) {
        jQuery('#titlePane').addClass('titleUp');
        jQuery('.titleUp #controlPanel').slideUp(250);
        jQuery('#titlePane').removeClass('titleDown');
      } else {
        jQuery('.titleUp #controlPanel').slideDown(250);
        jQuery('#titlePane').removeClass('titleUp');
        jQuery('#titlePane').removeClass('titleDown');
      }
    } else {
      if (jQuery(window).width() < 550) {
        jQuery('#titlePane').addClass('titleDown');
        jQuery('#titlePane').removeClass('titleUp');
      } else {
        jQuery('#titlePane').removeClass('titleUp');
        jQuery('#titlePane').removeClass('titleDown');
      }
    }
});
jQuery(window).trigger('resize');
function riverImageSizing() {
  var windowHeight = jQuery(window).height();
  var riverTitlesHeight = (jQuery('.activeMarker.riverItem .postHeaders h1').height())+(jQuery('.activeMarker.riverItem .postHeaders h2').height())+90;
  var sourceHeight = jQuery('.activeMarker.riverItem .images .source').height();
  var riverImageHeight = ((windowHeight*0.75)-(riverTitlesHeight)-sourceHeight)
  jQuery('.activeMarker.riverItem .images').height(riverImageHeight);
  jQuery('.activeMarker.riverItem .images img').css('maxHeight', riverImageHeight);
}
function up() {
  jQuery('#aboutText').animate({
      right: '150%',
      left: '-150%'
  }, 250, function(){
  });
  jQuery('#checkboxAbout').removeClass('checked');
  jQuery('#checkboxAbout').addClass('unchecked');
  if (jQuery(window).width() < 550) {
    jQuery('#titlePane').addClass('titleUp');
    jQuery('.titleUp #controlPanel').slideUp(250);
    jQuery('#titlePane').removeClass('titleDown');
  } else {
    jQuery('.titleUp #controlPanel').slideDown(250);
    jQuery('#titlePane').removeClass('titleUp');
    jQuery('#titlePane').removeClass('titleDown');
  }
  jQuery('.activeLrgImage').hide();
  jQuery('.activeLrgImage').removeClass('activeLrgImage');
  jQuery('.lrgImg li:first-child').show();
  jQuery('.lrgImg li:first-child').addClass('activeLrgImage');
  jQuery('.activeThumb').removeClass('activeThumb');
  jQuery('.thumbGroup').each(function(){
    jQuery('.thumbRadio:first', this).addClass('activeThumb');
  });
  jQuery('#listView.listOpen')
  jQuery('#checkboxList').removeClass('checked');
  jQuery('#checkboxList').addClass('unchecked');
  jQuery('#listView.listOpen').animate({
      right: '-100%',
  }, 250, function(){
  });
  jQuery('#map').animate({
      width: '100%',
  }, 250, function(){
  });
  jQuery('#listView.listOpen').addClass('listClosed');
  jQuery('#listView.listOpen').removeClass('listOpen');
  jQuery( "#contentPane" ).animate({
    top: '25%',
    height: '75%'
  }, 500., function() {
    // Animation complete.
  });
  jQuery( ".updownbtns" ).animate({
    top: '25%',
  }, 500, function() {
    // Animation complete.
  });
  jQuery( ".images" ).animate({
    top: '25%',
  }, 500, function() {
    // Animation complete.
  });
  jQuery( "#contentPane" ).css('position', 'relative')
  jQuery('#mapPane').animate({
     height: '25%'
  }, 500, function(){
    // animation complete.
    var currCenter = map.getCenter();
    google.maps.event.trigger(map, 'resize');
    map.panTo(currCenter);
    jQuery('.activeMarker').find('.postContent').fadeIn(200);
    jQuery('.activeMarker').find('.images').fadeIn(200);
  });
  jQuery('#listView').animate({
    height: '25%'
  }, 500, function(){
  });
  jQuery('#up').hide();
  jQuery('#down').show();
  jQuery('#contentPane').removeClass('contentDown');
  jQuery('#contentPane').addClass('contentUp');
  var windowWidth = jQuery(window).width();
  var artistContentWidth = (((windowWidth)*0.40)+250-15)
  var contentPaneWidth = jQuery('.activeMarker').width();
  var relatedExItemsWidth = (contentPaneWidth)-(artistContentWidth)-45
  jQuery('.artistContent').css('width', artistContentWidth);
  jQuery('.relatedExItems').css('width', relatedExItemsWidth);
}
function setSizes(){
  var containerHeight = jQuery('#mapPane').height();
  var titleHeight = jQuery('#titlePane').height();
  jQuery('#listView').height(containerHeight - titleHeight);
  jQuery('#listView').height(containerHeight);
  jQuery('#listSizing').height(containerHeight - titleHeight);
  jQuery('#listSizing').css('paddingTop', titleHeight)
  jQuery('#listContainer').slimScroll();
}
function showContent(theDivId) {
  var theDiv = ('#item' + theDivId);
  jQuery('.contentUp').find('.activeMarker').find('.postContent').fadeOut(500);
  jQuery('.contentUp').find('.activeMarker').find('.images').fadeOut(500);
  jQuery('.contentDown').find('#up').fadeIn(200);
  jQuery('.activeMarker').hide();
  jQuery('.activeMarker').removeClass('activeMarker');
  jQuery('.contentUp').find(theDiv).fadeIn(500);
  jQuery('.contentDown').find(theDiv).fadeIn(150);
  jQuery(theDiv).addClass('activeMarker');
  jQuery('.activeLrgImage').hide();
  jQuery('.activeLrgImage').removeClass('activeLrgImage');
  jQuery('.lrgImg li:first-child').show();
  jQuery('.lrgImg li:first-child').addClass('activeLrgImage');
  jQuery('.activeThumb').removeClass('activeThumb');
  jQuery('.thumbGroup').each(function(){
    jQuery('.thumbRadio:first', this).addClass('activeThumb');
  });
  jQuery('.activeMarker').find('.postContent').fadeIn(500);
  jQuery('.activeMarker').find('.images').fadeIn(500);
};
function showRiverContent(theDivId) {
  var theDiv = ('#river' + theDivId);
  jQuery('.contentUp').find('.activeMarker').find('.postContent').fadeOut(500);
  jQuery('.contentUp').find('.activeMarker').find('.images').fadeOut(500);
  jQuery('.contentDown').find('#up').fadeIn(200);
  jQuery('.activeMarker').hide();
  jQuery('.activeMarker').removeClass('activeMarker');
  jQuery('.contentUp').find(theDiv).fadeIn(500);
  jQuery('.contentDown').find(theDiv).fadeIn(150);
  jQuery(theDiv).addClass('activeMarker');
  jQuery('.activeLrgImage').hide();
  jQuery('.activeLrgImage').removeClass('activeLrgImage');
  jQuery('.lrgImg li:first-child').show();
  jQuery('.lrgImg li:first-child').addClass('activeLrgImage');
  jQuery('.activeThumb').removeClass('activeThumb');
  jQuery('.thumbGroup').each(function(){
    jQuery('.thumbRadio:first', this).addClass('activeThumb');
  });
  jQuery('.activeMarker').find('.postContent').fadeIn(500);
  jQuery('.activeMarker').find('.images').fadeIn(500, function(){
    jQuery(riverImageSizing);
  });
};