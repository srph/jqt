var $ = require('jquery');
require('../');

// Section A
;(function() {
  var enter = $('.js-section-1-enter');
  var exit = $('.js-section-1-exit');
  var jqt = $('.js-section-1-menu').jqt();

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

// Section C
;(function() {
  var enter = $('.js-section-3-enter');
  var exit = $('.js-section-3-exit');
  var jqt = $('.js-section-3-sidebar').jqt({ speed: 400 });

  enter.on('click', function() {
    jqt.enter();
  });

  exit.on('click', function() {
    jqt.exit();
  });
})();

// Docs-related code
// Animate scroll instead of an instant scroll
// for element anchor elements (e.g., <a href="#section1"></a>)
;(function() {
  var $html = $('html, body');

  $('a').on('click', function(evt) {
    var a = $(this);

    if ( a.attr('href').charAt(0) === '#' ) {
      evt.preventDefault();
      var top = $(a.attr('href')).offset().top;
      $html.animate({ scrollTop: top });
    }
  });
})();