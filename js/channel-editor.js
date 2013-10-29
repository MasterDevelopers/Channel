$(function () {
	
	$('.video-wrapper .btn-collapse').click(function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
			$(this).html('Hide <em></em>');	
		}
		else{
		$(this).addClass('active')
		$(this).html('Show <em></em>');
		}
		$(this).prev().slideToggle()
		return false;
	});
	$('.contact-form .btn-collapse').click(function(){
			if($(this).hasClass('active')){
				$(this).removeClass('active')
				$(this).html('Hide <em></em>');
			}
			else{
				$(this).addClass('active')
				$(this).html('Show <em></em>');
			}
			
			$(this).parents('.contact-form').find('.contact-form-collapse').stop(true, true).slideToggle()
			return false;
		 });
		$('.show-sidebar').click(function(){
			if ($('.container-980').hasClass('content-expaneded')){
				$('.container-980').removeClass('content-expaneded');
				$('.panel-content-section').animate({
						'margin-left' :	220
					},300);
					$('.panel-leftsidebar').animate({
							width:	215												
						},300)
				}
				else{
					$('.container-980').addClass('content-expaneded');
					
					$('.panel-content-section').animate({
						'margin-left' :	20
					},300);
					$('.panel-leftsidebar').animate({
							width:	0												
					},300)
				}
			return false;
		});
		/*$('.show-sidebar').click(function(){
			
			$('.panel-content-section').animate({
					'margin-left' :	220
				},300 , function(){
					$('.container-980').removeClass('content-expaneded');
					$('.panel-leftsidebar').animate({
						width:	200
					},300)

				});
			return false;
		});
		
		*/
		
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
			$(this).parent().toggleClass('active');
			$(this).parent().children('ul').slideToggle();
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
		
		
		$(".navigation > li > a").click (function () {
			$(".sub-nav").hide();
			if ($(this).parent().hasClass('active')) {
				$(this).next('.sub-nav').show();
			}
			else{
				$(this).next('.sub-nav').hide();
			}
		});
		
});