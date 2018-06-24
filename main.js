$(function() {
  // Default to about page
  $(document).ready(function() {
    $("#content-container").load("about.html");
  });

  // Set up navbar links
  $("#about").click(function() {
    $("#content-container").load("about.html");
  });
  $("#characters").click(function() {
    $("#content-container").load("characters.html");
  });
  $("#contact").click(function() {
    $("#content-container").load("contact.html");
  });
});
