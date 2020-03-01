$(function(){

  function buildHTML(message){
    if (message.image && message.user_image) {
      var html = `<div class="message" data-id=${message.id} data-user-id=${message.user_id}>
                  <div class="message-image" data-user-id=${message.user_id}>
                  <img src=${message.user_image} alt="Default" width="50" height="50">
                  </div>
                  <div class="message-box">
                  <div class="message-box-box">
                  <div class="message-box-box-name" data-user-id=${message.user_id}>
                  ${message.user_name}
                  </div>
                  <div class="message-box-box-data">
                  ${message.created_at}
                  </div>
                  </div>
                  <div class="message-box-content" >
                  ${message.text}
                  </div>
                  <img class="image" src=${message.image} width="200" height="200">
                  </div>
                  </div>`
    }else if (message.image !== null && message.user_image === null) {
      var html = `<div class="message" data-id=${message.id} data-user-id=${message.user_id}>
                  <div class="message-image" data-user-id=${message.user_id}>
                  <img src="/assets/default-224a733c50d48aba6d9fdaded809788bbeb5ea5f6d6b8368adaebb95e58bcf53.jpg" alt="Default" width="50" height="50">
                  </div>
                  <div class="message-box">
                  <div class="message-box-box">
                  <div class="message-box-box-name" data-user-id=${message.user_id}>
                  ${message.user_name}
                  </div>
                  <div class="message-box-box-data">
                  ${message.created_at}
                  </div>
                  </div>
                  <div class="message-box-content">
                  ${message.text}
                  </div>
                  <img class="image" src=${message.image} width="200" height="200">
                  </div>
                  </div>`
    }else if (message.image === null && message.user_image !== null) {
      var html = `<div class="message" data-id=${message.id} data-user-id=${message.user_id}>
                  <div class="message-image" data-user-id=${message.user_id}>
                  <img src=${message.user_image} alt="Default" width="50" height="50">
                  </div>
                  <div class="message-box">
                  <div class="message-box-box">
                  <div class="message-box-box-name" data-user-id=${message.user_id}>
                  ${message.user_name}
                  </div>
                  <div class="message-box-box-data">
                  ${message.created_at}
                  </div>
                  </div>
                  <div class="message-box-content" >
                  ${message.text}
                  </div>`
    }else {
      var html = `<div class="message" data-id=${message.id} data-user-id=${message.user_id}>
                  <div class="message-image" data-user-id=${message.user_id}>
                  <img src="/assets/default-224a733c50d48aba6d9fdaded809788bbeb5ea5f6d6b8368adaebb95e58bcf53.jpg" alt="Default" width="50" height="50">
                  </div>
                  <div class="message-box">
                  <div class="message-box-box">
                  <div class="message-box-box-name" data-user-id=${message.user_id}>
                  ${message.user_name}
                  </div>
                  <div class="message-box-box-data">
                  ${message.created_at}
                  </div>
                  </div>
                  <div class="message-box-content" >
                  ${message.text}
                  </div>`
    }
    return html
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault()
    var formdata = new FormData(this);
    var url = $("this").attr("action")
    $.ajax ({
      url: url,
      type: "POST",
      data: formdata,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $(".messages").append(html);
      $('.new_message')[0].reset();
      $('.main-chat-chat').animate({ scrollTop: $('.main-chat-chat')[0].scrollHeight});
      $(".edit-btn").css("background-color", "#36373C")
    })
  });

  $(".message-box-text").on(" input", function(){
    if($(this).val().length < 1){
      $(".edit-btn").prop("disabled",true);
      $(".edit-btn").css("background-color", "#36373C")
      $(".edit-btn").css("color", "#717273")
    }else {
      $(".edit-btn").prop("disabled",false);
      $(".edit-btn").css("background-color", "#138567")
      $(".edit-btn").css("color", "white")
    }
  })

  $("#message_image").on("change", function(){
    if ($(this).val() !== null){
      $(".edit-btn").prop("disabled",false);
      $(".edit-btn").css("background-color", "#138567")
      $(".edit-btn").css("color", "white")
    }else {
      $(".edit-btn").prop("disabled",true);
      $(".edit-btn").css("background-color", "#36373C")
      $(".edit-btn").css("color", "#717273")
    }
  })

    let reloadMessages = function(){
    let last_message_id = $('.message:last').data("id");
    $.ajax({
      url: "api/messages",
      type: "GET",
      dataType: "json",
      data: {id: last_message_id}
      })
      .done(function(messages){
        messages.forEach(function(message){
          buildHTML(message);
          let html = buildHTML(message);
          $(".messages").append(html);
          $('.main-chat-chat').animate({ scrollTop: $('.main-chat-chat')[0].scrollHeight});
        });
      })
    }
    if(location.pathname.match(/messages/)){
      setInterval(reloadMessages, 7000);
    }
});