$(function(){
  function addUser(user) {
    let html = `<div class="input-group"><p class="input-group-users">
                ${user.name}
                </p>
                <div class="user-add" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
                </div>`;
    $(".add-users").append(html);
  }


  function addNoUser(){
    let html = `<div class="input-group"><p class="input-group-users">
                ユーザーが見つかりません
                </p>
                </div>`
    $(".add-users").append(html);
  }

  function addDeleteUser(name, id) {
    let html = `<div class="input-group" id=""${id}><p class="input-group-users">
    ${name}
    </p>
    <div class="remove-btn" data-user-id="${id}" data-user-name="${name}">削除</div>
    </div>`;
    $(".add-js-user").append(html);
  }

  function addMember(userId) {
    let html = `<input value="${userId}" name="group[user_ids][]" type="hidden" id="group_user_ids_${userId}" />`;
    $(".add-js-user").append(html);
  }
  

  $(".input.users").on("input", function(){
    let input = $(this).val();
    $.ajax({
      type: "GET",
      url: "/users",
      data: {keyword: input},
      dataType: "json"
    })
    .done(function(users) {
      $(".add-users").empty();

      if (users.length !== 0) {
        users.forEach(function(user) {
          addUser(user);
        });
      } else if (input.length == 0) {
        return false;
      } else {
        addNoUser();
      }
    })
    .fail(function() {
      alert("通信エラーです。ユーザーが表示できません。");
    });
  })

  $(document).on("click", ".user-add", function(){
    const userName = $(this).attr("data-user-name");
    const userId = $(this).attr("data-user-id");
    $(this).parent().remove();
    addDeleteUser(userName, userId);
    addMember(userId);
    $(".input.users").val("");
  })

  $(document).on("click", ".remove-btn", function() {
    $(this)
      .parent()
      .remove();
  });
})