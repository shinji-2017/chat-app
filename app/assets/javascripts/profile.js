$(function(){
  $(".side-bar__header").on("click", function(){
    $(".profile").css("display", "block")
  });
  $(".close-btn").on("click", function(){
    $(".profile").css("display", "none")
  })
  $(".profile__inner-box-header-close").on("click", function(){
    $(".profile").css("display", "none")
  })
});