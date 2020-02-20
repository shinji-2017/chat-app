$(function(){
  $(".main-chat-header-box-group-option").on("click", function(){
    $(".main-chat").css("width", "calc(100vw - 700px)")
    $(".right-user").css("display", "block")
    $(".fas.fa-users-cog").css("margin-right", "400px")
  })
});