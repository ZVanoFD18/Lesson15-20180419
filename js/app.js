// use strikt
$(document).ready(function() {
	$(".aboutus__galery").owlCarousel({
		items: 4,
		loop: true,
		margin: 10,
		nav: true,
		// dots: true,
		rewind: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1000: {
				items: 4
			}
		}
	});
	$(".partners__slider").owlCarousel({
		items: 1,
		loop: true,
		nav: false,
		//autoplay: true,
		//autoplayTimeout: 1000,
		dots: true
			// , dotsData: true
	});
	$(".button-nav").on("click", function() {
		var target = $(this).data("target");
		$(target).toggleClass("nav__list--open");
	})
});
