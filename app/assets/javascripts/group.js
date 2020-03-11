$(function(){
  $(".add-btn").on("click", function(){
    $(".groups").css("display", "block")
    $(".user-show").css("display", "none")
  })

  $(".fas.fa-users-cog ,.main-chat-header-box-group-name").on("click", function(){
    $(".group").css("display", "block")
    $(".user-show").css("display", "none")
  })
    
  $(".fas.fa-times").on("click", function(){
    $(".group, .groups").css("display", "none")
  })

  $(".close-btn").on("click", function(){
    $(".groups, .group").css("display", "none")
  })

  $(".main-chat-header-box-group-option").on("click", function(){
    $(".group-user").css("display", "block")
  })

  $(".group-close-text").on("click", function(){
    $(".group-user").css("display", "none")
    $(".user-show").css("display", "none")
  })
})