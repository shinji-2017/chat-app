$(function(){
  $(".add-btn").on("click", function(){
    $(".groups").css("display", "block")
  })

  $(".fas.fa-users-cog").on("click", function(){
    $(".group").css("display", "block")
  })
  
$(".fas.fa-times").on("click", function(){
  $(".group, .groups").css("display", "none")
})

  $(".close-btn").on("click", function(){
    $(".groups, .group").css("display", "none")
  })
  // $(document).on('click touchend', function(event) {
  //   if (!$(event.target).closest('#target').length) {
  //     $('.profile, .groups, .gruop').css("display", "none");
  //   }
  // });
})