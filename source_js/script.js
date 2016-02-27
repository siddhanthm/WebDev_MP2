// Write any custom javascript functions here
$(document).ready(function(){


	var boxes = $(".skills_box");
	boxes.each(function(){
		var width = $(this).width();
		$(this).css({"height": width+"px"});
	});
	//hide navbar on front page
	$(window).on("scroll", function(){
		if($(window).scrollTop() > $(".front-page").outerHeight()){
			$("nav").addClass("visible");

		}else{
			$("nav").removeClass("visible");
		}
	});
	//scroll to front-page
	$(".fa-angle-double-up").on("click", function(e){
		e.preventDefault();
		$('html, body').animate({scrollTop:0}, "slow", "swing");
	});

	//scroll to intro
	$(".front-page a").on("click", function(e){
		e.preventDefault();
		$('html, body').animate({scrollTop: $(".front-page").outerHeight() + 1 }, "slow");
	});

	//smooth scrolling
	$("nav").find("a").on("click", function(e){
		e.preventDefault();
		var id = $(this).attr("href");
		console.log(id);
		if(id == "#intro"){
			var adjust = -1;
		}else{
			var adjust = $("nav").outerHeight();
		}

		$('html, body').animate({
			scrollTop:$(id).offset().top - adjust
		}, "slow", "swing");
	});

	//active
	$(window).scroll(function(){
		var sections = $(".heading");
		sections.each(function(){
			var top = $(this).offset().top -  $("nav").outerHeight() ;
			var bottom = top + $(this).outerHeight();
			if($(window).scrollTop() >= top && $(window).scrollTop() <= bottom){
				$("nav").find("a").removeClass("active");
				$("nav").find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
			}
		});

	});



	var $animation_elements = $('.animation-element');
	var $window = $(window);

	$window.on('scroll resize', check_if_in_view);
	$window.trigger('scroll');

	function check_if_in_view() {
  		var window_height = $window.height();
  		var window_top_position = $window.scrollTop();
  		var window_bottom_position = (window_top_position + window_height);

  		$.each($animation_elements, function() {
    		var $element = $(this);
    		var element_height = $element.outerHeight();
    		var element_top_position = $element.offset().top;
    		var element_bottom_position = (element_top_position + element_height);

    	//check to see if this current container is within viewport
    		if ((element_bottom_position >= window_top_position) &&
        		(element_top_position <= window_bottom_position)) {
      				$element.addClass('in-view');
    			} else {
      				$element.removeClass('in-view');
    			}
  		});
	}
});