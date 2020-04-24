$(document).ready(function () {
  $(window).scroll(function () {
    if ($("html, body").scrollTop() >= 120) {
      $(".navbar .nav-menu").addClass("bg-color-white");
    } else {
      $(".navbar .nav-menu").removeClass("bg-color-white");
    }
  });
  //   navbar end

  // venobox
  $(".venobox_custom").venobox({
    framewidth: "400px", // default: ''
    frameheight: "300px", // default: ''
    border: "10px", // default: '0'
    bgcolor: "#5dff5e", // default: '#fff'
    titleattr: "data-title", // default: 'title'
    numeratio: true, // default: false
    infinigall: true, // default: false
    share: ["facebook", "twitter", "download"], // default: []
  });
});
