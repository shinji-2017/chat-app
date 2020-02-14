$(function(){
  $(".add-btn").on("click", function(){
    $(".groups").css("display", "block")
  })
  $(".groups__inner-box-header-close").on("click", function(){
    $(".groups").css("display", "none")
  })
  $(".fa.fa-cog").on("click", function(){
    $(".groups").css("display", "block")
  })
  $(".close-btn").on("click", function(){
    $(".groups").css("display", "none")
  })
})