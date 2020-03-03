// $(function(){
//   $(".message__search-form").on("input", function(){
//     let input = $(this).val();
//     let url = window.location.pathname
//     $.ajax({
//       type: "GET",
//       url: "/messages/search",
//       data: { keyword: input},
//       dataType: "json"
//     })
//     .done(function(messages){
      
//       $(".message-box-content").css("color", "red")
//       console.log(messages)
//     })
//     .fail(function(){
//       console.log("失敗")
//     })
//   })
// })