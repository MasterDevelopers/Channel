$(function () {
	
	// scrool functionality (secondary nav fixed when mousedown)
	$(document).ready(function(){
		$("#secondar-nav").data("top", $("#secondar-nav").offset().top); // set original position on load
		$(window).scroll(fixDiv);
	});
	function fixDiv() {
		var $div = $("#secondar-nav");
		if ($(window).scrollTop() > $div.data("top")) { 
			$('#secondar-nav').addClass('nav-fix');
		}
		else {
			$('#secondar-nav').removeClass('nav-fix');
		}
	}

//  secondary nav functionality
	$('#secondar-nav > ul > li > a').click(function(){
		var newContents = $(this).attr('href').slice(1);
		
		$('#secondar-nav li').removeClass('active');
		$(this).parent().addClass('active');
		
		$('.slider_content').hide();
		$('#'+newContents).show();
		return false;
	});

// itinerary builder button functionality
	$("#builder").click (function () {
								   
		$(this).hide();
		$(".content-width").addClass('itinerary-content-width');
		$("#itinerary-sidebar").show();
		
		if ($(".next").hasClass('prev-info')) {
			var windowWidth = $(window).width();
			$(".boxes-section-wrap").css({'width':windowWidth - '270'});
		}
		return false;			   
	});
	
	$("#builder-close").click (function () {
		$(this).parent().parent().hide();
		$(".content-width").removeClass('itinerary-content-width');
		$("#builder").show();
		if ($(".next").hasClass('prev-info')) {
			var windowWidth = $(window).width();
			$(".boxes-section-wrap").css({'width':windowWidth - '30'});
		}
		return false;			   
	});


//  slider next and previous functionality
	$(".next").live ("click", function () {
		
		var windowWidth = $(window).width();
		if ($(this).hasClass('prev-info')) {
			$(this).removeClass('prev-info');
			$(this).css({'right':'-28px'});
			$(this).parents(".boxes-section-wrap").css({'width': '850px'}).removeClass('boxer-wrap-add');
			$(this).parent().children(".bax-section-inner").css({'width':'850px', 'overflow':'hidden'});
			
		}
		else {
			$(this).addClass('prev-info');
			$(this).css({'right':'0'});
			$(this).parents(".boxes-section-wrap").css({'width':windowWidth - '30'}).addClass('boxer-wrap-add');
			$(this).parent().children(".bax-section-inner").css({'width':'auto', 'overflow':'visible'});
			
			if ($(".content-width").hasClass('itinerary-content-width')) {
				$(this).parents(".boxes-section-wrap").css({'width':windowWidth - '270'});
			}
		}
		return false;
	});
	
	
	
	
	$(".prev").live ("click", function () {
		
		if ($(this).hasClass('current-active')) {
		}
		else {
			$("a").removeClass('current-active');
			$(this).addClass('current-active');
			$(".next, .prev").stop(true,true).animate({'right':'-28px'},1000 );
			//$(".boxes-section-wrap").css({'width':'850px'}).removeClass('boxer-wrap-add');
			$(".boxes-section-wrap").stop(true,true).animate({'width':'850px'},500 ).removeClass('boxer-wrap-add');
			$(".bax-section-inner").css({'width':'850px', 'overflow':'hidden'})
		}
		return false;
	});
	
	
	
	
	// New Edit

	$('.video-wrapper .btn-collapse').click(function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
			$(this).html('Collapse <em></em>');	
		}
		else{
		$(this).addClass('active')
		$(this).html('Expand <em></em>');
		}
		$(this).prev().slideToggle()
		return false;
	});
	$('.contact-form .btn-collapse').click(function(){
			if($(this).hasClass('active')){
				$(this).removeClass('active')
				$(this).html('Collapse <em></em>');
			}
			else{
				$(this).addClass('active')
				$(this).html('Expand <em></em>');
			}
			
			$(this).parents('.contact-form').find('.contact-form-collapse').stop(true, true).slideToggle()
			return false;
		 });
		$('.panel-leftsidebar .btn-collapse').click(function(){
				$('.panel-leftsidebar').animate({
					width:	0												
				},300)
				$('.panel-content-section').animate({
					'margin-left' :	0
				},300);
				$('.show-sidebar').fadeIn(300)
					$('.container-980').addClass('content-expaneded');

			return false;
		});
		$('.show-sidebar').click(function(){
			
			$('.panel-content-section').animate({
					'margin-left' :	220
				},300 , function(){
					$('.container-980').removeClass('content-expaneded');
					$('.panel-leftsidebar').animate({
						width:	200
					},300)

				});
			$(this).fadeOut();
			return false;
		});
		$('.panel-leftsidebar li a').click(function(){
			$('.content-area').fadeOut(0)
			$(this.hash).fadeIn();
			$('.navigation li').removeClass('active');
			$(this).parent().addClass('active');
			return false;
		});
		$('.tab-nav a').click(function(){
			if($(this).parent().hasClass('active')){
			}
			else{
			$('.tab-content').fadeOut(0)
			$(this.hash).fadeIn();
			$(this).parents('.tab-nav').children('li').removeClass('active');
			$(this).parent().addClass('active');
			}
			return false;
		});
		$('.accordian-section a').click(function(){
				if($(this).parent().hasClass('active')){
					$(this).parent().removeClass('active');
					$(this).parent().children('.accordian-content').stop(true, true).slideUp();
				}
				else{
					$('.accordian-section li').removeClass('active');
					$(this).parent().addClass('active');
					$('.accordian-section .accordian-content').slideUp();
					$(this).parent().children('.accordian-content').stop(true, true).slideDown();
				}
				return false;
			})
		$('.menu-btn, .menu-list > li >a').click(function(){
			$(this).parent().children('ul').slideToggle()
			return false;
		});
		
		
		$(".status").click (function () {
			if($(this).hasClass('active')){
				$(this).removeClass('active');
				$(this).text('Inactive');
			}
			else{
				$(this).addClass('active');
				$(this).text('Active');
			}
			return false;
									  
		});
		
});