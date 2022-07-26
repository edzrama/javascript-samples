
$("h1").addClass("big-title margin-50");
$("h1").text("bye");

$("button").html("<em>Hey</em>")

console.log($("img").attr("src"));
$("a").attr("href", "http://www.yahoo.com");

$("h1").click(function() {
  $("h1").css("color", "purple");
});

// shorten selecting all button instead of using for loop in vanilla js
$("button").click(function() {
  // $("h1").css("color", "purple");
  // $("h1").toggle();
  // fadeIn/fadeOut
  // $("h1").fadeToggle();
  // slideUp/slideDown
  $("h1").slideToggle();
  $("h1").animate({opacity: 0.5});
});
$(document).keydown(function(event) {
  $("h1").text(event.key);
});

$("h1").on("mouseover", function() {
  $("h1").css("color", "purple");
});
