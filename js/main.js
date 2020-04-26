$(document).ready(function () {
  $(window).scroll(function () {
    if ($("html, body").scrollTop() >= 120) {
      $(".navbar .nav-menu").addClass("bg-color-white");
    } else {
      $(".navbar .nav-menu").removeClass("bg-color-white");
    }
  });

  $("nav .icon-navbar .searchBtn").click(function (e) {
    e.preventDefault();

    $(".pop-up").fadeIn().removeClass("active");
    closePop();
    setCloseKey();
    closePopUp();
  });

  //   popup
  var pop = $(".pop-up");
  var closeBtn = $(".icon-pop");

  $(".popup").click(function () {
    // $("#phone-popup").hide("fast");
  });

  pop.click(function (p) {
    // if (p.target.hasClass("popup")) {
    //   pop.css("display", "none");
    // }
    // $(".search").not()
  });
  //   functions
  function closePop() {
    closeBtn.click(function () {
      //   pop.css("display", "none");
      pop.fadeOut().removeClass("active");
    });
  }

  function setCloseKey() {
    $("body").keydown(function (e) {
      if (e.which == 27) {
        // pop.css("display", "none");
        pop.fadeOut().removeClass("active");
      }
    });
  }

  //   Sidebar

  $("nav .icon-navbar .sidebarBtn").click(function (e) {
    e.preventDefault();
    $(".sidebar").addClass("open-side");
  });

  $(".sidebar .close-btn").click(function () {
    $(".sidebar").removeClass("open-side");
  });
  //   navbar end

  //   ___________________________________________________________

  // Product section start

  var $projects = $(".projects");

  $projects.isotope({
    itemSelector: ".item",
    layoutMode: "fitRows",
  });

  $(".product-list-item").click(function () {
    var filter = $(this).attr("data-filter");

    $(".selected").removeClass("selected");
    $(this).addClass("selected");

    $projects.isotope({ filter: filter });
  });

  //   Product section end

  // Owl section start

  if ($(".social-owl .item").length) {
    $("#social-owl-slider").owlCarousel({
      loop: true,
      // margin: 20,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      responsiveClass: true,
      nav: false,
      dots: false,
      mouseDrag: false,
      // freeDrag: false,
      // pullDrag: false,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        600: {
          items: 5,
          nav: false,
        },
        1000: {
          items: 5,
        },
      },
    });
  }
});
