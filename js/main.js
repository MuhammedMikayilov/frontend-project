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

  //   $(".popup").click(function () {
  //     $("#email-popup").show("fast");
  //   });
  //   $(".phone").click(function () {
  //     $("#phone-popup").show();
  //   });

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

  //   navbar end
  var popup = document.querySelector(".pop-up");

  popup.addEventListener("click", function (p) {
    if (!p.target.classList.contains("pop-up")) {
      //   popup.style.display = "none";
      //   pop.css("display", "none");
      console.log("yes");
    }
    // console.log("hello");
  });
});

function closePopUp() {}
