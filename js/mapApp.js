idleTime = 0;
var $j = jQuery.noConflict();
$(document).ready(function () {
    //Increment the idle time counter every minute.
    var idleInterval = setInterval(timerIncrement, 30000); // Half minute

    //Zero the idle timer on mouse movement.
    $(this).mousemove(function (e) {
        idleTime = 0;
    });
    $(this).keypress(function (e) {
        idleTime = 0;
    });
});
function timerIncrement() {
    idleTime = idleTime + 1;
    if (idleTime > 1) { // 1 minute

      if($('#checkboxAbout').hasClass('unchecked')) {
        $('#checkboxAbout').removeClass('unchecked');
        $('#checkboxAbout').addClass('checked');
        $('#titlePane').addClass('titleDown');
        $('#titlePane').removeClass('titleUp');
        $( "#contentPane" ).animate({
          top: '100%',
          height: '0%'
        }, 500, function() {
            // Animation complete.
            $('#contentPane').removeClass('contentUp');
            $('#contentPane').addClass('contentDown');
            var mapHeight = $('#map').height();
            var aboutTextHeight = $('#aboutText').height();
            var setAboutTop = ((mapHeight)/2)-((aboutTextHeight)/2)-15
            $('#aboutText').css('top', setAboutTop);
            $('#aboutText').animate({
                right: '0',
                left: '0'
            }, 250, function(){
            });
        });
        $( ".updownbtns" ).animate({
          top: '100%',
        }, 500, function() {
          // Animation complete.
        });
        $( ".images" ).animate({
          top: '100%',
        }, 500, function() {
          // Animation complete.
        });
        $( "#contentPane" ).css('position', 'fixed')
        $('#mapPane').animate({
            height: '100%'
        }, 500, function(){
            // animation complete.
            google.maps.event.trigger(map, 'resize');
            $('.featuredImage').fadeIn(100);
            recenterTheMap = new google.maps.LatLng(5.165456, -72.548015);
            map.panTo(recenterTheMap);
        });
        $('#down').hide();
        $('#up').show();
        $('.postContent').fadeOut(100);
        $('.images').fadeOut(100);
        $('.teaserContent').fadeOut(100);
        $('#contentPane').removeClass('contentUp');
        $('#contentPane').addClass('contentDown');
        $('.titleUp #controlPanel').slideDown(250, function(){
          $('.titleUp').removeClass('titleUp');
          $('#titlePane').addClass('titleDown');
        });
        if ($('#listView').hasClass('listOpen')) {
          $('#listView').animate({
            right: '-100%',
            height: '60%'
          }, 250, function(){
          });
          $('#checkboxList').removeClass('checked');
          $('#checkboxList').addClass('unchecked');
          $('#map').animate({
              width: '100%',
          }, 250, function(){
              google.maps.event.trigger(map, 'resize');
          });
          $('#listView').removeClass('listOpen');
          $('#listView').addClass('listClosed');
        } else {
          $('#listView').css('height', '60%');
        }
      } else {
        $( "#contentPane" ).animate({
          top: '100%',
          height: '0%'
        }, 500, function() {
          // Animation complete.
        });
        $( ".updownbtns" ).animate({
          top: '100%',
        }, 500, function() {
          // Animation complete.
        });
        $( ".images" ).animate({
          top: '100%',
        }, 500, function() {
          // Animation complete.
        });
        $( "#contentPane" ).css('position', 'fixed')
        $('#mapPane').animate({
           height: '100%'
        }, 500, function(){
          // animation complete.
          google.maps.event.trigger(map, 'resize');
          recenterTheMap = new google.maps.LatLng(5.165456, -72.548015);
          map.panTo(recenterTheMap);
          var mapHeight = $('#map').height();
          var aboutTextHeight = $('#aboutText').height();
          var setAboutTop = ((mapHeight)/2)-((aboutTextHeight)/2)-15
          $('#aboutText').animate({
            top: setAboutTop
          }, 100, function(){
          });
        });
        $('#listView').animate({
          height: '100%'
        }, 500, function(){
          setSizes();
        });
        $(this).hide();
        $('#up').show();
        $('.postContent').fadeOut(100);
        $('.images').fadeOut(100);
        $('.teaserContent').fadeOut(100);
        $('#contentPane').removeClass('contentUp');
        $('#contentPane').addClass('contentDown');
        $('.titleUp #controlPanel').slideDown(250, function(){
          $('.titleUp').removeClass('titleUp');
          $('#titlePane').addClass('titleDown');
        });
      }
      map.setZoom(6);
      map.setMapTypeId(WATERMAP);
      $('#mapTypes').val('water');
      $j.fancybox.close(); 


    }
}