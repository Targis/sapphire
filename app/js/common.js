$(function() {

	(function(window){

		// get vars
		var searchEl = $("#input");
		var labelEl = $("#label");

		// register clicks and toggle classes
		labelEl.click(function(){
				if (searchEl.hasClass("focus")) {
					searchEl.removeClass("focus");
					labelEl.removeClass("active");
				} else {
					searchEl.addClass("focus");
					labelEl.addClass("active");
				}
		});

		// register clicks outisde search box, and toggle correct classes
		$(document).click(function(e){
				var clickedID = e.target.id;
				if (clickedID != "search-terms" && clickedID != "search-label") {
						if (searchEl.hasClass("focus")) {
								searchEl.removeClass("focus");
								labelEl.removeClass("active");
						}
				}
		});
	}(window));

});
