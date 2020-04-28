$(document).ready(function () {
  $(window).scroll(function () {
    if ($("html, body").scrollTop() >= 120) {
      $(".navbar .nav-menu").addClass("bg-color-white");
      $(".navbar .nav-menu").addClass("animation-fadeIn");

      $(".shop-card").addClass("fixed-top");
      $(".shop-card").addClass("animation-fadeIn");

      $("");
    } else {
      $(".navbar .nav-menu").removeClass("bg-color-white");
      $(".navbar .nav-menu").removeClass("animation-fadeIn");

      $(".shop-card").removeClass("fixed-top");
      $(".shop-card").removeClass("animation-fadeIn");
    }

    // fixed - top;
  });

  $(".searchBtn").click(function (e) {
    e.preventDefault();

    $(".pop-up").fadeIn().removeClass("active");
    closePop();
    setCloseKey();
    // closePopUp();
  });

  //   popup
  var pop = $(".pop-up");
  var closeBtn = $(".icon-pop");

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

  $(".sidebarBtn").click(function (e) {
    e.preventDefault();
    $(".sidebar").addClass("open-side");
  });

  $(".sidebar .close-btn").click(function () {
    $(".sidebar").removeClass("open-side");
  });
  //   navbar end

  //   ___________________________________________________________

  // Product section start

  // var $projects = $(".projects");
  var $product = $(".product");

  window.onload = function () {
    $product.isotope({
      itemSelector: ".item",
      layoutMode: "fitRows",
    });
  };

  $(".product-list-item").click(function () {
    var filters = $(this).attr("data-filter");

    $(".selected").removeClass("selected");
    $(this).addClass("selected");

    $product.isotope({ filter: filters });
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
  // Owl section end

  // Footer start

  $(".clickScroll").click(function (e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: "0",
      },
      1500
    );
  });
  // Footer end

  // Login start
  $(".loginBtn").click(function (e) {
    e.preventDefault();
    if (
      $("input[name=username]").val() == "" ||
      $("input[name=pass]").val() == ""
    ) {
      $(".danger").show(1000);
      timeOut();
    } else {
      $(".success").show(1000);
      timeOut();
    }
  });

  // Contact Start

  function timeOut() {
    setTimeout(function () {
      $(".alert").hide(900);
    }, 2500);
  }

  // $(".danger").hide();
  // $(".success").hide();

  $(".subBtn").click(function (e) {
    e.preventDefault();
    if ($("input[name=name]").val() == "") {
      $(".danger").text("Please write your name");
      $(".danger").show(1000);
      timeOut();
    } else if ($("input[name=email]").val() == "") {
      $(".danger").text("Please write your email");
      $(".danger").show(1000);
      timeOut();
    } else if ($("input[name=phone]").val() == "") {
      $(".danger").text("Please write your phone number");
      $(".danger").show(1000);
      timeOut();
    } else if ($("textarea[name=message]").val() == "") {
      $(".danger").text("Please write your message");
      $(".danger").show(1000);
      timeOut();
    } else {
      $(".success").text("Thank you. We will get back to you soon");
      $(".success").show(1000);
      timeOut();
    }
  });

  // Contact end

  // Shop Products start

  $(".shop-product-list-item").click(function () {
    var filterShop = $(this).attr("data-filter");

    $(".selected").removeClass("selected");
    $(this).addClass("selected");

    $product.isotope({ filter: filterShop });
  });

  $(".page-list-item a.page-num").click(function (e) {
    e.preventDefault();
    $(".selected-page").removeClass("selected-page");
    $(this).children().addClass("selected-page");
    // $(this)
  });
  $(".page-list-item a.next").click(function (e) {
    e.preventDefault();
    if ($(".page-num").find(".first").is(".selected-page")) {
      $(".selected-page").removeClass("selected-page");
      $(".page-num").find(".second").addClass("selected-page");
    } else if ($(".page-num").find(".second").is(".selected-page")) {
      $(".selected-page").removeClass("selected-page");
      $(".page-num").find(".last").addClass("selected-page");
    } else {
      $(".danger").show(900);
      timeOut();
    }

    // $(".page-num").find(".last").addClass("selected-page");
  });
  $(".page-list-item a.prev").click(function (e) {
    e.preventDefault();
    if ($(".page-num").find(".last").is(".selected-page")) {
      $(".selected-page").removeClass("selected-page");
      $(".page-num").find(".second").addClass("selected-page");
    } else if ($(".page-num").find(".second").is(".selected-page")) {
      $(".selected-page").removeClass("selected-page");
      $(".page-num").find(".first").addClass("selected-page");
    } else {
      $(".danger").show(900);
      timeOut();
    }
  });
});
