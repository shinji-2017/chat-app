$(function(){

  function buildHtml(user){
    if (user.user_image && user.user_status) {
      let html = `<div class="user-show-image">
                  <img src=${user.user_image} alt="Default" width="298" height="298">
                  <i id="close-show" class="fa fa-times"></i>
                  </div>
                  <div class="user-show-name">
                  <p class="user-show-name-text">
                  名前
                  </p>
                  ${user.user_name}
                  </div>
                  <div class="user-show-status">
                  <p class="user-show-status-text">
                  ステータスメッセージ
                  </p>
                  <p class="user-show-status-show">
                  ${user.user_status}
                  </p>
                  </div>`
      return html
      }else if (user.user_image) {
        let html = `<div class="user-show-image">
                    <img src=${user.user_image} alt="Default" width="298" height="298">
                    <i id="close-show" class="fa fa-times"></i>
                    </div>
                    <div class="user-show-name">
                    <p class="user-show-name-text">
                    名前
                    </p>
                    ${user.user_name}
                    </div>
                    <div class="user-show-status">
                    <p class="user-show-status-text">
                    ステータスメッセージ
                    </p>
                    <p class="user-show-status-show">
                    未記入
                    </p>
                    </div>`
        return html;
    }else {
      let html = `<div class="user-show-image">
                  <img src="/assets/default-224a733c50d48aba6d9fdaded809788bbeb5ea5f6d6b8368adaebb95e58bcf53.jpg" alt="Default" width="298" height="298">
                  <i id="close-show" class="fa fa-times"></i>
                  </div>
                  <div class="user-show-name">
                  <p class="user-show-name-text">
                  名前
                  </p>
                  ${user.user_name}
                  </div>
                  <div class="user-show-status">
                  <p class="user-show-status-text">
                  ステータスメッセージ
                  </p>
                  <p class="user-show-status-show">
                  未記入
                  </p>
                  </div>`
      return html;
    }
  }

  $(".main-chat-header-box-group-option").on("click", function(){
    $(".form , .main-chat-chat").css("width", "calc(100vw - 700px)")
    $(".right-user").css("display", "block")
  })

  $("#close-group").on("click", function(){
    $(".form , .main-chat-chat").css("width", "calc(100vw - 300px)")
    $(".right-user").css("display", "none")
    
  })

  $(document).on("click", "#close-show",function(){
    $(".user-show").css("display", "none")
  })

  $(".sell.users").on("click", function(){
    let $answer = $(this).find(".answer");
    if($answer.hasClass('open')) { 
      $answer.removeClass('open');
      $answer.slideUp();
      $(this).find("span").text("▶︎");
    } else {
      $answer.addClass('open'); 
      $answer.slideDown();
      $(this).find("span").text("⬇️");
    }
  })

  $(".message-box-box-name, .message-image, .answer-box").on("click", function(){
    let input = $(this).data('user-id')
    $(".user-show").empty();
    $(".user-show").css("display", "block")
    let url = window.location.pathname;
    $.ajax({
      type: "GET",
      url: url,
      data: {id: input},
      dataType: "json"
    })
    .done(function(users){
      users.forEach(function(user){
        let html = buildHtml(user)
        $(".user-show").append(html);
      })
     
    })
    .fail(function(){
      console.log("失敗")
    })
  })

});