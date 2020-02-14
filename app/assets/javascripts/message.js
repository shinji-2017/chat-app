$(function(){
  function buildHTML(message){
    if (message.image) {
      var html = `<div class="message" data-message-id=${message.id}>
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
                  return html;
                 
    }else {
      var html = `<div class="message" data-message-id=${message.id}>
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
                  return html;
    }
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
    })
    .fail(function(){
      alert("error");
    })
    .always(function(){
      $(".edit-btn").removeAttr("disabled")
    })
  });

});