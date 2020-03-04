$(function(){
  var $textarea = $('.message-box-text');
  var lineHeight = parseInt($textarea.css('lineHeight'));
  // 最低行数を指定
  var minHeight = lineHeight * 1;
  // 最高幅を指定
  var maxHeight = parseInt($(window).height() * 0.5);
  $textarea.on('input', function() {
    var lines = ($(this).val() + '\n').match(/\n/g).length;
    $(this).height(Math.min(maxHeight, Math.max(lineHeight * lines, minHeight)));
  });
})