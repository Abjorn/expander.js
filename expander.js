//
// Expander.js
// jQuery Plugin for creating elements that expand to the remaining width or height left
// in it's parent container.
//
// Author: Corey Schram
// Last Modified: 2/27/2012
//

(function($) {

  // Retrieve all relevant siblings, filtering out unwanted siblings.
  // Elements with fixed or absolute positioning, or the class "expand-exclude" are excluded.
  function getSiblings(elem) {
    return $(elem).siblings().filter(function () {
      if ($(this).hasClass("expand-exclude")
      || (($(this).css("position") === "absolute" || $(this).css("position") === "fixed") && !$(this).hasClass("expand-include"))) {
        return false;
      } else {
        return true;
      }
    });
  }

  $.fn.expander = function () {
    element = $(this);

    setTimeout(function () {
      // Calculate widths for all expand-x elements.
      element.find(".expand-x").each(function (i, el) {
        var newWidth = $(el).parent().outerWidth();

        getSiblings(el).each(function () {
          newWidth = newWidth - $(this).outerWidth();
        });

        $(el).width(newWidth);
      });

      // Calculate heights for all expand-y elements.
      element.find(".expand-y").each(function (i, el) {
        var newHeight = $(el).parent().outerHeight();

        getSiblings(el).each(function () {
          newHeight = newHeight - $(this).outerHeight();
        });

        $(el).height(newHeight);
      });

      return this;
    }, 1);
  };

})(jQuery);