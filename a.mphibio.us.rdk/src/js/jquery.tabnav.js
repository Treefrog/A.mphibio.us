/*
 * Accessible TAB navigation
 */
;(function($){
	var isWindowsPhone = /(Windows Phone OS) ([0-9.]*).*/.exec(navigator.userAgent) || /MSIE 10.*Touch/.test(navigator.userAgent);
	var isTouchDevice = ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch;

	$.fn.tabNav = function(opt) {
		var options = $.extend({
			hoverClass: 'hover',
			items: 'li',
			opener: '>a',
			delay: 10
		},opt);

		if(isWindowsPhone || isTouchDevice) {
			return this;
		}

		return this.each(function() {
			var nav = $(this), items = nav.find(options.items);

			items.each(function(index, navItem) {
				var item = $(this), navActive, touchNavActive;
				var link = item.find(options.opener), timer;

				link.bind('focus', function() {
					navActive = nav.hasClass('js-nav-active');
					touchNavActive = window.TouchNav && TouchNav.isActiveOn(navItem);
					if(!navActive || touchNavActive) {
						initSimpleNav();
					}
					item.trigger(navActive && touchNavActive ? 'itemhover' : 'mouseenter');
				}).bind('blur', function() {
					item.trigger(navActive && touchNavActive ? 'itemleave' : 'mouseleave');
				});

				var initSimpleNav = function() {
					if(!initSimpleNav.done) {
						initSimpleNav.done = true;
						item.hover(function() {
							clearTimeout(timer);
							timer = setTimeout(function() {
								item.addClass(options.hoverClass);
							}, options.delay);
						}, function() {
							clearTimeout(timer);
							timer = setTimeout(function() {
								item.removeClass(options.hoverClass);
							}, options.delay);
						});
					}
				};
			});
		});
	};
}(jQuery));