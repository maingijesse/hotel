$(function () {
  $(".hamburger-menu").on("click", function () {
    $(".toggle").toggleClass("open");
    $(".nav-list").toggleClass("open");
  });

  $(".nav-link").on("click", function () {
    if ($(".nav-list").hasClass("open")) {
      $(".nav-list").removeClass("open");
      $(".toggle").toggleClass("open");
    }
  });
});

AOS.init({
  easing: "ease",
  duration: 1000,
});
