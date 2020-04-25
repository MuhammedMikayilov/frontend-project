$(document).ready(function () {
  $(window).scroll(function () {
    if ($("html, body").scrollTop() >= 120) {
      $(".navbar .nav-menu").addClass("bg-color-white");
    } else {
      $(".navbar .nav-menu").removeClass("bg-color-white");
    }
  });

  $("nav .icon-navbar .searchBtn").click(function () {
    $(".popup").css({
      tansition: "all .4s",
      display: "flex",
    });
  });

  //   popup
  var pop = $(".popup");

  //   navbar end
});
