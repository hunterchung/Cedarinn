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

   //Remove jquery ui.
   $("div.ui-loader").remove();
    // $("#room-tab").tab();
});
