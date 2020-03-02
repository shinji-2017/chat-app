$(function(){
  
  $("#user_email, #user_name").on("input", function(){
    if ($("#user_email").val() === '' || $("#user_name").val() === '') {
      $(".bottom-box-update").prop("disabled",true);
      $(".bottom-box-update").css("background-color", "#36373C")
      $(".bottom-box-update").css("color", "#717273")
    
    }else {
      $(".bottom-box-update").prop("disabled",false);
      $(".bottom-box-update").css("background-color", "#138567")
      $(".bottom-box-update").css("color", "white")
    }
  })

  $(".validation").on("input", function(){
    if ($(this).val().length == 0) {
      $(".bottom-box-new").prop("disabled",true);
      $(".bottom-box-new").css("background-color", "#36373C")
      $(".bottom-box-new").css("color", "#717273")
    
    }else {
      $(".bottom-box-new").prop("disabled",false);
      $(".bottom-box-new").css("background-color", "#138567")
      $(".bottom-box-new").css("color", "white")
    }
  })

  $("#group_name").on("input", function(){
    if ($(this).val().length == 0) {
      $(".black").prop("disabled",true);
      $(".black").css("background-color", "#36373C")
      $(".bottom-box-new").css("color", "#717273")
    
    }else {
      $(".black").prop("disabled",false);
      $(".black").css("background-color", "#138567")
      $(".black").css("color", "white")
    }
  })
})