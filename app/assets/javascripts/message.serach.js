$(function(){
  $(".message__search-form").on("input", function(){
    let input = $(this).val();
    let url = window.location.pathname
    $.ajax({
      type: "GET",
      url: url,
      data: { keyword: input},
      dataType: "json"
    })
    .done(function(messages){
      if (messages.indexOf(input)) {
        $(".rinku").css("color", "red")
      }
      if ($(".message__search-form").val().length === 0){
        $(".rinku").css("color", "#c8c8c9")
      }
    })
    .fail(function(){
     
    })
  })
})