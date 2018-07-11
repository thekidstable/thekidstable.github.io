$(function() {
  // Default to about page
  $(document).ready(function() {
    $("#content-container").load("about.html");
  });

  // Set up navbar links
  $("#about").click(function() {
    $("#content-container").load("about.html");
  });
  $("#contact").click(function() {
    $("#content-container").load("contact.html");
  });
});
