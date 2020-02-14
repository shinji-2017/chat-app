$(function(){
  $(".add-btn").on("click", function(){
    $(".groups").css("display", "block")
  })

  $(".fa.fa-cog").on("click", function(){
    $(".group").css("display", "block")
  })
  
$(".fas.fa-times").on("click", function(){
  $(".group, .groups").css("display", "none")
})

  $(".close-btn").on("click", function(){
    $(".groups, .group").css("display", "none")
  })
})