$(function(){

  function appendGroup(group) {
    if (group.group_image) {
      let html = `<a class="side-bar" href="/groups/${group.id}/messages"><div class="side-bar__chat">
                  <div class="side-bar__chat-image">
                  <img class="profile-image" src=${group.group_image} alt="Google" width="50" height="50">
                  </div>
                  <div class="side-bar__chat-contents">
                  <div class="side-bar__chat-contents-sell">
                  <p class="side-bar__chat-contents-sell-name">
                  ${group.name}
                  </p>
                  <p class="side-bar__chat-contents-sell-time"></p>
                  </div>
                  <p class="side-bar__chat-contents-text">
                  
                  </p>
                  </div>
                  </div>
                  </a>`
      $(".side-bar-chat").append(html);
    }else{
      let html = `<a class="side-bar" href="/groups/${group.id}/messages"><div class="side-bar__chat">
                  <div class="side-bar__chat-image">
                  <img class="profile-image" src="/assets/users-group-7483c255833f482a787991b7717f730e8a46b0336b3a7612f0a46f209a424d61.png" alt="Google" width="50" height="50">
                  </div>
                  <div class="side-bar__chat-contents">
                  <div class="side-bar__chat-contents-sell">
                  <p class="side-bar__chat-contents-sell-name">
                  ${group.name}
                  </p>
                  <p class="side-bar__chat-contents-sell-time"></p>
                  </div>
                  <p class="side-bar__chat-contents-text">
                
                  </p>
                  </div>
                  </div>
                  </a>`
    $(".side-bar-chat").append(html);
    }
  }

  function appendHit(group) {
    let hitGroup = '<div class="search-result"><span>検索結果</span>：' + group.length + '件見つかりました。</div>';
    $(".side-bar-chat").append(hitGroup);
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
      $(".side-bar-chat").empty();
      if (groups.length !== 0) {
        appendHit(groups)
      }
      if (input == '') {
        $(".search-result").remove()
      }
      if (groups.length !== 0) {
        groups.forEach(function(group){
          appendGroup(group);
        });
      } else if(input === "") {
       
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