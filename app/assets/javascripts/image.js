$(function(){
  $('#user_image').change(function(){
    var file = $('input[type="file"]').prop('files')[0];
    var fileReader = new FileReader();
    $(".profile-image").remove()
    fileReader.onloadend = function() {
      var src = fileReader.result
      var html= `<img class="profile-image" src=${src} alt="gogle" width="200" height="200">`
      $('.profile__inner-box-form-right').prepend(html);
    }
    fileReader.readAsDataURL(file);
  });

  // $('#group_image').change(function(){
  //   var file = $('input[type="file"]').prop('files')[0];
  //   var fileReader = new FileReader();
  //   $(".profile-image").remove()
  //   fileReader.onloadend = function() {
  //     var src = fileReader.result
  //     var html= `<img class="profile-image" src=${src} alt="Gorigori" width="200" height="200">`
  //     $('.profile__inner-box-form-right').prepend(html);
  //   }
  //   fileReader.readAsDataURL(file);
  // });
});