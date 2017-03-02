
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
			
    $(document).ready(function(){
        //main-character
        $(".coco-layon").hide();
        $(".coco-layback").click(function(){
            $(".coco-layback").hide();
            $(".coco-layon").show();
        $(".coco-layon").click(function(){
            $(".coco-layon").hide();
            $(".coco-layback").show();
        });
        });
        //text-box
        $(".text-box").hide();
        $(".text-btn").click(function(){
            $(".text-box").toggle();
        });
       
        $(".textbox2").hide();
        $(".text-btn2").click(function(){
            $(".textbox2").toggle();
        });

        $(".textbox3").hide();
        $(".text-btn3").click(function(){
            $(".textbox3").toggle();
        });

        $(".pagenav").hide();
        $(".pagenav-icon-container").click(function(){
            $(".pagenav").toggle();
        });

        $(".doorOpen").hide();
        $(".door").click(function(){
            $(".doorOpen").show();
            $(".doorOpen").click(function(){
            	$(".doorOpen").hide();
            });

        });

        $(".nkflag").click(function(){
        	$(".nkflag").animate({transform: "scale(2)"}, 5000, 'linear');
        });

        $(".nkflag").click(function(){
        	$(".info1").css('visibility','visible').fadeIn(400);
        	$(".info1").click(function(){
        		$(".info1").hide();
        	});
        });
        $(".redtag").click(function(){
            $(".container-open").toggleClass("main-nav-container");
        });
    
    });


    $(document).ready(function(){
    	$(".notification").css('visibility', 'visible').animate({opacity:1.0}, 2000).delay(3000).fadeOut(800);
    });

    function allowDrop(ev) {
    ev.preventDefault();
    }

    function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    }   

    function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

// (function(){
//     var first=true;
//     $('.notification').click(function(){
//         if (first){
//             first=false;
// 			$(".notification").css('visibility', 'visible').animate({opacity:1.0}, 2000).delay(3000).fadeOut(800);
//         }
//     });
// })();