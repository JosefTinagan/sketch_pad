
$(document).ready(function(){
	var $squares = $('<div class="squares"></div>');
	var num = 24;	


	$('body').prepend('<div class="container"> </div>');
	$('.container').before('<h1>Sketch Pad</h1>');
	$('.container').before('<button class="btn_clear">Clear</btn>');
	$('.container').before('<button class="btn_trail">Trail Mode</btn>');
	$('.container').before('<button class="btn_random">Random Mode</btn>');
	$('.container').before('<button class="btn_create">Create New Grid</btn>');
	$('.btn_clear').css({'border-radius':'30px'});
	$('.btn_trail').css({'border-radius':'30px','float':'right'});
	$('.btn_create').css({'border-radius':'30px'});
	$('.btn_random').css({'border-radius':'30px','float':'right'});
	$('h1').css({'width':'50%',
				 'margin':'0 auto',
				 'text-align':'center'});
	createGrid(num);

	function createGrid(num){
			$('.squares').remove();
			$('.clr').remove();
		
			var box = $(".container").width() / num - 2 ;

		for(j = 0; j < num ; j++){
			for(i = 0; i < num ; i++){
				$('.container').append( $('<div></div>').addClass("squares").height(box).width(box));
			}
			$('.container').append( $('<div class="clr"></div>'));
			}


	$('.squares').css({	'background-color': 'white',
							'float':'left',
							'margin':'1px'});
	start();

	}
	


	function start(){
		$('.squares').on('mouseenter', function(){
			$(this).css({'background-color':'black'});
		//	$(this).animate({'opacity': '1'});
		});

		$('.squares').on('mouseleave', function(){
			$(this).css({'background-color':'black'});
		//	$(this).animate({'opacity': '0.5'}, 10);
		});
	}


	$('.btn_clear').on('click', function(){
		$('.squares').css({'background-color': 'white'});
		$('.squares').css({'opacity': '1'});
		
	});

	$('.btn_trail').on('click', function(){
		
		if( $(this).hasClass("off") ){
		$(this).css("background-color", "red");
		$('.squares').on('mouseenter', function(){
			$(this).css({'background-color':'black'});
			$(this).animate({'opacity': '1'});
		});

		$('.squares').on('mouseleave', function(){
			$(this).css({'background-color':'black'});
			$(this).animate({'opacity': '0.5'}, 20);
		});
			$(this).removeClass("off");
		
		} else	{
			$(this).css("background-color", "white");
			$(this).addClass("off");

		$('.squares').on('mouseenter', function(){
			$(this).css({'background-color':'black'});
			$(this).animate({'opacity': '1'});
		});

		$('.squares').on('mouseleave', function(){
			$(this).css({'background-color':'black'});
			$(this).animate({'opacity': '1'}, 0);

		});

		}
	
	
	});
	
	$('.btn_create').on('click', function(){
		var num = prompt('How many grids?');
		createGrid(num);
	});


	$('.btn_random').on('click', function(){
		$('.squares').on('mouseenter', function(){
			$(this).css("background-color", "randColor()");
		});

		$('.squares').on('mouseleave', function(){
			$(this).css({'background-color':'randColor()'});
		});
	});

	function randColor(){
		colorOut = "#";
		colArr = ['1','2','3','4','5','6','7','8','9','0','A','B','C','D','E','F']
		for (var i = 0; i < 6; i++){
			colorOut += colArr[Math.floor(Math.random()*15)];
		}
		return colorOut;
	};

});