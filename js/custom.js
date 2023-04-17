$(function(){
/* Header Scroll Change */
$(window).scroll(function(){
  if($(window).scrollTop() > 60){
    $('header').addClass('active');
  }else{
    $('header').removeClass('active');
  }
});

/* Header Scroll Change */
$(window).scroll(
  function () {
    var windowTop = $(window).scrollTop() + 300;
      $(".goto-top").stop().animate({ top: windowTop + "px" }, 500);
    }
  );
});