/*!
* A.mphibio.us  V1.0.0-a.2
* Copyright 2013, @cliveMoore @Treefrog
* http://a.mphibio.us
* Free to use under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
* 03/21/2013
*
*/

/* ==================================================================
 * amp object is the foundation namespaced A.mphibio.us JS
 * Do not remove or comment out. 
 * ================================================================== */
var amp = {};

/* ==================================================================
 * amp.init is run on DOM ready
 * Do not remove or comment out. 
 * ================================================================== */
amp.init = function() {
	/* ==================================================================
	 * cache: uncomment if you wish to enable and add content caching only. 
	 * ================================================================== */
	// amp.cache();
	
	/* ==================================================================
	 * amp.bindlisteners() is an essential function. Do not remove or comment out. 
	 * ================================================================== */
	amp.bindlisteners();
	
	/* ==================================================================
	 * Discern mobile or desktop and init specific behaviour for each. 
	 * ================================================================== */
	if (!jQuery.browser.mobile) {
		amp.desktoplisteners;
	} else {
		amp.mobilelisteners;
	};

};

amp.cache = function() {
	/* ==================================================================
	 * Add content caching here 
	 * ================================================================== */
	amp.dom = {};
};

amp.bindlisteners = function() {
	/* ==================================================================
	 * Bind Listeners 
	 * These are bound once the scripts, css and DOM are fully loaded
	 * ================================================================== */
	$('table td:first-child').addClass('first');
	$('table tr:nth-child(2n+1)').addClass('odd');
	$('table tr:nth-child(2n)').addClass('even');
	$('table tr:first-child').addClass('first');
	$('table tr:last-child').addClass('last');
	$('table td:first-child').addClass('first');
	$('table td:last-child').addClass('last');
	$('table th:first-child').addClass('first');
	$('table th:last-child').addClass('last');
	$('.ie ul.stats li:last-child').addClass('last');
	
	$.localScroll();
	
	$('.mainnav li').click(function(){
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
	});
	$('.tabs li a').click(function(){
		var content = $(this).attr('href');
		if ($(this).hasClass('active') && content.length) {
		} else {
			$('.tabs li a').removeClass('active');
			$(this).addClass('active');
			$(content).show().addClass('active').siblings().hide().removeClass('active');
		};
	});
	
	$("#slider1").responsiveSlides({
		auto: false,
		pager: false,
		nav: true,
		speed: 500,
		maxwidth: 960,
		namespace: "centered-btns"
	});
	
	$("#slider2").responsiveSlides({
		auto: false,
		pager: true,
		nav: true,
		speed: 500,
		maxwidth: 960,
		namespace: "centered-btns"
	});
	$('.options_select').change(function(){
		$('.options_div').each(function(){
			$(this).css('display','none');
		});
		var target = '#options_' + $('.options_select').val();
		if( $(target).length > 0 ){
			$(target).css('display','block');
		};
	});
	
	$('.openWhat').click(function(){
		var thisOfCourse = $(this).attr("rel");
		if(jQuery('#'+$(this).attr("rel")).hasClass('hide')){
			jQuery('#'+thisOfCourse+'').slideDown('fast');
			jQuery('#'+thisOfCourse+'').removeClass('hide');
		} else {
			jQuery('#'+thisOfCourse+'').slideUp('fast');
			jQuery('#'+thisOfCourse+'').addClass('hide');
		};
	});
	
};

amp.mobilelisteners = function() {
	/* ==================================================================
	 * Mobile browser specific listeners are placed here 
	 * *** NOT *** executed by desktop browsers. See amp.desktoplisteners instead.
	 * ================================================================== */
};

amp.desktoplisteners = function() {
	/* ==================================================================
	 * Desktop browser specific listeners are placed here 
	 * *** NOT *** executed by mobile browsers. See amp.mobilelisteners instead.
	 * ================================================================== */
	$('body').on('click', 'a[href^="tel:"]', function() {
		$(this).attr('href', 
			$(this).attr('href').replace(/^tel:/, 'callto:'));
	});
};

$(document).ready(function() {
	/* ==================================================================
	 * The document.ready is executed once all scripts and CSS are loaded 
	 * and the DOM has been readied.
	 * Generally is used to bind listeners for responsive web
	 * Generally a good thing to add listeners to the object, 
	 * however it is ok to be putting listeners directly in here.
	 * ================================================================== */
	amp.init(); // don't delete this - it is part of the A.mphibio.us startup
}); 
