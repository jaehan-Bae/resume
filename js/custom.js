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
  function() {
    var windowTop = $(window).scrollTop() + 300;
      $(".goto-top").stop().animate({ top: windowTop + "px" }, 500);
    }
  );
});

// toy-modal
// function openWindow(event, width, height) {
//   event.preventDefault();
//   var leftPos = Math.floor((screen.width - width) / 2);
//   var topPos = Math.floor((screen.height - height) / 2);
//   var newWindow = window.open(event.target.href, '', 'width=' + width + ', height=' + height + ', top=' + topPos + ', left=' + leftPos);
//   return false;
// }

function openWindow(event, width, height, url) {
  event.preventDefault();
  var leftPos = Math.floor((screen.width - width) / 2);
  var topPos = Math.floor((screen.height - height) / 2);
  var newWindow = window.open(url, '', 'width=' + width + ', height=' + height + ', top=' + topPos + ', left=' + leftPos);
  return false;
}

