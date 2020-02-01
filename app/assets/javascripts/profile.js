$(function(){
  $(".side-bar__header").on("click", function(){
    $(".profile").css("display", "block")
  });
  $(".close-btn").on("click", function(){
    $(".profile").css("display", "none")
  })
});