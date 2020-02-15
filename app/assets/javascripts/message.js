$(function(){

  function buildHTML(message){
    if (message.image) {
      var html = `<div class="message" data-id=${message.id}>
                  <div class="message-image">
                  <img src=${message.user_image} alt="Default" width="50" height="50">
                  </div>
                  <div class="message-box">
                  <div class="message-box-box">
                  <div class="message-box-box-name">
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
    }else {
      var html = `<div class="message" data-id=${message.id}>
                  <div class="message-image">
                  <img src=${message.user_image} alt="Default" width="50" height="50">
                  </div>
                  <div class="message-box">
                  <div class="message-box-box">
                  <div class="message-box-box-name">
                  ${message.user_name}
                  </div>
                  <div class="message-box-box-data">
                  ${message.created_at}
                  </div>
                  </div>
                  <div class="message-box-content">
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
      $(".edit-btn").addClass("disabled",true);
      $(".edit-btn").css("background-color", "#36373C")
      $(".edit-btn").css("color", "#717273")
    }else {
      $(".edit-btn").prop("disabled",false);
      $(".edit-btn").css("background-color", "#138567")
      $(".edit-btn").css("color", "white")
    }
  })

    let reloadMessages = function(){
    let last_message_id = $('.message:last').data("id");
    $.ajax({
      url: "api/messages",
      type: "get",
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
     .fail(function(){
       alert("error");
     })
    }
    if(location.pathname.match(/messages/)){
      setInterval(reloadMessages, 7000);
    }
});