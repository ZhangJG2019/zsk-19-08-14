$(function () {
  $(function () {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 100) {
        $('#back-to-top').fadeIn(500);
      } else {
        $('#back-to-top').fadeOut(500);
      }
    });

    $("#back-to-top").click(function () {
      if ($('html').scrollTop()) {
        $('html').animate({
          scrollTop: 0
        }, 300);
        return false;
      }
      $('body').animate({
        scrollTop: 0
      }, 300);
      return false;
    });
  });
});