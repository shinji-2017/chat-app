$(function(){

  function appendGroup(group) {
    // if (group ) {
      let html = `<a class="side-bar" href="/groups/${group.id}/messages"><div class="side-bar__chat">
                  <div class="side-bar__chat-image">
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
      if (groups.length !== 0) {
        groups.forEach(function(group){
          appendGroup(group);
        });
      } else {
        appendNoGroup("一致するグループがありません");
      } 
      if (input === '') {
        $(".side-bar-chat").empty();
      }
    })
    .fail(function(){
      console.log("失敗");
    });
  })
  
});