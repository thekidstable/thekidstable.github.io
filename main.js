$(function() {
  // Default to about page
  $(document).ready(function() {
    $("#content-container").load("episodes.html");
  });

  // Set up navbar links
  $("#about").click(function() {
    $("#content-container").load("about.html");
  });
  $("#episodes").click(function() {
    $("#content-container").load("episodes.html");
  });
  $("#cast").click(function() {
    $("#content-container").load("cast.html");
  });
  $("#photos").click(function() {
    $("#content-container").load("photos.html");
  });
  /*
  $("#events").click(function() {
    $("#content-container").load("events.html");
  });
  */
  $("#contact").click(function() {
    $("#content-container").load("contact.html");
  });
});
