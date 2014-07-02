$(document).ready(function() {
    $('.carousel').carousel({
        interval: false
    });
    $(".carousel").swiperight(function() {
      $(".carousel").carousel('prev');
    });
   $(".carousel").swipeleft(function() {
      $(".carousel").carousel('next');  
   });
    // $("#room-tab").tab();
});
