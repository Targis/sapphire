$(document).ready(function() {

	(function(window){

		// get vars
		var searchEl = $("#input");
		var labelEl = $("#label");
		// console.log(searchEl);
		// console.log(labelEl);

		// register clicks and toggle classes
		labelEl.click(function(){
			if (searchEl.hasClass('focus')) {
				searchEl.removeClass('focus');
				labelEl.removeClass('active');
			} else {
				searchEl.addClass('focus');
				labelEl.addClass('active');
			}
		});

		// register clicks outisde search box, and toggle correct classes
		// $(document).click(function(e){
		// 	var clickedID = e.target.id;
		// 	console.log(clickedID);
		// 	if (clickedID != 'search-terms' && clickedID != 'search-label') {
		// 		// console.log('hello');
		// 		if (searchEl.hasClass('focus')) {
		// 			searchEl.removeClass('focus');
		// 			labelEl.removeClass('active');
		// 		}
		// 	}
		// });
	}(window));


	// Mobile menu
	$(document).click(function(){
		if( $('.sandwich').hasClass('active') ) {
			$('.sandwich').removeClass('active');
			$('#primary-menu').slideUp();
		}
		
	});

	$(".toggle-menu").click(function(event) {
		event.stopPropagation();
		$(".sandwich").toggleClass("active");
		$("#primary-menu").slideToggle();
	});

	$(window).resize(function() {
		if ($(window).width() >= '993'){
			$('#primary-menu').show();
			$(".sandwich").removeClass("active");

		}
		else {
			$('#primary-menu').hide();
		}
	});

});