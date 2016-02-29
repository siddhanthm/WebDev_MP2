// Write any custom javascript functions here
$(document).ready(function(){
    
    //carousal
    $('.fade').slick({
  		dots: true,
  		infinite: true,
  		speed: 500,
  		fade: true,
  		cssEase: 'linear'
	});

    //random front-page picture
    if($(window).width()>640){
	    var number = Math.floor((Math.random()*6) + 1);
	    if(number ==1){
	    	$(".front-page").css({"background-image": "url('../data/pics/home1.jpg')"});
	    }else if(number ==2){
	    	$(".front-page").css({"background-image": "url('../data/pics/home2.jpeg')"});
	    }else if(number == 3){
	    	$(".front-page").css({"background-image": "url('../data/pics/home3.jpg')"});
	    }else if(number ==4){
	    	$(".front-page").css({"background-image": "url('../data/pics/home4.jpg')"});
	    }else if(number == 5){
	    	$(".front-page").css({"background-image": "url('../data/pics/home2.jpeg')"});
	    }else{
	    	$(".front-page").css({"background-image": "url('../data/pics/home6.jpg')"});
	    }
	}else{
		$(".front-page").css({"background-image": "url('../data/pics/home_s.jpg')"});
    }

    //sizing boxes
    $(window).on("resize ready load", function(){
    		var boxes = $(".skills_box");
			boxes.each(function(){
			var width = $(this).width();
			$(this).css({"height": width+"px"});
		});

		var boxes1 = $(".work_box");
			boxes1.each(function(){
			var width = $(this).width();
			$(this).css({"height": width+"px"});
		});
    });

	
	//hide navbar on front page
	$(window).on("scroll", function(){
		if($(window).scrollTop() > $(".front-page").outerHeight()){
			$("nav").addClass("visible");

		}else{
			$("nav").removeClass("visible");
		}

		if($(window).scrollTop() > $(".front-page").outerHeight() + $(window).height()/10){
			$("nav").addClass("top-bar-edit");
		}else{
			$("nav").removeClass("top-bar-edit");
		}
	});
	//scroll to front-page
	$(".fa-angle-double-up").on("click", function(e){
		e.preventDefault();
		$('html, body').animate({scrollTop:0}, 1200, "swing");
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

	//active navbar
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

	//animations
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

	//modals
	$(".goldman").click(function(){
		$('.goldmanwindow').css('opacity', '0').css('top', '70%').css('left', '50%').fadeTo(500, 1);
	});
	$("a.close_goldman").click(function(e){
		e.preventDefault();
        $('.goldmanwindow').fadeOut(250, function(){ $(this).css('top', '-1000px').css('left', '-1000px'); });
	});

	$(".tatacomm").click(function(){
		$('.tatacommwindow').css('opacity', '0').css('top', '70%').css('left', '50%').fadeTo(500, 1);
	});
	$("a.close_tatacomm").click(function(e){
		e.preventDefault();
        $('.tatacommwindow').fadeOut(250, function(){ $(this).css('top', '-1000px').css('left', '-1000px'); });
	});

	$(".ece110").click(function(){
		$('.ece110window').css('opacity', '0').css('top', '70%').css('left', '50%').fadeTo(500, 1);
	});
	$("a.close_ece110").click(function(e){
		e.preventDefault();
        $('.ece110window').fadeOut(250, function(){ $(this).css('top', '-1000px').css('left', '-1000px'); });
	});

	$(".cs173").click(function(){
		$('.cs173window').css('opacity', '0').css('top', '70%').css('left', '50%').fadeTo(500, 1);
	});
	$("a.close_cs173").click(function(e){
		e.preventDefault();
        $('.cs173window').fadeOut(250, function(){ $(this).css('top', '-1000px').css('left', '-1000px'); });
	});
	
});