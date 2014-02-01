$(document).ready(function(){

	$("#click").click(function(){


		setInterval(function() {
		    var number = 1 + Math.floor(Math.random() * 6);
		    var number2 = 1 + Math.floor(Math.random() * 6);

		    

		    
		    $('.anim').hide();

		    $('.anim1').hide();


		    if(number == 1){

		    	$('.num-gen2, .num-gen3, .num-gen4, .num-gen5, .num-gen6, .animacao').hide();
		    	$('.num-gen1').show();

		    }
		    if(number == 2){

		    	$('.num-gen1, .num-gen3, .num-gen4, .num-gen5, .num-gen6').hide();
		    	$('.num-gen2').show();

		    }
		    if(number == 3){	

		    	$('.num-gen2, .num-gen1, .num-gen4, .num-gen5, .num-gen6').hide();
		    	$('.num-gen3').show();

		    }
		    if(number == 4){	

		    	$('.num-gen2, .num-gen1, .num-gen3, .num-gen5, .num-gen6').hide();
		    	$('.num-gen4').show();

		    }
		    if(number == 5){	

		    	$('.num-gen2, .num-gen1, .num-gen4, .num-gen3, .num-gen6').hide();
		    	$('.num-gen5').show();

		    }
		    if(number == 6){	

		    	$('.num-gen2, .num-gen1, .num-gen4, .num-gen5, .num-gen3').hide();
		    	$('.num-gen6').show();

		    }


		    if(number2 == 1){

		    	$('.gen2, .gen3, .gen4, .gen5, .gen6').hide();
		    	$('.gen1').show();

		    }
		    if(number2 == 2){

		    	$('.gen1, .gen3, .gen4, .gen5, .gen6').hide();
		    	$('.gen2').show();

		    }
		    if(number2 == 3){	

		    	$('.gen2, .gen1, .gen4, .gen5, .gen6').hide();
		    	$('.gen3').show();

		    }
		    if(number2 == 4){	

		    	$('.gen2, .gen1, .gen3, .gen5, .gen6').hide();
		    	$('.gen4').show();

		    }
		    if(number2 == 5){	

		    	$('.gen2, .gen1, .gen4, .gen3, .gen6').hide();
		    	$('.gen5').show();

		    }
		    if(number2 == 6){	

		    	$('.gen2, .gen1, .gen4, .gen5, .gen3').hide();
		    	$('.gen6').show();

		    }
		    

		});

		

	});

});






            
        