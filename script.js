$(document).ready(function() {
	$(window).scroll(function() {
		$('.answingl').animate({"left": "-=20px"}, "slow");
	});

});

	$(window).scroll(function() {
		$('.answingl').animate({"left": "-=20px"}, "slow");
		$('.answingl').animate({"left": "+=20px"}, "slow");

		$('.answinglt').animate({"left": "-=10px"}, "slow");
		$('.answinglt').animate({"left": "+=10px"}, "slow");

		$('.answingr').animate({"right": "-=20px"}, "slow");
		$('.answingr').animate({"right": "+=20px"}, "slow");

		$('.answingrt').animate({"right": "-=10px"}, "slow");
		$('.answingrt').animate({"right": "+=10px"}, "slow");
	});