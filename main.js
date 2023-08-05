$(document).ready(function(){
  $("#toggle-btn").click(function() {
    // Change background color
    $("body").toggleClass("change-background");
    $(this).css("border", "1px solid #f5f5f5");

    // Toggle Button Text
    $("span").text(
      $("span").text()== "Light Mode" ? "Dark Mode":"LightMode"
      );

  });
  $("#toggle-btn").click(function() {
    let icon = $(this).find("ion-icon");
    icon.attr("name") == "moon" ? icon.attr("name", "sunny") : icon.attr("name", "moon");
  })
});