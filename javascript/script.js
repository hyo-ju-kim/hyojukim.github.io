
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
        $(".text-p").hide();
        $(".text-btn3").click(function(){
            $(".textbox3").toggle();
            $(".text-p").toggle();
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

        
        var time = new Date().getSeconds();
        var i = time;
        var num = i++;

//When clicking images, description pops up, then the congrats msg appears.
//Flag
        $(".nkflag").click(function(){
        	$(".flagbox").css('visibility','visible').fadeIn(400);
        	$(".infobox-button").click(function(){
                $(".congrats-msg").html(function(){
                   if (num < 30) {
                                return "Good Job!";
                            } else if (num < 60) {
                                return "Excellent!";
                            } else {
                                return "Nice!";
                            }       
                });
        		$(".infobox").css('visibility', 'invisible').fadeOut(300);
                $(".goodjob").css('visibility','visible').fadeIn(1000).delay(1200).fadeOut(500);
                stopPropagation();
        	});
        });
//Tower
        $(".juchetower").click(function(){
            $(".juchetowerbox").css('visibility','visible').fadeIn(400);
            $(".infobox-button").click(function(){
                $(".congrats-msg").html(function(){
                   if (num < 30) {
                                return "Good Job!";
                            } else if (num < 60) {
                                return "Excellent!";
                            } else {
                                return "Nice!";
                            }       
                });
                $(".infobox").css('visibility', 'invisible').fadeOut(300);
                $(".goodjob").css('visibility','visible').fadeIn(1000).delay(1200).fadeOut(500);
                stopPropagation();
            });
        });
//Kim Il Sung Square
        $(".kimsq").click(function(){
            $(".kimsqbox").css('visibility','visible').fadeIn(400);
            $(".infobox-button").click(function(){
                $(".congrats-msg").html(function(){
                   if (num < 30) {
                                return "Good Job!";
                            } else if (num < 60) {
                                return "Excellent!";
                            } else {
                                return "Nice!";
                            }       
                });
                $(".infobox").css('visibility', 'invisible').fadeOut(300);
                $(".goodjob").css('visibility','visible').fadeIn(1000).delay(1200).fadeOut(500);
                stopPropagation();
            });
        });

//Main Nav Red Tag
        $(".redtag").click(function(){
            $(".container-open").toggleClass("main-nav-container");
        });    
    });  
//Notification Msg
    $(document).ready(function(){
    	$(".notification-box").css('visibility', 'visible').animate({opacity:1.0}, 2000).delay(3000).fadeOut(800);
//Card Function        
        $(".popup-container, .cancle-popup, .card-popup-wrap, .card-popup ").hide();
        $(".card").click(function(){
            $(".card-popup-wrap, .card-popup").show();
            }); 
        $(".cancel-btn").click(function(){
            $(".card-popup-wrap, .card-popup").fadeOut(300);
        });
        $(".card-save-btn").click(function(){
            $(".message-popup-saved").css('visibility', 'visible').fadeIn(500);
            $(".card-popup-wrap, .card-popup").fadeOut(300);           
            }); 
        $(".cancel-btn-container").click(function(){
            $(".message-popup-saved").fadeOut(200);
        });
//Brush Function
        $(".brushbox").hide();
        $(".brush").click(function(){
            $(".brush, .cancel-btn").hide();
            $(".card-popup").css('background-color','transparent');
            $( ".big" ).addClass( "big-added" );
            $(".brushbox").fadeIn(500);
            $(".done-btn").click(function(){
                $(".big").removeClass("big-added").hide();
                $(".card-popup").css('background-color','white');
                $(".brush, .cancel-btn").show();
                $(".brushbox").fadeOut(500);
            });
        });
    });
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("fa-caret-down");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//Drag & Drop
     $( function() {
     $( "#box1" ).draggable({ revert: "valid" });
     $( "#box2" ).draggable({ revert: "valid" });
     $( "#box3" ).draggable({ revert: "valid" });
     $( "#box4" ).draggable({ revert: "invalid" });
     $( "#box5" ).draggable({ revert: "invalid" });
     $( "#main-box" ).droppable({
          
          drop: function( event, ui ) {
            $( "#main-box" ).addClass( "ui-state-highlight" ).find( "p" ).html( "Yes, you can!");
        }
      });
     });  

// (function(){
//     var first=true;
//     $('.notification').click(function(){
//         if (first){
//             first=false;
// 			$(".notification").css('visibility', 'visible').animate({opacity:1.0}, 2000).delay(3000).fadeOut(800);
//         }
//     });
// })();

