$(function(){
  let startPos = 0
  let nowPos = 0;
  $(".side-bar-chat").on('scroll',function(){
      nowPos = $(this).scrollTop();
      if (nowPos >= startPos) {
          $('.add-btn').fadeOut(300);
      } else {
        $('.add-btn').fadeIn(300);
      }
      startPos = nowPos;
  });
})