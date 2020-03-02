$(function(){

  function addUser(user) {
    if (user.image) {
      let html = `<div class="answer-box" data-user-id=${user.id}>
                <div class="user-box">
                <div class="user-box-image">
                <img class="user-image-info" src=${user.image} alt="Google" width="40" height="40">
                </div>
                <div class="user-box-name">
                ${user.name}
                </div>
                </div>
                </div>`
      $(".group-user-box").append(html)
    }else {
      let html = `<div class="answer-box" data-user-id=${user.id}>
                  <div class="user-box">
                  <div class="user-box-image">
                  <img class="user-image-info" src="/assets/users-group-7483c255833f482a787991b7717f730e8a46b0336b3a7612f0a46f209a424d61.png" alt="Google" width="40" height="40">
                  </div>
                  <div class="user-box-name">
                  ${user.name}
                  </div>
                  </div>
                  </div>`
      $(".group-user-box").append(html)
    }
  }
    

  function addNoUser() {
    let html = `<div class="answer-box">
                <div class="user-box-name">
                ユーザーが見つかりません
                </div>
                </div>
                </div>`
    $(".group-user-box").append(html)  
  }

  function appendHit(users) {
    let hitGroup = '<div class="search-result-user"><span>検索結果</span>：' + users.length + '件見つかりました。</div>';
    $(".group-user-box").append(hitGroup);
  }


  $(".group-user__search-form").on("input", function(){
    let input = $(this).val();
    $.ajax({
      type: "GET",
      url: "/users/search",
      data: {keyword: input},
      dataType: "json"
    })
    .done(function(users){
      console.log(users)
      $(".group-user-box").empty();
      if (users.length !== 0) {
        appendHit(users)
      }
      // if (input == '') {
      //   $(".search-result-user").remove()
      // }
      if (users.length !== 0){
        users.forEach(function(user){
          addUser(user)
        })
      } else {
        addNoUser();
      }
    })
    .fail(function(){
      console.log("失敗")
    })
  })
})