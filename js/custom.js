$(function () {
  /* Header Scroll Change */
  $(window).scroll(function () {
    if ($(window).scrollTop() > 60) {
      $('header').addClass('active');
    } else {
      $('header').removeClass('active');
    }
  });

  
  //Wheel Scroll Chage
    // window.addEventListener("wheel", function (e) {
    //   e.preventDefault();
    // }, { passive: false });

    // var $html = $("html");
    // var page = 1;
    // var lastPage = $("section").length;

    // var timeScrollAnimation = 50;
    // $html.animate({ scrollTop: 0 }, 10);

    // $(window).on("wheel", function (e) {
    //   if ($html.is(":animated")) return;

    //   if (e.originalEvent.deltaY > 0) { 
    //     if (page == lastPage) return;
    //     page++;
    //   } else if (e.originalEvent.deltaY < 0) { 
    //     if (page == 1) return;
    //   }

    //   var posTop = (page - 1) * ($(window).height());
    //   $html.animate({ scrollTop: posTop }, timeScrollAnimation);

    // });

    // $('.portfolio-item').click(function() {
    //   $(this).addClass('active');
    //   $(this).siblings().removeClass('active');

    //   $('.portfolio-contents').removeClass('active');
    //   $('#' + $(this).attr('data-alt')).addClass('active');
    // });


    /* TypeIt - Welcome */
    $('#typing').typeIt({
      strings: ["Web publisher", "Front-end developer"],
      speed: 100,
      autoStart: true,
      breakLines: false,
      loop: true
    });

  /* Header Scroll Change */
  $(window).scroll(
    function () {
      var windowTop = $(window).scrollTop() + 300;
      $(".goto-top").stop().animate({ top: windowTop + "px" }, 500);
    }
  );

  $('.toy-img').mouseover(function() {
    $(this).parent().siblings().find('.toy-thum').removeClass('active');
    $(this).children('.toy-thum').addClass('active');
  });
});

  // Window Open event 
function openWindow(event, width, height, url) {
  event.preventDefault();
  var leftPos = Math.floor((screen.width - width) / 2);
  var topPos = Math.floor((screen.height - height) / 2);
  var newWindow = window.open(url, '', 'width=' + width + ', height=' + height + ', top=' + topPos + ', left=' + leftPos);
  return false;
}


