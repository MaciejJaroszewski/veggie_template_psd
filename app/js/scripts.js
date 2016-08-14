$(function(){
	$('.button-collapse').sideNav();


	var tile = $('.flow-tile');
	var subTile = $('.sub-tile');

	function setTileHeight(){
		subTile.innerHeight(tile.innerHeight());
		console.log(subTile.innerHeight());
	}
	function unactiveLinks(list, classToRemove){
		$(list).each(function(){
			$(this).removeClass(classToRemove);
		});
	}
	function activeLink(that, activeClass){
		that.addClass(activeClass);
	}
	$(window).resize(function(){
		setTileHeight();
	});
	$(document).ready(function(){
		setTileHeight();
		
		// $('#nav li').click(function(){
		// 	unactiveLinks('#nav li', 'active-nav');
		// 	activeLink($(this), 'active-nav');
		// });
		// $('#mobile-nav li').click(function(){
		// 	unactiveLinks('#mobile-nav li', 'active-nav');
		// 	activeLink($(this), 'active-nav');
		// });
		$('ul.categories li').click(function(){
			unactiveLinks('ul.categories li', 'active');
			activeLink($(this), 'active');
		});

		$('a[href^="#"]').click(function(e) {
            e.preventDefault();
            var hash = $(this).attr('href');
            var goTo = $(hash).offset().top;
            $('html, body').stop().animate({scrollTop: goTo}, 700);
            return false;
        });

        $('#mobile-nav a').click(function(){
        	$('.button-collapse').sideNav('hide');
        });
	});
});