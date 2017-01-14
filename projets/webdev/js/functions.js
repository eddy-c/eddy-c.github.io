$(window).scroll(function(){

            var wScroll = $(this).scrollTop();
          
          $('#intro').css({
                    'transform' : 'translate(0px, -'+ wScroll /35+'%)'
            });

          $('h1').css({
                    'transform' : 'translate(0px, '+ wScroll /6 +'%)'
            });  



          $('.back-bird').css({
                  'transform' : 'translate(0px, '+ wScroll /4 +'%)'
            });

          $('.fore-bird').css({
                  'transform' : 'translate(0px, -'+ wScroll /40 +'%)'
           });

          if(wScroll > $('.arrow').offset().top - ($(window).height() / 1.1)) {
          $('.arrow').addClass('is-hiding');
          }          

          if(wScroll > $('.translate').offset().top - ($(window).height() / 1.2)) {

          $('.translate').each(function(i){

          setTimeout(function(){
          $('.translate').eq(i).addClass('is-showing');
          }, 700 * (i+1));
          });
          } 
  
          if(wScroll > $('.translate2').offset().top - ($(window).height() / 1.5)) {

          $('.translate2').each(function(i){

          setTimeout(function(){
          $('.translate2').eq(i).addClass('is-showing');
          }, 600 * (i+1));
           });

          }

});


$(document).ready(function() {
	$('.scrollTo').click( function() { // Au clic sur un élément
		var page = $(this).attr('href'); // Page cible
		var speed = 1250; // Durée de l'animation (en ms)
		$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
		return false;
		});
	});
	

$(window).scroll(function() {
    var x = $(this).scrollTop();
    $('#references').css('background-position', '50% ' + parseInt(-x / 2) + 'px' + ', 0% ' + parseInt(-x / 2) + 'px');
});

$(window).scroll(function() {
    var x = $(this).scrollTop();
    $('#contact').css('background-position', '50% ' + parseInt(-x / 2) + 'px' + ', 0% ' + parseInt(-x / 2) + 'px');
});

