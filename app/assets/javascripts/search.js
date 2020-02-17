$(function(){

  function appendGroup(group) {
    // if (group ) {
      let html = `<a class="side-bar" href="/groups/${group.id}/messages"><div class="side-bar__chat">
                  <div class="side-bar__chat-image">
                  <img src=${group_image} alt="Google.jpg" width="50" height="50">
                  </div>
                  <div class="side-bar__chat-contents">
                  <div class="side-bar__chat-contents-sell">
                  <p class="side-bar__chat-contents-sell-name">
                  ${group.name}
                  </p>
                  <p class="side-bar__chat-contents-sell-time"></p>
                  </div>
                  <p class="side-bar__chat-contents-text">
                  ${group.text}
                  </p>
                  </div>
                  </div>
                  </a>`
      $(".side-bar-chat").append(html);
    // }
  }

  function appendNoGroup(msg) {
    var html = `<div class='no-group'>${ msg }</div>`
    $(".side-bar-chat").append(html);
  }

  $(".side-bar__search-form").on("input", function(){
    let input = $(this).val();
    $.ajax({
      type: 'GET',
      url: '/groups',
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(groups){
      console.log(groups)
      $(".side-bar-chat").empty();
      if (groups.length !== 0) {
        groups.forEach(function(group){
          appendGroup(group);
        });
      }
      else {
        appendNoGroup("一致するグループがありません");
      }  
    })
    .fail(function(){
      console.log("失敗");
    });
  })
  
});