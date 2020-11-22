$(function() {
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:30,
	    nav:true,
	    dots: false,
	    navText: ['<img src="images/dest/left.svg" alt="">', '<img src="images/dest/right.svg" alt="">'],
	    startPosition: 1,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	});
});
