$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if(wScroll > $('.face').offset().top - ($(window).height() / 1.5)) {

    $('.face figure').each(function(i){

      setTimeout(function(){
        $('.face figure').eq(i).addClass('is-showing');
      }, 150 * (i+1));
    });

  }
  if(wScroll > $('.galerie').offset().top - $(window).height()){

		$('.galerie').css({'background-position':'center '+ (wScroll - $('.galerie').offset().top) +'px'});
  }

});
