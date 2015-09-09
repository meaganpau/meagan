jQuery("document").ready(function($){
	var pos = $('.header').offset().top;
	var nav = $('.header');
	
	$(window).scroll(function () {
		if ($(this).scrollTop() > pos) {
			nav.addClass("f-nav");
		} else {
			nav.removeClass("f-nav");
		}
	});

});