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
		amp.desktoplisteners();
	} else {
		amp.mobilelisteners();
	}

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
		
	/* General layout helpers */
	$('table td:first-child').addClass('first');
	$('table tr:nth-child(2n+1)').addClass('odd');
	$('table tr:nth-child(2n)').addClass('even');
	$('table tr:first-child').addClass('first');
	$('table tr:last-child').addClass('last');
	$('table td:first-child').addClass('first');
	$('table td:last-child').addClass('last');
	$('table th:first-child').addClass('first');
	$('table th:last-child').addClass('last');
	$('ul li:last-child').addClass('last');
	
	
	$('nav li').click(function(){
		if ($(this).hasClass('active')) {
		} else {
			$('nav li').removeClass('active');
			$(this).addClass('active');
			/* I May use this later
			$(content).show().addClass('active').siblings().hide().removeClass('active'); */
		}
	});
		
	$('.tabs li a').click(function(){
		var content = $(this).attr('href');
		if ($(this).hasClass('active') && content.length) {
		} else {
			$('.tabs li a').removeClass('active');
			$(this).addClass('active');
			$(content).show().addClass('active').siblings().hide().removeClass('active');
		}
	});
	
	$('.options_select').change(function(){
		$('.options_div').each(function(){
			$(this).css('display','none');
		});
		var target = '#options_' + $('.options_select').val();
		if( $(target).length > 0 ){
			$(target).css('display','block');
		}
	});
	
	$('.openWhat').click(function(){
		var thisOfCourse = $(this).attr("rel");
		if(jQuery('#'+$(this).attr("rel")).hasClass('hide')){
			jQuery('#'+thisOfCourse+'').slideDown('fast');
			jQuery('#'+thisOfCourse+'').removeClass('hide');
		} else {
			jQuery('#'+thisOfCourse+'').slideUp('fast');
			jQuery('#'+thisOfCourse+'').addClass('hide');
		}
	});

};

amp.mobilelisteners = function() {
	/* ==================================================================
		* Mobile browser specific listeners are placed here 
		* *** NOT *** executed by desktop browsers. See amp.desktoplisteners instead.
		* ================================================================== */
	$('body').on('click', 'a[href^="tel:"]', function() {
		$(this).attr('href', 
			$(this).attr('href').replace(/^tel:/, 'callto:'));
	});
};

amp.desktoplisteners = function() {
	/* ==================================================================
		* Desktop browser specific listeners are placed here 
		* *** NOT *** executed by mobile browsers. See amp.mobilelisteners instead.
		* ================================================================== */
		
		
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
	
	/* ==================================================================
		* These are site specific for the a.mphibio.us public site
		* ================================================================== */			
		$.localScroll();
			
		/*
		$('.set').click(function(){
					$('#navbar').removeClass('a').removeClass('b').addClass('f').addClass('t');
				});
		
				$('.reset').click(function(){
					$('#navbar').removeClass('f').removeClass('t').addClass('b').addClass('a');
				});
		*/
	
	/* ==================================================================
		* These are added for the parallax effect
		* 
		* parallax(xPosition, speedFactor, outerHeight) options:
		* xPosition - Horizontal position of the element
		* inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
		* outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
		* ================================================================== */
		var sqoptions = {
			autoPlay: false,
			nextButton: true,
			prevButton: true,
			preloader: true,
			navigationSkipThreshold: 1000,
			fadeFrameWhenSkipped: false
		};
		var sequence = $("#sequence").sequence(sqoptions).data("sequence");
		
		sequence.afterLoaded = function(){
			$(".prev, next").fadeIn(500);
		};

		$('body').parallax("50%", 0.4);
		$('#intro').parallax("50%", 2.6);
		$('#what_is_it').parallax("50%", 0.6);
		$('#how_its_made').parallax("50%", 0.3);
		$('.bg').parallax("40%", 0.4);
		$('.bg2').parallax("40%", 0.8);
		$('.bg3').parallax("40%", 1.2);
		$('.bg4').parallax("40%", 3.2);
		
		
	
	/* ==================================================================
		* This is added for the isotope gallery
		* using css3 transitions only
		* in true progressive enhancement style
		* You don't know, what you don't know
		* ================================================================== */
		
		var $container = $('#container');
	
		$container.isotope(
			{
			itemSelector : '.element',
			getSortData : {
				symbol : function( $elem ) {
				return $elem.attr('data-symbol');
				},
				category : function( $elem ) {
				return $elem.attr('data-category');
				}
			}
		});
		
		
		var $optionSets = $('.option-set'),
		
		$optionLinks = $optionSets.find('a');
		
		$optionLinks.click(function(){
			var $this = $(this);
			// don't proceed if already selected
			if ( $this.hasClass('selected') ) {
			return false;
		}
		var $optionSet = $this.parents('.option-set');
		
			$optionSet.find('.selected').removeClass('selected');
			$optionSet.find('.active').removeClass('active');
			$this.addClass('selected');
			$this.parent().addClass('active');
		
			// make option object dynamically, i.e. { filter: '.my-filter-class' }
			var options = {},
			key = $optionSet.attr('data-option-key'),
			value = $this.attr('data-option-value');
			// parse 'false' as false boolean
			value = value === 'false' ? false : value;
			options[ key ] = value;
			if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
			// changes in layout modes need extra logic
			changeLayoutMode( $this, options );
			} else {
			// otherwise, apply new options
			$container.isotope( options );
		}
		
		return false;
		});	

});
