
$(document).ready(function(){
	var $squares = $('<div class="squares"></div>');
	var num = 10;	


	$('body').prepend('<div class="container"> </div>');
	$('.container').before('<h1>Sketch Pad</h1>');
	$('.container').after('<button class="btn_clear">Clear</btn>');
	$('.container').after('<button class="btn_trail">Trail Mode</btn>');
	//$('.container').after('<button class="btn_normal">Normal Mode</btn>');
	$('.container').after('<button class="btn_create">Create New Grid</btn>');
	$('.btn_clear').css({'border-radius':'30px'});
	$('.btn_trail').css({'border-radius':'30px','float':'right'});
	$('.btn_create').css({'border-radius':'30px'});
	//$('.btn_normal').css({'border-radius':'30px','float':'right'});
	$('h1').css({'width':'50%',
				 'margin':'0 auto'});
	createGrid(num);

	function createGrid(num){
			$('.squares').remove();
			$('.clr').remove();
		
			var box = num / 2;

		for(j = 0; j < num ; j++){
			for(i = 0; i < num ; i++){
				$('.container').append( $('<div></div>').addClass("squares").height(box).width(box));
			}
			$('.container').append( $('<div class="clr"></div>').css({'clear':'left'}) );
			}


	$('.squares').css({	'background-color': 'black',
							'float':'left',
							'margin':'1px'});
	start();

	}
	


	function start(){
		$('.squares').on('mouseenter', function(){
			$(this).css({'background-color':'blue'});
		//	$(this).animate({'opacity': '1'});
		});

		$('.squares').on('mouseleave', function(){
			$(this).css({'background-color':'blue'});
		//	$(this).animate({'opacity': '0.5'}, 10);
		});
	}


	$('.btn_clear').on('click', function(){
		$('.squares').css({'background-color': 'black'});
		$('.squares').css({'opacity': '1'});
		
	});

	$('.btn_trail').on('click', function(){
		
		if( $(this).hasClass("off") ){
		$(this).css("background-color", "red");
		$('.squares').on('mouseenter', function(){
			$(this).css({'background-color':'blue'});
			$(this).animate({'opacity': '1'});
		});

		$('.squares').on('mouseleave', function(){
			$(this).css({'background-color':'blue'});
			$(this).animate({'opacity': '0.5'}, 20);
		});
			$(this).removeClass("off");
		
		} else	{
			$(this).css("background-color", "white");
			$(this).addClass("off");

		$('.squares').on('mouseenter', function(){
			$(this).css({'background-color':'blue'});
			$(this).animate({'opacity': '1'});
		});

		$('.squares').on('mouseleave', function(){
			$(this).css({'background-color':'blue'});
			$(this).animate({'opacity': '1'}, 0);

		});

		}
	
	
	});
	
	$('.btn_create').on('click', function(){
		var num = prompt('How many grids?');
		createGrid(num);
	});



});