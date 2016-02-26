// Write any custom javascript functions here
$(document).ready(function(){
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
		$('html, body').animate({scrollTop: $(".front-page").outerHeight() + $("nav").outerHeight() }, "slow");
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
});