/**
 * jQuery Toooggle
 * @version   0.1
 * @author    biohzrdmx <github.com/biohzrdmx>
 * @requires  jQuery 1.8+
 * @license   MIT
 * @copyright Copyright © 2015 biohzrdmx. All rights reserved.
 */

;(function($) {
	$.fn.toooggle = function(options) {
		if (!this.length) { return this; }
		var opts = $.extend(true, {}, $.fn.toooggle.defaults, options);
		this.each(function() {
			var el = $(this);
			el.on('click', function(e) {
				e.preventDefault();
				opts.callback(el, opts);
			});
		});
		return this;
	};
	$.fn.toooggle.defaults = {
		hideTrigger: false,
		callback: function(element, opts) {
			var target = element.data('toooggle');
			$(target).toggleClass('hide');
			if (opts.hideTrigger) {
				element.toggleClass('hide');
			}
		}
	};
	jQuery(document).ready(function($) {
		$('[data-toooggle]').each(function() {
			var el = $(this),
				hideTrigger = el.data('hide-trigger') || false;
			el.toooggle({
				hideTrigger: hideTrigger
			});
		});
	});
})(jQuery);