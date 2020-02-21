$(function(){
  $(".add-btn").on("click", function(){
    $(".groups").css("display", "block")
    $(".user-show").css("display", "none")
  })

  $(".fas.fa-users-cog").on("click", function(){
    $(".group").css("display", "block")
    $(".user-show").css("display", "none")
  })
  
$(".fas.fa-times").on("click", function(){
  $(".group, .groups").css("display", "none")
})

  $(".close-btn").on("click", function(){
    $(".groups, .group").css("display", "none")
  })
})