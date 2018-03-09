jQuery(document).ready(function(){
   
   // code for move down arrow to section-2  of landing page
   var Menutop = jQuery('#work_spotlight').offset().top;  
     jQuery("#move_down1").click(function(event){
          
           $(".main").moveDown();
          
        return false;
        
    });
    
    // code for move down arrow of section-2 to section-3  of landing page 
    jQuery("#move_down2").click(function(){
     var sectionTop = jQuery('#featured_parallax').offset().top + Menutop;   
        $(".main").moveDown();
       return false;
        });

	// code for move down arrow of section-3 to section-4  of landing page 
    jQuery("#move_down3").click(function(){
     var sectionTop = jQuery('#featured_parallax').offset().top + Menutop;   
        $(".main").moveDown();
       return false;
        });
		
	// code for move down arrow of section-4 to section-5  of landing page 
    jQuery("#move_down4").click(function(){
     var sectionTop = jQuery('#featured_parallax').offset().top + Menutop;   
        $(".main").moveDown();
       return false;
        });
		
	// code for move down arrow of section-5 to section-6  of landing page 
    jQuery("#move_down5").click(function(){
     var sectionTop = jQuery('#featured_parallax').offset().top + Menutop;   
        $(".main").moveDown();
       return false;
        });
		
	// code for move down arrow of section-6 to section-7  of landing page 
    jQuery("#move_down6").click(function(){
     var sectionTop = jQuery('#featured_parallax').offset().top + Menutop;   
        $(".main").moveDown();
       return false;
        });
		
	// code for move down arrow of section-7 to section-8  of landing page 
    jQuery("#move_down7").click(function(){
     var sectionTop = jQuery('#featured_parallax').offset().top + Menutop;   
        $(".main").moveDown();
       return false;
        });
		
	// code for move down arrow of section-8 to section-9  of landing page 
    jQuery("#move_down8").click(function(){
     var sectionTop = jQuery('#featured_parallax').offset().top + Menutop;   
        $(".main").moveDown();
       return false;
        });
		
	// code for move down arrow of section-9 to section-10  of landing page 
    jQuery("#move_down9").click(function(){
     var sectionTop = jQuery('#featured_parallax').offset().top + Menutop;   
        $(".main").moveDown();
       return false;
        });
    
    // code for move up arrow of section-4 to section-3  of landing page 
    jQuery("#move_up3").click(function(){
     var sectionTop = jQuery('#featured_parallax').offset().top + Menutop;   
        $(".main").moveUp();
       return false;
        });

    // code for move up arrow of section-3 to section-2  of landing page 
    jQuery("#move_up2").click(function(){
     var sectionTop = jQuery('#featured_parallax').offset().top + Menutop;   
        $(".main").moveUp();
       return false;
        });

    // code for move up arrow of section-2 to section-1  of landing page 
    jQuery("#move_up1").click(function(){
     var sectionTop = jQuery('#featured_parallax').offset().top + Menutop;   
        $(".main").moveUp();
       return false;
        });

    // code for move to section-4  of landing page 
    jQuery(".move_to4").click(function(){
     var sectionTop = jQuery('#featured_parallax').offset().top + Menutop;   
        $(".main").moverTo(4);
       return false;
        });

    // code for move to section-3  of landing page 
    jQuery(".move_to3").click(function(){
     var sectionTop = jQuery('#featured_parallax').offset().top + Menutop;   
        $(".main").moverTo(3);
       return false;
        });

    // code for move to section-2  of landing page 
    jQuery(".move_to2").click(function(){
     var sectionTop = jQuery('#featured_parallax').offset().top + Menutop;   
        $(".main").moverTo(2);
       return false;
        });

    // code for move to section-1  of landing page 
    jQuery(".move_to1").click(function(){
     var sectionTop = jQuery('#featured_parallax').offset().top + Menutop;   
        $(".main").moverTo(1);
       return false;
        });

     jQuery("#move_down2howitwork").click(function(event){
        $(".main").moveDown();
        return false;   
    });
     // code for move down to Application 
     jQuery("#move_down2app").click(function(){
     var sectionTop = jQuery('#featured_parallax').offset().top + Menutop;   
        $(".main").moveDown();
       return false;
        });

    // code for move down to Benifits
    jQuery("#move_down2benifit").click(function(){
     var sectionTop = jQuery('#featured_parallax').offset().top + Menutop;   
        $(".main").moveDown();
       return false;
        });

    // code for graphics of section1 i.e top section of landing page
     /*jQuery(".listitems").hover(function(){
         var list_index = jQuery(this).index();
         jQuery(this).parent('.services_list').addClass('service'+list_index+'');
     },function(){
         var list_index = jQuery(this).index();
         jQuery(this).parent('.services_list').removeClass('service'+list_index+'');
     });*/
     

      
   
     
   // code for pager i.e one page scroll on right hand side on landing page
      jQuery(".main").onepage_scroll({
                sectionContainer: "section",
                responsiveFallback:768,
                easing: "ease",
                animationTime: 900,
                pagination: true,
                loop: true,
                updateURL: false,
                afterMove: function (index) {
                            if (index == 1)
                            {
                               

                            }else if (index == 2)
                            {
                                
                            }
                            else if (index == 3)
                            {
                                
                            }else
                            {
                               
                            }

                },
               
              }); 
 });
 