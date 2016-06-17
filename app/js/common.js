$(function() {

	var owl = $(".slider");
	owl.owlCarousel({
		loop:true,
		items:1,
		// autoplay:true,
		autoplayTimeout:4500,
		itemClass: "slide-wrap",
		nav:true,
		navText: ""
	});
	$(".next").click(function(){
		owl.trigger('next.owl.carousel');
	})
	$(".prev").click(function(){
		owl.trigger('prev.owl.carousel');
	});

	$(".toggle-mnu-wrap").click(function() {
		$(this).toggleClass(".toggle-mnu");
		$(".toggle-mnu").toggleClass("on");
		$(".main-mnu").slideToggle();
		return false;
	});

	// $(".toggle-mnu-wrap").click(function() {
	// 	$(this).toggleClass("on");
	// 	$(".main-mnu").slideToggle();
	// 	return false;
	// });

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
