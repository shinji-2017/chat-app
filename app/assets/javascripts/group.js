$(function(){
  $(".add-btn").on("click", function(){
    $(".group").css("display", "block")
  })
  $(".group__inner-box-header-close").on("click", function(){
    $(".group").css("display", "none")
  })
})