var jQuery = require('jquery');
window.jQuery = jQuery;
require('../');

// Section A
;(function($) {
  var enter = $('.js-section-1-enter');
  var exit = $('.js-section-1-exit');
  var jqt = $('.js-section-1-menu').jqt({ speed: 200 });

  enter.on('click', function() {
    jqt.enter();
  });

  exit.on('click', function() {
    jqt.exit();
  });
})(window.jQuery);

// Section B
;(function($) {
  var links = $('.js-section-2-tabs a');
  var tabs = $('.js-section-2-content');
  var active = 0;

  links.on('click', function(evt) {
    evt.preventDefault();

    var $this = $(this);
    var index = $this.data('index');

    console.log(active, index);

    if ( active === index ) {
      return;
    }

    $(links[active]).removeClass('active');
    $(tabs[active]).jqt().exit();

    $this.addClass('active');
    $(tabs[index]).jqt({ delay: 200, display: 'flex' }).enter();

    active = index;
  });
})(window.jQuery);