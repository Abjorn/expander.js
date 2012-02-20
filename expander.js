//
// Expander.js
// jQuery Plugin for creating elements that expand to the remaining width or height left
// in it's parent container.
//
// Author: Corey Schram
// Last Modified: 2/19/2012
//

(function($) {

  var expandX = function (el) {
    var $el = $(el),
        newWidth = 0;

    newWidth = $el.parent().width();
    $el.siblings().each(function (i, e) {
      newWidth = newWidth - $(e).width();
    });

    $el.width(newWidth);
  };

  var expandY = function (el) {
    var $el = $(el),
        newHeight = 0;

    newHeight = $el.parent().height();
    $el.siblings().each(function (i, e) {
      newHeight = newHeight - $(e).height();
    });

    $el.height(newHeight);
  };

  $.fn.expander = function () {
    $el = $(this);

    $el.find(".expand-x").each(function (i, el) {
      expandX(el);
      $(el).resize(function (event) {
        expandX(el);
      });
    });

    $el.find(".expand-y").each(function (i, el) {
      expandY(el);
      $(el).resize(function (event) {
        expandY(el);
      });
    });

    return this;
  };

})(jQuery);