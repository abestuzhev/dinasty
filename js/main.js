$(document).ready(function(){




	/*  Hamburger Menu & Icon  */
	$('.hamburger').on('click', function(e){
		
		e.preventDefault();
		$(this).toggleClass('opned');
		$('header nav').toggleClass('active');
		
	});




	/*  Advanced search form & Icon  */
	$('#advanced_search_btn').on("click", function(e){
		e.preventDefault();

		var ads_box =$('.advanced_search');
		
		if(!ads_box.hasClass('advanced_displayed')){

			$(this).addClass('active');
			ads_box.stop().fadeIn(200).addClass('advanced_displayed');

		}else{

			$(this).removeClass('active');
			ads_box.stop().fadeOut(200).removeClass('advanced_displayed');

		}

	});

    /*простые табы*/
    $('.tabs-menu a').on('click', function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(this).parents('.tabs-menu').siblings('.tab').find(".tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();
    });


    $('.fotorama').fotorama({
        width: '100%',
        // maxwidth: '100%',
        ratio: 16/9,
        loop: true,
        thumbwidth: 88,
        allowfullscreen: true,
        nav: 'thumbs',
        fit:'cover'
    });


    $(".header-link[href*=#]").on("click", function(e){
        var anchor = $(this);
        $('html, body').animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 777);
        e.preventDefault();
        return false;
    });




});