$(document).ready(function () {
	// Header Scroll
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();

		if (scroll >= 50) {
			$('#header').addClass('fixed');
		} else {
			$('#header').removeClass('fixed');
		}
	});


	$('.wp1').waypoint(function () {
		$('.wp1').addClass('animated fadeInUp');
	}, {
			offset: '75%'
		});
	$('.wp2').waypoint(function () {
		$('.wp2').addClass('animated fadeInUp');
	}, {
			offset: '75%'
		});
	$('.wp3').waypoint(function () {
		$('.wp3').addClass('animated fadeInRight');
	}, {
			offset: '75%'
		});


	// Waypoints
	$('.work').waypoint(function () {
		$('.work').addClass('animated fadeIn');
	}, {
			offset: '75%'
		});
	$('.download').waypoint(function () {
		$('.download .btn').addClass('animated tada');
	}, {
			offset: '75%'
		});

	// Fancybox
	$('.work-box').fancybox();

	// Flexslider
	$('.flexslider').flexslider({
		animation: "fade",
		directionNav: false,
	});

	// Page Scroll
	var sections = $('section')
	nav = $('nav[role="navigation"]');

	$(window).on('scroll', function () {
		var cur_pos = $(this).scrollTop();
		sections.each(function () {
			var top = $(this).offset().top - 476
			bottom = top + $(this).outerHeight();
			if (cur_pos >= top && cur_pos <= bottom) {
				nav.find('a').removeClass('active');
				nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
			}
		});
	});
	nav.find('a').on('click', function () {
		var $el = $(this)
		id = $el.attr('href');
		$('html, body').animate({
			scrollTop: $(id).offset().top - 54
		}, 500);
		return false;
	});

	// Mobile Navigation
	$('.nav-toggle').on('click', function () {
		$(this).toggleClass('close-nav');
		nav.toggleClass('open');
		return false;
	});
	nav.find('a').on('click', function () {
		$('.nav-toggle').toggleClass('close-nav');
		nav.toggleClass('open');
	});
	$("#imgContainer img").css("margin-left", "-1024px");
});

