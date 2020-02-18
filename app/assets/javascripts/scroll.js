$(function(){
  let startPos = 0
  let nowScrollTop = 0;
  $(".side-bar-chat").on('scroll',function(){
      nowScrollTop = $(this).scrollTop();
      if (nowScrollTop >= startPos) {
          $('.add-btn').fadeOut(400);
      } else {
        $('.add-btn').fadeIn(400);
      }
      startPos = nowScrollTop;
  });
})