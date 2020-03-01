$(function(){
  // $(".message__search-form").on("input", function(){
  //   let input = $(this).val();
  //   let url = window.location.pathname;
  //   $.ajax({
  //     type: "GET",
  //     url: "/groups/search",
  //     data: { keyword: input},
  //     dataType: "json"
  //   })
  //   .done(function(messages){
      
  //     $(".message-box-content").css("color", "red")
  //     console.log(messages)
  //   })
  //   .fail(function(){
  //     console.log("失敗")
  //   })
  // })

  // searchWord = function(){
  //   let input = $(this).val();
  //   searchResult = []
  //   let texts = $(".message-box-content").map(function(index, element){
  //     return element.innerHTML;
  //   })
  //   console.log(texts)
  //   if (texts.indexOf(input) > -1) {
  //     // $(".message-box-content").css("color", "red")
  //     console.log("含まれている")
  //   }else {
  //     // $(".message-box-content").css("color", "blue")
  //     console.log("含まれていない")
  //   }
  // }


  // $(".message__search-form").on("input", searchWord);
 
})