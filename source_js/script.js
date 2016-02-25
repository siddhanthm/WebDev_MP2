// Write any custom javascript functions here
$(document).ready(function(){
	$(window).on("scroll", function(){
		if($(window).scrollTop() > $(".front-page").outerHeight()){
			$("nav").addClass("visible");

		}else{
			$("nav").removeClass("visible");
		}
	});

	$(".fa-angle-double-up").on("click", function(e){
		e.preventDefault();
		$('html, body').animate({scrollTop:0}, "slow");
	});

	$(".front-page a").on("click", function(e){
		e.preventDefault();
		$('html, body').animate({scrollTop: $(".front-page").outerHeight() + $("nav").outerHeight() }, "slow");
	});
});