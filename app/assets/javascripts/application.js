/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()



  // home test ordering journey, dirty code to add/remove another household member
  $( ".add-member" ).on( "click", function(e) {
    e.preventDefault();
    $( ".totoggle" ).show();
  });

  $( ".remove-member" ).on( "click", function(e) {
    e.preventDefault();
    $('#first-name-2').val("");
    $('#last-name-2').val("");
    $( ".totoggle" ).hide();
  });

})
