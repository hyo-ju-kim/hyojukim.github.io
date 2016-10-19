
$(function(){
		
			$(".mainnav").click(function(){
				event.preventDefault();
				
				var scroll = $($(this).attr("href")).offset().top - 0;
				 $("html, body").animate({scrollTop:scroll},1000);
				 //console.log($(this).attr("href"));
				 //console.log(  $($(this).attr("href")).offset().top );
				 
				 $(".mainnav").removeClass("selected");
				 $(this).addClass("selected");
					
				});//main nav function
				
			$(".returntotop").click(function(){
					event.preventDefault();
					$("html, body").animate({scrollTop:0},1000);
						
				$(".mainnav").removeClass("selected");
				$(".mainnav").eq(0).addClass("selected");
					});//end of return to top
				
		});//document ready function

			(function($) {          
			    $(document).ready(function(){ 
			    	$('#ul').hide();
			        $(window).scroll(function(){                          
			            if ($(this).scrollTop() > 300) {
			                $('#ul').fadeIn(500);			         
			            }
			            else{
			                $('#ul').fadeOut(500);			          
			            }
			        });
			    });
			})(jQuery);
			
