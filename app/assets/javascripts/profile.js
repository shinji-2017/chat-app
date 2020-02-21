$(function(){
  $(".side-bar__header").on("click", function(){
    $(".profile").css("display", "block")
    $(".user-show").css("display", "none")
  });
  $(".close-btn").on("click", function(){
    $(".profile").css("display", "none")
  })
  $(".profile__inner-box-header-close").on("click", function(){
    $(".profile").css("display", "none")
  })
  $(document).on("click", ".user-show-edit-text", function(){
    $(".profile").css("display", "block")
    $(".user-show").css("display", "none")
  })
});