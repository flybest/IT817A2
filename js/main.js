function checkCookie(){
	return (document.cookie!='undefined') && (getCookie('name')!='');
}

function inputName(e, name){
	if(e && e.keyCode && e.keyCode == 13){
  e.preventDefault();
		newCookie(name)
	}
}

function newCookie(name){
	// var name = document.getElementById('name').value
	if(name!=''){
		setCookie('name',name,1);
		window.location.reload();
	}
};

function deleteCookie(){
	document.cookie = setCookie('name', getCookie('name'), -10);
	window.location.reload();
}

function setCookie(cname,cvalue,exdays)
{
	var d = new Date();
	d.setTime(d.getTime()+(exdays*24*60*60*1000));
	var expires = "expires="+d.toGMTString();
	document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname)
{
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++)
	{
		var c = ca[i].trim();
		if (c.indexOf(name)==0) return c.substring(name.length,c.length);
	}
	return "";
}


(function($) {

  "use strict";

  // var isMobile = {
  // 	Android: function() {
  // 		return navigator.userAgent.match(/Android/i);
  // 	},
  // 		BlackBerry: function() {
  // 		return navigator.userAgent.match(/BlackBerry/i);
  // 	},
  // 		iOS: function() {
  // 		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  // 	},
  // 		Opera: function() {
  // 		return navigator.userAgent.match(/Opera Mini/i);
  // 	},
  // 		Windows: function() {
  // 		return navigator.userAgent.match(/IEMobile/i);
  // 	},
  // 		any: function() {
  // 		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  // 	}
  // };

  var destinations = [
    {name:'China Central Television',location:'Chaoyang District', img:'img/destinations/1.jpg',des:"China Central Television (CCTV, formerly Beijing Television), is the predominant state television broadcaster in the People's Republic of China. CCTV has a network of 50 channels broadcasting different programmes and is accessible to more than one billion viewers. As of present, there are 50 television channels, and the broadcaster provides programming in six different languages. Most of its programmes are a mixture of news, documentary, social education, comedy, entertainment, and drama, the majority of which consists of Chinese soap operas and entertainment."},
    {name:'Summer Palace',location:'Haidian District', img:'img/destinations/2.jpg',des:"The Summer Palace is a vast ensemble of lakes, gardens and palaces in Beijing. It was an imperial garden in Qing Dynasty. Mainly dominated by Longevity Hill and Kunming Lake, it covers an expanse of 2.9 square kilometres (1.1 sq mi), three-quarters of which is water."},
    {name:'National Stadium',location:'Chaoyang District', img:'img/destinations/3.jpg',des:"Beijing National Stadium, officially the National Stadium, also known as the Bird's Nest, is a stadium in Beijing. The stadium (BNS) was jointly designed by architects Jacques Herzog and Pierre de Meuron of Herzog & de Meuron, project architect Stefan Marbach, artist Ai Weiwei, and CADG which was led by chief architect Li Xinggang. The stadium was designed for use throughout the 2008 Summer Olympics and Paralympics and will be used again in the 2022 Winter Olympics and Paralympics. The Bird's Nest sometimes has some extra temporary large screens installed at the stands of the stadium."},
    {name:'Sky Street',location:'Chaoyang District', img:'img/destinations/4.jpg',des:"Sky Street, also known as 'Sky Canopy', is 250 meters long and 30 meters wide. It hangs over the street and costs about 250 million yuan. It is the largest LCD screen in Asia and the third large in the world. 'Sky Canopy' starts to show at 7:00 every night and provides SMS message function. If the SMS message is sent to the designated number, the SMS content can be displayed on this screen."},
    {name:'The Great Wall',location:'Changping District', img:'img/destinations/5.jpg',des:"The Great Wall of China is a series of fortifications made of stone, brick, tamped earth, wood, and other materials, generally built along an east-to-west line across the historical northern borders of China to protect the Chinese states and empires against the raids and invasions of the various nomadic groups of the Eurasian Steppe with an eye to expansion. Several walls were being built as early as the 7th century BC; these, later joined together and made bigger and stronger, are collectively referred to as the Great Wall. Especially famous is the wall built in 220–206 BC by Qin Shi Huang, the first Emperor of China. Little of that wall remains. The Great Wall has been rebuilt, maintained, and enhanced over various dynasties; the majority of the existing wall is from the Ming Dynasty."},
    {name:'Hutong',location:'Xicheng District', img:'img/destinations/6.jpg',des:"Hutong are a type of narrow street or alley commonly associated with northern Chinese cities, especially Beijing. In Beijing, hutongs are alleys formed by lines of siheyuan, traditional courtyard residences. Many neighbourhoods were formed by joining one siheyuan to another to form a hutong, and then joining one hutong to another. The word hutong is also used to refer to such neighbourhoods."},
    {name:'Temple of Heaven',location:'Dongcheng District', img:'img/destinations/7.jpg',des:"The Temple of Heaven is an imperial complex of religious buildings situated in the southeastern part of central Beijing. The complex was visited by the Emperors of the Ming and Qing dynasties for annual ceremonies of prayer to Heaven for good harvest. It has been regarded as a Taoist temple, although Chinese heaven worship, especially by the reigning monarch of the day, predates Taoism."},
    {name:'The Forbidden City',location:'Xicheng District', img:'img/destinations/8.jpg',des:"The Forbidden City is a palace complex in central Beijing, China. The former Chinese imperial palace from the Ming dynasty to the end of the Qing dynasty (the years 1420 to 1912), it now houses the Palace Museum. The Forbidden City served as the home of emperors and their households as well as the ceremonial and political center of Chinese government for almost 500 years."},
    {name:'The Water Cube',location:'Chaoyang District', img:'img/destinations/9.jpg',des:"The Beijing National Aquatics Center, also officially known as the National Aquatics Center, and colloquially known as the Water Cube, is an aquatics center that was built alongside Beijing National Stadium in the Olympic Green for the swimming competitions of the 2008 Summer Olympics. Despite its nickname, the building is not an actual cube, but a cuboid (a rectangular box). Ground was broken on December 24, 2003, and the Center was completed and handed over for use on January 28, 2008. Swimmers at the Water Cube broke 25 world records during the 2008 Olympics."},
  ]

  var createCarouselItems = function(){
    var target = $('.destination-slider');
    if(target.length<=0)
      return;

    destinations.forEach(function(item, index){
      target.append('<div class="item"><div class="destination" data-target="'+ index +'"><div class="img-container ftco-overflow-hidden"><a class="img d-flex justify-content-center align-items-center" style="background-image: url('+ item.img +');"></a></div><div class="text p-3"><h3>'+ item.name +'</h3><span class="listing">'+ item.location +'</span></div></div></div>');
    });

    $('.destination-slider').on('click','.destination',function(){
      var modal=$('#exampleModal');
      var place=destinations[$(this).data('target')];
      modal.find('img.img').attr('src', place.img);
      modal.find('.caption').text(place.name);
      modal.find('.location').text(place.location);
      modal.find('.description').text(place.des);
      modal.modal();
    });
  }
  createCarouselItems();

  var popupImage = function(){
    $('body').on('click','.about-image',function(){
      var modal=$('#exampleModal');
      var bg = $(this).css('background-image');
      bg = bg.replace('url(','').replace(')','').replace(/\"/gi, "");
      modal.find('img.img').attr('src', bg);
      modal.modal();
    });
  }
  popupImage();

  $(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });

  // section height
  var fullHeight = function() {
  	$('.js-fullheight').css('height', $(window).height());
  	$(window).resize(function(){
  		$('.js-fullheight').css('height', $(window).height());
  	});

  };
  fullHeight();

  // loader
  var loader = function() {
  	setTimeout(function() {
  		if($('#ftco-loader').length > 0) {
  			$('#ftco-loader').removeClass('show');
  		}
      $('body').removeClass('ftco-overflow-hidden');
  	}, 1);
  };
  loader();

  // Scrollax
  $.Scrollax();


  var manageCookie = function(){
  	if(checkCookie()){
  		 $('#welcome').html('Welcome to the website, '+ getCookie('name'));
  		 $('#new').attr('style','display:none !important');
  		 $('#current').removeClass('d-none');
  	}

  	$('#go').click(function(){
  		newCookie($('#your-name').val());
  	});

  	$('#your-name').keypress(function(e){
  		inputName(e, $('#your-name').val());
  	});

  	$('#forget').click(function(){
  		deleteCookie();
  	});
  };
  manageCookie();

  var carousel = function() {
    if($('.destination-slider').length>0){
      $('.destination-slider').owlCarousel({
    		autoplay: false,
    		loop: true,
    		items:1,
    		margin: 30,
    		stagePadding: 0,
    		nav: true,
    		dots: true,
    		navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
    		responsive:{
    			0:{
    				items: 1
    			},
    			600:{
    				items: 2
    			},
    			1000:{
    				items: 4
    			}
    		}
    	});
    }
  };
  carousel();

  // scroll
  var scrollWindow = function() {
  	$(window).scroll(function(){
  		var $w = $(this),
  				st = $w.scrollTop(),
  				navbar = $('.ftco_navbar'),
  				sd = $('.js-scroll-wrap');

  		if (st > 150) {
  			if ( !navbar.hasClass('scrolled') ) {
  				navbar.addClass('scrolled');
  			}
  		}
  		if (st < 150) {
  			if ( navbar.hasClass('scrolled') ) {
  				navbar.removeClass('scrolled sleep');
  			}
  		}
  		if ( st > 350 ) {
  			if ( !navbar.hasClass('awake') ) {
  				navbar.addClass('awake');
  			}

  			if(sd.length > 0) {
  				sd.addClass('sleep');
  			}
  		}
  		if ( st < 350 ) {
  			if ( navbar.hasClass('awake') ) {
  				navbar.removeClass('awake');
  				navbar.addClass('sleep');
  			}
  			if(sd.length > 0) {
  				sd.removeClass('sleep');
  			}
  		}
  	});
  };
  scrollWindow();

  var contentWayPoint = function() {
  	var i = 0;
  	$('.ftco-animate').waypoint( function( direction ) {
  		if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
  			i++;
  			$(this.element).addClass('item-animate');
  			setTimeout(function(){

  				$('body .ftco-animate.item-animate').each(function(k){
  					var el = $(this);
  					setTimeout( function () {
  						var effect = el.data('animate-effect');
  						if ( effect === 'fadeIn') {
  							el.addClass('fadeIn ftco-animated');
  						} else if ( effect === 'fadeInLeft') {
  							el.addClass('fadeInLeft ftco-animated');
  						} else if ( effect === 'fadeInRight') {
  							el.addClass('fadeInRight ftco-animated');
  						} else {
  							el.addClass('fadeInUp ftco-animated');
  						}
  						el.removeClass('item-animate');
  					},  k * 50, 'easeInOutExpo' );
  				});
  			}, 100);
  		}
  	} , { offset: '95%' } );
  };
  contentWayPoint();

  // navigation
  var OnePageNav = function() {
  	$(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function(e) {
  	 	e.preventDefault();

  	 	var hash = this.hash,
  	 			navToggler = $('.navbar-toggler');
  	 	$('html, body').animate({
  	    scrollTop: $(hash).offset().top
  	  }, 700, 'easeInOutExpo', function(){
  	    window.location.hash = hash;
  	  });

  	  if ( navToggler.is(':visible') ) {
  	  	navToggler.click();
  	  }
  	});
  	$('body').on('activate.bs.scrollspy', function () {
  	  console.log('nice');
  	})
  };
  OnePageNav();
})(jQuery);
