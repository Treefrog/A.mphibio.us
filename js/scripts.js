/*!
* A.mphibio.us  V1.0.0-a.1
* Copyright 2013, @cliveMoore
* http://a.mphibio.us
* Free to use under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
* 03/19/2013
*
*/

$(document).ready(function() {

$('table td:first-child').addClass('first');
$('table tr:nth-child(2n+1)').addClass('odd');
$('table tr:nth-child(2n)').addClass('even');
$('table tr:first-child').addClass('first');
$('table tr:last-child').addClass('last');
$('table td:first-child').addClass('first');
$('table td:last-child').addClass('last');
$('table th:first-child').addClass('first');
$('table th:last-child').addClass('last');

	$.localScroll();
	
	$(".equalize").equalHeights();
	
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
		}
		
	});
	
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

jQuery('.openWhat').click(function(){
	var thisOfCourse = $(this).attr("rel");
	if(jQuery('#'+$(this).attr("rel")).hasClass('hide')){
		jQuery('#'+thisOfCourse+'').slideDown('fast');
		jQuery('#'+thisOfCourse+'').removeClass('hide');
	} else {
		jQuery('#'+thisOfCourse+'').slideUp('fast');
		jQuery('#'+thisOfCourse+'').addClass('hide');
	}
});