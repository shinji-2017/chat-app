$(function(){
  $(".main-chat-header-box-group-option").on("click", function(){
    $(".form , .main-chat-chat").css("width", "calc(100vw - 700px)")
    $(".right-user").css("display", "block")
  })
  $(".fa.fa-times").on("click", function(){
    $(".form , .main-chat-chat").css("width", "calc(100vw - 300px)")
    $(".right-user").css("display", "none")
  })
  $(".sell.users").on("click", function(){
    let $answer = $(this).find(".answer");
    if($answer.hasClass('open')) { 
      $answer.removeClass('open');
      $answer.slideUp();
      $(this).find("span").text("▶︎");
    } else {
      $answer.addClass('open'); 
      $answer.slideDown();
      $(this).find("span").text("⬇️");
      
    }
  })
});