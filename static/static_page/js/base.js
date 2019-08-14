  //补位函数。
  function extra(x) {
    //如果传入数字小于10，数字前补一位0。
    if (x < 10) {
      return "0" + x;
    } else {
      return x;
    }
  }
  //获取系统时间，将时间以指定格式显示到页面。
  $(document).ready(function () {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    // alert(year + "," + month + "," + day + "," + week)
    //分秒时间是一位数字，在数字前补0。
    month = extra(month);
    day = extra(day);
    $(".mytime").html(year + "-" + month + "-" + day);
  });
  $("#sort_menu").trigger("click");

  // 回到顶部 1
  $(function () {
    //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
    $(function () {
      $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
          $("#back-to-top").fadeIn(500);
        } else {
          $("#back-to-top").fadeOut(500);
        }
      });

      //当点击跳转链接后，回到页面顶部位置
      $("#back-to-top").click(function () {
        //$('body,html').animate({scrollTop:0},1000);
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
  // 回到顶部 2



  // 推荐前三项
  function bgc(color, tagName) {
    $(tagName).each(function (i, e) {
      $(e).css('background-color', color[i])
    })
  }
  bgc(['#427fed', '#427fed', '#427fed'], '.content_right .new_content')
  // 推荐前三项  