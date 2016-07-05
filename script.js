$(document).ready(function() {
	$(window).scroll(function() {
		if($(this).scrollTop() == 0) {
			$('#upPage').fadeOut();	
		} else {
			$('#upPage').fadeIn();
		}
	});

	$('#upPage').click(function() {
		$('body,html').animate({scrollTop:0},1000);
	});	
});