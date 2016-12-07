var $ = require('jquery');
require('../');

// Section A
;(function() {
  var enter = $('.js-section-1-enter');
  var exit = $('.js-section-1-exit');
  var jqt = $('.js-section-1-menu').jqt({ speed: 200 });

  enter.on('click', function() {
    jqt.enter();
  });

  exit.on('click', function() {
    jqt.exit();
  });
})();

// Section B
;(function() {
  var links = $('.js-section-2-tabs a');
  var tabs = $('.js-section-2-content');
  var active = 0;

  links.on('click', function(evt) {
    evt.preventDefault();

    var $this = $(this);
    var index = $this.data('index');

    // So we don't cause a weird transitioning of the same element
    if ( active === index ) {
      return;
    }

    // Remove 'active' class from the currently active tab button
    // Transition out the currently active tab body
    $(links[active]).removeClass('active');
    $(tabs[active]).jqt().exit();

    // Add the 'active' class to the next active tab button (clicked button)
    // Transition in the next active tab body
    $this.addClass('active');
    $(tabs[index]).jqt({ delay: 200, display: 'flex' }).enter();

    // Update active tab
    active = index;
  });
})();