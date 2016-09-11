
$(document).ready(function(){
	var $squares = $('<div class="squares"></div>');
	var numLength = 10;	




	$('body').prepend('<div class="container"> </div>');
	

	for(j = 0; j < numLength ; j++){
		for(i = 0; i < numLength ; i++){
			$('.container').append( $('<div></div>').addClass("squares").height(50).width(50));
		}
		$('.container').append( $('<div></div>').css({'clear':'both'}) );
	}
	
		$('.squares').css({	'background-color': 'black',
							'float':'left',
							'margin':'1px'});
	
});