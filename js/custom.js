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
    // 1.마우스 휠이 움직이면, 이벤트 핸들러 내부에서 스크롤 이벤트를 막는다. (a태그 위로 올라가는 현상 방지)
    // passive : false 스크롤 이벤트가 메인 스레드를 차단하지 않도록 한다.
    window.addEventListener("wheel", function (e) {
      e.preventDefault();
    }, { passive: false });

    // 2.변수 설정: html, page=현재페이지, lastPage=마지막페이지(섹션의 개수만큼)
    var $html = $("html");
    var page = 1;
    var lastPage = $("section").length;

    // 3. 스크롤애니메이션 시간 설정 0.75초
    var timeScrollAnimation = 50;
    // 4. 스크롤위치를 맨 위(scrollTop: 0)로 이동, 10ms 동안.
    $html.animate({ scrollTop: 0 }, 10);

    // 5. 마우스 휠을 굴릴 때 이벤트 동작 
    $(window).on("wheel", function (e) {
      // 6.html이 동작 중이면 실행
      if ($html.is(":animated")) return;

      // 7. e.originalEvent.deltaY > 원본 이백트 객체의 휠의 수직방향 이동량
      if (e.originalEvent.deltaY > 0) { // == 휠이 아래쪽으로 이동된다면 page 증가
        if (page == lastPage) return;// page가 마지막 페이지라면 휠 중지.
        page++;
      } else if (e.originalEvent.deltaY < 0) { // == 휠이 위쪽으로 이동된다면 page 감소
        if (page == 1) return; // 페이지가 첫번째라면 휠 중지.
        page--;
      }

      // 8. posTop = 페이지의 최상단 위치. 
      // 만약 현재 페이지가 3이고, 페이지당 위치가 500이라면, (3-1)*500 = 1000. scrollTop이 1000인 곳으로 이동한다.
      var posTop = (page - 1) * ($(window).height());
      // html에 동작하게 한다. scrollTop이 현 위치의 최상단에 위치하도록 timeScrollAnimation을 작동시켜줘.
      $html.animate({ scrollTop: posTop }, timeScrollAnimation);

    });


    /* TypeIt - Welcome */
    $('#typing').typeIt({
      strings: ["Web publisher", "Front-end developers"],
      speed: 100,
      autoStart: true,
      breakLines: false,
    });

  /* Header Scroll Change */
  $(window).scroll(
    function () {
      var windowTop = $(window).scrollTop() + 300;
      $(".goto-top").stop().animate({ top: windowTop + "px" }, 500);
    }
  );
});

  // Window Open event 
function openWindow(event, width, height, url) {
  event.preventDefault();
  var leftPos = Math.floor((screen.width - width) / 2);
  var topPos = Math.floor((screen.height - height) / 2);
  var newWindow = window.open(url, '', 'width=' + width + ', height=' + height + ', top=' + topPos + ', left=' + leftPos);
  return false;
}


