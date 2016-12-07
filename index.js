;(function($, undefined) {
  $.fn.jqt = function jqt(opts) {
    opts = $.extend({
      display: 'block',
      enter: 'enter',
      enterActive: 'enter-active',
      leave: 'leave',
      leaveActive: 'leave-active',
      delay: 0,
      speed: 200
    }, opts);

    var el = this;

    return {
      enter: function() {
        setTimeout(function() {
          el.addClass(opts.enter)
            .css('display', opts.display);

          setTimeout(function() {
            el.addClass(opts.enterActive);
          }, 50);

          setTimeout(function() {
            el.removeClass(opts.enter)
              .removeClass(opts.enterActive);
          }, opts.speed);
        }, opts.delay);
      },

      exit: function() {
        setTimeout(function() {
          el.addClass(opts.leave);

          setTimeout(function() {
            el.addClass(opts.leaveActive);
          }, 50);

          setTimeout(function() {
            el.css('display', 'none')
              .removeClass(opts.leave)
              .removeClass(opts.leaveActive);
          }, opts.speed);
        }, opts.delay);
      }
    }
  }
})(jQuery);