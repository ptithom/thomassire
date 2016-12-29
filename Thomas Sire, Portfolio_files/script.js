




/*
     FILE ARCHIVED ON 0:01:40 nov. 5, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 0:02:52 nov. 25, 2016.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/

		
					
		var flag_project =0;
		var flag_cv =0;
		var flag_xp =0;
		var flag_contact =0;


		if ($('body').width() > 1100) {
			$('#slide3').parallax("center", 2600, 0.1, true);
			$('#slide1').parallax("center", 600, 0.7, true);
		}
		
	// Gestion du clim sur le prise de contact
		function click_contact_view(){
			
			//si le block est afficher
			if($("#section_contact").css("display") == "none"){
				$("#section_contact").animate({right:"0%"},500);
				$("#section_contact").show();
				$("#underlay_contact").show();
				$('body').css({
				    'overflow': 'hidden',
				});
				
			//sinon
			}else{
				close_contact_view();
			}

		}
		
	// Fermer le modal de contact
		function close_contact_view(){
				$("#section_contact").animate({right:"-50%"},500);
				$("#section_contact").hide();
				$("#underlay_contact").hide();
				$('body').css({
				    'overflow': 'auto',
				})
		}
		
	// Affichage du block de description de projet
		function click_more_view(id){
			$.get('includes/ajax_description.php?id='+id, function(data) {
			  $("#more_view-show span").html(data);
			});
			

				$("#more_view-hide").animate({left:"0%"},"160%").attr('id', 'more_view-show');
				$("#more_view-show").show();
				$("#underlay").show();
				$('body').css({
				    'overflow': 'hidden',
				})
		}
		
	// Fermer le block de description de projet
		function close_more_view(){
				$("#more_view-show").animate({left:"160%"},"0%").attr('id', 'more_view-hide');
				$("#more_view-hide").hide();
				$("#underlay").hide();
				$('body').css({
				    'overflow': 'auto',
				})
		}
		
	//MENU
		$("#bloc_menu").css( "background-color", "transparent" );
		$("#menu_fleche_next").css( "color", "black" ); 
		$("#id-project").click(function() { $('body,html').animate({ scrollTop: "560px" },1000);$("#more_view-show").hide();$("#underlay").hide();$('body').css({'overflow': 'auto',})});
		$("#id-cv").click(function() { $('body,html').animate({ scrollTop: "2400px" },1000);$("#more_view-show").hide();$("#underlay").hide();$('body').css({'overflow': 'auto',})});
		$("#id-xp").click(function() { $('body,html').animate({ scrollTop: "3200px" },1000);$("#more_view-show").hide();$("#underlay").hide();$('body').css({'overflow': 'auto',})});
		$("#id-contact").click(function() { $('body,html').animate({ scrollTop: "3500px" },1000);$("#more_view-show").hide();$("#underlay").hide();$('body').css({'overflow': 'auto',})});
		$('#menu_fleche_next').click(function() { 
			if($(window).scrollTop() < 30){
				$('body,html').animate({ scrollTop: "600px" },1000);
			}else{
				$('body,html').animate({ scrollTop: "1px" },1000);
			}
			$('#more_view-show').css("display","none");
			$("#underlay").hide();
			$('body').css({'overflow': 'auto',})
		});
		
		
	// Event scroll
		$(window).scroll(function(eventObj)
    	{
    		//console.log($('body').width());
    	
    		var backgroundPos = $('#menu_fleche_next').css('backgroundPosition').split(" ");

			var xPos = backgroundPos[0],
			    yPos = backgroundPos[1];


    		//changement icône du millieux du menu
       		if($(window).scrollTop() > 30){
				if(backgroundPos[1] == "20px" ){
					//alert($('#bloc_menu').css('backgroundPosition'));
					$('#bloc_menu').animate({backgroundPosition : '0 0px'},500);
					$('#menu_fleche_next').animate({backgroundPosition : '8 -58px'},500);
					
				}
			}
			if($(window).scrollTop() <= 30){
				if(backgroundPos[1] == "-58px" ){
					$('#bloc_menu').animate({backgroundPosition : '0 -60px'},500);
					$('#menu_fleche_next').animate({backgroundPosition : '8 20px'},500);
				}
			}
			
			// gestion du bakgrount des element du menu pour ce situé dans le scroll du site
			$("#id-project").css('background-color','rgba(255,255,255,0.0)');
			$("#id-cv").css('background-color','rgba(255,255,255,0.0)');
			$("#id-xp").css('background-color','rgba(255,255,255,0.0)');
			$("#id-contact").css('background-color','rgba(255,255,255,0.0)');
			


			if($(window).scrollTop() < 560 ){
			    flag_project =0;
				flag_cv =0;
				flag_xp =0;
				flag_contact =0;
			}
			if($(window).scrollTop() >= 560 && $(window).scrollTop() < 2400){
				$("#id-project").css('background-color','rgba(255,255,255,0.5)');
			    flag_project =1;
				flag_cv =0;
				flag_xp =0;
				flag_contact =0;
			}
			if($(window).scrollTop() >= 2400 && $(window).scrollTop() < 3200){
				$("#id-cv").css('background-color','rgba(255,255,255,0.5)');
				flag_project =0;
				flag_cv =1;
				flag_xp =0;
				flag_contact =0;
			}
			if($(window).scrollTop() >= 3200 && $(window).scrollTop() < 3500){
				$("#id-xp").css('background-color','rgba(255,255,255,0.5)');
				flag_project =0;
				flag_cv =0;
				flag_xp =1;
				flag_contact =0;
			}
			if($(window).scrollTop() >= 3500){
				$("#id-contact").css('background-color','rgba(255,255,255,0.5)');
				flag_project =0;
				flag_cv =0;
				flag_xp =0;
				flag_contact =1;
			}
			
   		});
   		
   		
   	// Hover sur le menu
		$("#id-project").hover(
		  function () {
		    $("#id-project").css('background-color','rgba(255,255,255,0.5)');
		  },
		  function () {
		  	// alert(flag_project);
		 	 if(flag_project == 0){
		    	$("#id-project").css('background-color','rgba(255,255,255,0.0)');
		     }
		  }

		);
		$("#id-cv").hover(
		  function () {
		    $("#id-cv").css('background-color','rgba(255,255,255,0.5)');
		  },
		  function () {
		 	 if(flag_cv == 0){
		    	$("#id-cv").css('background-color','rgba(255,255,255,0.0)');
		     }
		  }

		);
		$("#id-xp").hover(
		  function () {
		    $("#id-xp").css('background-color','rgba(255,255,255,0.5)');
		  },
		  function () {
			  if(flag_xp == 0){
		    	$("#id-xp").css('background-color','rgba(255,255,255,0.0)');
		      }
		  }

		);
		$("#id-contact").hover(
		  function () {
		    $("#id-contact").css('background-color','rgba(255,255,255,0.5)');
		  },
		  function () {
			  if(flag_contact == 0){
		    	$("#id-contact").css('background-color','rgba(255,255,255,0.0)');
		      }
		  }

		);


