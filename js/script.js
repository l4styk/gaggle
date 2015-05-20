(function($) {
  $(function() {
    var $toggleText = $('#menu-toggle').text();
    $('#menu-toggle').click(function() {
      $('#main-menu').slideToggle();
      $(this).toggleClass('active');
      if ($(this).text() === $toggleText) {
        $(this).text('Menu');
      } else {
        $(this).text($toggleText);
      }
    });
  });
})(jQuery);
