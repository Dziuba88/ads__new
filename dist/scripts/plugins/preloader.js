$(document).ready(function() {
	setTimeout(function(){
		$('body').removeClass('loading');
    $('.inxy-preloader').fadeOut('1000');
    $('.inxy-page').fadeIn('1000');
	}, 500);
});
