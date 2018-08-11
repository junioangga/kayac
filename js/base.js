$( document ).ready(function() {
	$(".nav1").append($(".drop-position1"));
    $(".nav1").hover(
        function() {
            $('.drop-position1').slideToggle('fast');
        }
    );
	$(".nav2").append($(".drop-position2"));
    $(".nav2").hover(
        function() {
            $('.drop-position2').slideToggle('fast');
        }
    );
	$(".nav3").append($(".drop-position3"));
    $(".nav3").hover(
        function() {
            $('.drop-position3').slideToggle('fast');
        }
    );
	$(".nav4").append($(".drop-position4"));
    $(".nav4").hover(
        function() {
            $('.drop-position4').slideToggle('fast');
        }
    );
	$(".nav5").append($(".drop-position5"));
    $(".nav5").hover(
        function() {
            $('.drop-position5').slideToggle('fast');
        }
    );
	$(".nav6").append($(".drop-position6"));
    $(".nav6").hover(
        function() {
            $('.drop-position6').slideToggle('fast');
        }
    );
	$(".nav7").append($(".drop-position7"));
    $(".nav7").hover(
        function() {
            $('.drop-position7').slideToggle('fast');
        }
    );
      var $hamburger = $(".hamburger");
	  $hamburger.on("click", function(e) {
	    $hamburger.toggleClass("is-active");
	    // Do something else, like open/close menu
	  });
	  $('.hamburger').click(function(){
	  	$(".sidebar").toggleClass("leftsidebar");
	  	$("body").toggleClass("overflowhidden");
	  	$(".cover").toggleClass("blocktoggle");
	  });
	  $('.change').click(function(){
	  	$(".change").toggleClass("rotate");
	  	$(".cover2").toggleClass("blocktoggle");
      	$('.cover3').css("display","block");
      	$('.changechannel').css("display","block");
	  	$("body").css("overflow","hidden");
	  });
	  $('.cover3').click(function(){
      	$('.cover3').css("display","none");
	  	$(".change").removeClass("rotate");
	  	$(".cover2").removeClass("blocktoggle");
	  	$("body").css("overflow","auto");
      	$('.changechannel').css("display","none");
	  });
	  $('.cover2').click(function(){
      	$('.cover3').css("display","none");
	  	$(".change").removeClass("rotate");
	  	$(".cover2").removeClass("blocktoggle");
	  	$("body").css("overflow","auto");
      	$('.changechannel').css("display","none");
	  });
});
new Vue({
	el:'#drop',
	data:{
		show :true,
		drops:[
			{
				position: "drop-position1 padding-0",
				elements:[
					{
						head: 'News',
						update: 'Last Update 2016.07.07',
						border:'small'
					}
				]
			},
			{
				position: "drop-position2",
				elements:[
					{
						head: 'Client Work',
						update: '',
						border:'border-dot big',
						right: 'right-border'
					},
					{
						head: 'Social Network Games',
						update: 'Last Update 2016.09.07',
						border:'border-dot small',
						right: 'right-border'
					},
					{
						head: 'Wedding (Pla-cole)',
						update: '',
						border:'border-dot big'
					},
					{
						head: 'VR team',
						update: '',
						border:'border-dot big',
						right: 'right-border'
					},
					{
						head: 'Game Community (Lobi)',
						update: '',
						border:'border-dot big',
						right: 'right-border'
					},
					{
						head: 'Funeral (Kamakura Jitaku Sougisha)',
						update: '',
						border:'border-dot small'
					},
					{
						head: 'Game PR Team',
						update: '',
						border:'border-dot big',
						right: 'right-border'
					},
					{
						head: 'Esports (Well Played)',
						update: '',
						border:'border-dot big',
						right: 'right-border'
					},
					{
						head: '',
						update: '',
						border:'border-dot big'
					},
					{
						head: 'City Promotion',
						update: '',
						border:'border-dot big',
						right: 'right-border'
					},
					{
						head: 'Others',
						update: 'Last Update 2014.10.22',
						border:'border-dot small',
						right: 'right-border'
					},
					{
						head: '',
						update: '',
						border:'border-dot big'
					},
					{
						head: 'Past works',
						update: 'Last Update 2017.07.19',
						border:'border-dot small',
						right: 'right-border'
					},
					{
						head: '',
						update: '',
						border:'border-dot big',
						right: 'right-border'
					},
					{
						head: '',
						update: '',
						border:'border-dot big'
					},
					{
						head: 'Awards',
						update: 'Last Update 2014.09.02',
						border:'small',
						right: 'right-border'
					},
					{
						head: '',
						update: '',
						border:'big',
						right: 'right-border'
					},
					{
						head: '',
						update: '',
						border:'big'
					}
				]
			},
			{
				position: "drop-position3 padding-0",
				elements:[
					{
						head: 'Members',
						update: 'Last Update 2018.07.07'
					}
				]
			},
			{
				position: "drop-position4",
				elements:[
					{
						head: '1. The passion behind “The fun-loving corporation”',
						update: '',
						border:'border-dot small',
						right: 'right-border'
					},
					{
						head: 'It’s not “What you do,” it’s “Who you do it with.”',
						update: '',
						border:'border-dot small'
					},
					{
						head: '2. Our Philosophy "Create more creators"',
						update: '',
						border:'border-dot small',
						right: 'right-border'
					},
					{
						head: 'Dice Pay and Smile Pay',
						update: '',
						border:'border-dot big'
					},
					{
						head: '3. It’s All About Brainstorms',
						update: '',
						border:'border-dot big',
						right: 'right-border'
					},
					{
						head: 'KAYAC and Manga',
						update: '',
						border:'border-dot big'
					},
					{
						head: '',
						update: '',
						border:'border-dot big',
						right: 'right-border'
					},
					{
						head: 'Why in Kamakura?',
						update: '',
						border:'border-dot big'
					},
					{
						head: '',
						update: '',
						border:'big',
						right: 'right-border'
					},
					{
						head: 'Thanks',
						update: '',
						border:'big'
					}
				]
			},
			{
				position: "drop-position5 padding-0",
				elements:[
					{
						head: 'Corporate profile',
						update: '',
						border:'border-dot big'
					},
					{
						head: 'Location',
						update: '',
						border:'border-dot big'
					},
					{
						head: 'Rules, benefits, events',
						update: '',
						border:'big'
					}
				]
			},
			{
				position: "drop-position6 padding-0",
				elements:[
					{
						head: 'Overseas applicants',
						update: '',
						border:'big'
					}
				]
			},
			{
				position: "drop-position7",
				elements:[
					{
						head: 'To Fun-loving Shareholders',
						update: '',
						border:'border-dot big',
						right: 'right-border'
					},
					{
						head: 'Stock information',
						update: '',
						border:'border-dot big'
					},
					{
						head: 'IR movie',
						update: '',
						border:'border-dot big',
						right: 'right-border'
					},
					{
						head: 'IR calendar',
						update: '',
						border:'border-dot big'
					},
					{
						head: 'IR news',
						update: '',
						border:'border-dot big',
						right: 'right-border'
					},
					{
						head: 'Shareholder benefits',
						update: '',
						border:'border-dot big'
					},
					{
						head: 'Financial information',
						update: '',
						border:'border-dot big',
						right: 'right-border'
					},
					{
						head: 'Electronic public notice',
						update: '',
						border:'border-dot big'
					},
					{
						head: 'IR library',
						update: '',
						border:'big',
						right: 'right-border'
					},
					{
						head: 'IR policy',
						update: '',
						border:'big'
					}
				]
			}
		]
	}
})

new Vue({
	el:'#carousel01',
	data:{
		show :true,
		slides:[
			{
				active: 'active',
				image: 'pict_carousel01.jpg',
				alt: 'Bokura no koushien',
				link: 'https://www.kayac.com/en/service/game/1430',
				title: 'Bokura no Koshien! – Pocket',
				detail:'The series boasts over 6 million downloads! A cooperative sports RPG where you become a budding high school baseball player and strive alongside your teammates to participate and eventually win the tournament at Koshien.',
				meta: 'Social Games  |  Sports  |  2014',
				bottomHead: 'Bokura no Koshien! – Pocket',
				bottomMetaStrong: 'Social Games',
				bottomMetaDefault: 'Sports  |  2014'
			},
			{
				image: 'pict_carousel02.jpg',
				alt: 'Kizu Monogatari VR',
				link: 'https://www.kayac.com/en/news/2017/05/playstation_vr',
				title: 'Kizu Monogatari VR',
				detail:'Popular novel Kizu Monogatari becomes PlayStation® VR content! Delivering new video experience combining VR and projection mapping',
				meta: 'Client Work  |  VR  |  2017',
				bottomHead: 'Kizu Monogatari VR',
				bottomMetaStrong: 'Client Work',
				bottomMetaDefault: 'VR  |  2017'
			},
			{
				image: 'pict_carousel03.jpg',
				alt: 'Lobi',
				link: 'https://www.kayac.com/en/service/lobi',
				title: 'Lobi',
				detail:'One of Japan’s largest smartphone gamers’ SNS specializing in smartphone games. It enables users to make new friends through games.',
				meta: 'Game Community  |  Community  |  2010',
				bottomHead: 'Lobi',
				bottomMetaStrong: 'Game Community',
				bottomMetaDefault: 'Community  |  2010'
			},
			{
				image: 'pict_carousel04.jpg',
				alt: 'Sanrio Puroland Promotion',
				link: 'https://www.kayac.com/en/service/client/1431',
				title: 'Sanrio Puroland Promotion',
				detail:'In our promotion of Sanrio Puroland, Chanrio Maker enabling users to create a “Chanrio” avatar looking like themselves on a smartphone or PC became very popular.',
				meta: 'Client Work  |  Web  |  2015',
				bottomHead: 'Sanrio Puroland Promotion',
				bottomMetaStrong: 'Client Work',
				bottomMetaDefault: 'Web  |  2015'
			},
			{
				image: 'pict_carousel05.jpg',
				alt: 'Pla-cole',
				link: 'https://www.kayac.com/en/service/placole',
				title: 'Pla-cole',
				detail:'This service helps provide the ideal wedding by matching couples who wish to hold weddings with wedding planners suitable for their tastes.',
				meta: 'Wedding  |  Community  |  2016',
				bottomHead: 'Pla-cole',
				bottomMetaStrong: 'Wedding',
				bottomMetaDefault: 'Community  |  2016'
			},
			{
				image: 'pict_carousel06.jpg',
				alt: 'DODA Future Interview Project “VR Interview”',
				link: 'https://www.kayac.com/en/service/client/1432',
				title: 'DODA Future Interview Project “VR Interview”',
				detail:'Part of the “Future Interview Project” by DODA, a career support service. Users can have an interview with Ryoma Sakamoto in a virtual space.',
				meta: 'Client Work  |  VR  |  2015',
				bottomHead: 'Pla-cole',
				bottomMetaStrong: 'DODA Future Interview Project “VR Interview”',
				bottomMetaDefault: 'VR  |  2015'
			},
			{
				image: 'pict_carousel07.jpg',
				alt: 'List of Fun Loving Company KAYAC employees',
				link: 'https://www.kayac.com/en/team',
				title: 'List of Fun Loving Company KAYAC employees',
				detail:'KAYAC focuses on who to work with as represented by our keyword - Its not "What to do" its "Who you do it with."',
				meta: 'Client Work  |  VR  |  2015',
				bottomHead: 'List of Fun Loving Company KAYAC employees',
				bottomMetaStrong: '',
				bottomMetaDefault: '2016'
			}
		]
	}
})

new Vue({
	el:'#newsLeft',
	data:{
		show :true,
		newslist:[
			{
				imageShow: true,
				box: 'big-box',
				date: '2017.07.07',
				title: 'KAYAC released Lobi Tournament platform fully delivering functions from calling for participation through running and supporting tournament events!',
				link: 'https://www.kayac.com/en/news/2017/07/lobi_tournament',
				background:'pict_news01.png',
				newslink1:'Lobi',
				newslink2:'In the press',
				newslink3:'Press release',
				newslink4:'eSport',
				showLink1:true,
				showLink2:true,
				showLink3:true,
				color:'font-azure',
				type:'Services',
				pickup: true
			},
			{
				imageShow: true,
				box: 'big-box',
				date: '2017.05.01',
				title: 'PlayStation® VR content delivers new video experience combining VR and projection mapping! Look back on Kizu Monogatari VR with Kiss Shot!',
				link: 'https://www.kayac.com/en/news/2017/05/playstation_vr',
				background:'pict_news02.jpg',
				newslink1:'VR',
				newslink4:'Event',
				showLink1:true,
				showLink2:false,
				showLink3:false,
				color:'font-orange',
				type:'Client Work',
				pickup: false
			},
			{
				imageShow: true,
				box: 'big-box',
				date: '2016.12.13',
				title: 'Godzilla coming to Japan again!? Shin Arima operation starts on Tuesday December 13!',
				link: 'https://www.kayac.com/en/news/2016/12/shin-arima',
				background:'pict_news03.png',
				showLink1:false,
				showLink2:false,
				showLink3:false,
				newslink4:'Client work',
				color:'font-orange',
				type:'Client Work',
				pickup: true
			},
			{
				imageShow: true,
				box: 'big-box',
				date: '2016.08.24',
				title: 'Sony Interactive Entertainment and KAYAC suggest new VR experience, starting production of content for PlayStation®VR!',
				link: 'https://www.kayac.com/en/news/2016/08/playstation_vr',
				background:'pict_news04.jpg',
				showLink1:false,
				showLink2:false,
				showLink3:false,
				newslink4:'VR',
				color:'font-orange',
				type:'Client Work',
				pickup: true
			},
			{
				imageShow: true,
				box: 'big-box',
				date: '2016.07.07',
				title: 'KAYAC website renewed! Five highlights [Video included]',
				link: 'https://www.kayac.com/en/news/2016/07/kayac_renewal',
				background:'pict_news05.png',
				showLink1:true,
				showLink2:true,
				showLink3:false,
				newslink1:'777カヤック★フェスティバル',
				newslink2:'カヤックサイトリニューアル',
				newslink4:'動画',
				color:'font-green',
				type:'Corporate',
				pickup: true
			},
			{
				imageShow: true,
				box: 'big-box',
				date: '2016.05.02',
				title: 'Now a robot arm appears! The second part of the project to expand the zettai ryoiki is the Arm Skirt',
				link: 'https://www.kayac.com/en/news/2016/05/amano_armskirt',
				background:'pict_news06.jpg',
				showLink1:false,
				showLink2:false,
				showLink3:false,
				newslink4:'Hot',
				color:'font-orange',
				type:'Clien Work',
				pickup: false
			},
			{
				imageShow: false,
				box: 'small-box',
				date: '2016.02.29',
				title: 'Chao mung! Vietnamese company joins KAYAC!',
				link: 'https://www.kayac.com/en/news/2016/02/d-hearts_vietnam',
				showLink1:true,
				showLink2:false,
				showLink3:false,
				newslink1:'M&A',
				newslink4:'Vietnam',
				color:'font-green',
				type:'Corporate',
				pickup: false
			},
			{
				imageShow: false,
				box: 'small-box',
				date: '2016.02.12',
				title: 'Gulti joins KAYAC!',
				link: 'https://www.kayac.com/en/news/2016/02/gulti',
				showLink1:true,
				showLink2:false,
				showLink3:false,
				newslink1:'M&A',
				newslink4:'Gulti',
				color:'font-green',
				type:'Corporate',
				pickup: false
			},
			{
				imageShow: true,
				box: 'big-box',
				date: '2015.08.28',
				title: 'KAYAC Inc. Released Its New Game "POCKET FOOTBALLER" Outside of Japan',
				link: 'https://www.kayac.com/en/news/2015/08/pocket_footballer_global',
				background:'pict_news07.png',
				showLink1:false,
				showLink2:false,
				showLink3:false,
				newslink4:'Pocket Footballer',
				color:'font-purple',
				type:'Games',
				pickup: true
			},
			{
				imageShow: true,
				box: 'big-box',
				date: '2015.07.22',
				title: 'Finally completed! Next-generation heavy-duty huge robot “SUPER GUZZILLA” appears in Odaiba!!',
				link: 'https://www.kayac.com/en/news/2015/07/superguzzilla_vr_en',
				background:'pict_news08.png',
				showLink1:false,
				showLink2:false,
				showLink3:false,
				newslink4:'VR',
				color:'font-orange',
				type:'Client Work',
				pickup: false
			},
			{
				imageShow: false,
				box: 'small-box',
				date: '2015.07.22',
				title: 'KAYAC introduces Ego Search Recruitment, hiring people based on search results without need for resume',
				link: 'https://www.kayac.com/en/news/2015/06/egosearch_eng',
				showLink1:false,
				showLink2:false,
				showLink3:false,
				newslink4:'Recruitment Campaigns',
				color:'font-pink',
				type:'Careers',
				pickup: false
			},
			{
				imageShow: false,
				box: 'small-box',
				date: '2015.05.13',
				title: 'KAYAC will release its new title, POCKET FOOTBALLER", worldwide in 2015!"',
				link: 'https://www.kayac.com/en/news/2015/05/pocket_footballer_pre-registration',
				showLink1:false,
				showLink2:false,
				showLink3:false,
				newslink4:'Pocket Footballer',
				color:'font-purple',
				type:'Games',
				pickup: true
			}
		]
	}
})

new Vue({
	el:'#newsRight',
	data:{
		show :true,
		newslist:[
			{
				imageShow: false,
				box: 'small-box',
				date: '2017.06.09',
				title: 'KAYAC agrees to enter business and capital partnership with Well Played, a company that plans, develops, and manages esports',
				link: 'https://www.kayac.com/en/news/2017/06/wellplayed',
				newslink1:'M&A',
				newslink2:'Lobi',
				newslink3:'In The Press',
				newslink4:'eSport',
				showLink1:true,
				showLink2:true,
				showLink3:true,
				color:'font-green',
				type:'Corporate',
				pickup: true
			},
			{
				imageShow: false,
				box: 'small-box',
				date: '2017.03.23',
				title: 'KAYAC submits patent application for new technology regarding artificial neural network! Also establishing KAYAC AI Team for research and development of artificial intelligence!',
				link: 'https://www.kayac.com/en/news/2017/03/ai',
				newslink1:'In The Press',
				newslink2:'AI',
				newslink4:'Press release',
				showLink1:true,
				showLink2:true,
				showLink3:false,
				color:'font-green',
				type:'Corporate',
				pickup: true
			},
			{
				imageShow: false,
				box: 'small-box',
				date: '2017.02.07',
				title: 'Cooperative sports RPG Bokura no Koshien! Pocket in Traditional Chinese to hit market in Taiwan, Hong Kong, Macau',
				link: 'https://www.kayac.com/en/news/2017/02/pocket_taiwan_en',
				newslink1:'プレスリリース',
				newslink2:'In The Press',
				newslink3:'Press release',
				newslink4:'Koshien! Pocket',
				showLink1:true,
				showLink2:true,
				showLink3:true,
				color:'font-azure',
				type:'Service',
				pickup: false
			},
			{
				imageShow: false,
				box: 'small-box',
				date: '2017.01.26',
				title: 'Lobi Cup online event plan that revitalizes the PVP game community now available! Hearthstone Lobi Cup will be held on January 28!',
				link: 'https://www.kayac.com/en/news/2017/01/lobi_tournament_Hearthstone',
				newslink1:'Lobi',
				newslink2:'プレスリリース',
				newslink3:'In The Press',
				newslink4:'Event',
				showLink1:true,
				showLink2:true,
				showLink3:true,
				color:'font-azure',
				type:'Service',
				pickup: false
			},
			{
				imageShow: true,
				box: 'big-box',
				date: '2016.09.14',
				title: '“Really!? Was that project approved!?” “Toppa Creative Award” to be held again this year',
				link: 'https://www.kayac.com/en/news/2016/09/toppa-creative-award',
				background:'pict_news09.jpg',
				newslink1:'プレスリリース',
				newslink2:'In The Press',
				newslink3:'Awards',
				newslink4:'Event',
				showLink1:true,
				showLink2:true,
				showLink3:true,
				color:'font-azure',
				type:'Service',
				pickup: false
			},
			{
				imageShow: false,
				box: 'small-box',
				date: '2016.08.05',
				title: 'KAYAC Subsidiary in Vietnam Starts Accepting Orders for VR Content Material Creation',
				link: 'https://www.kayac.com/en/news/2017/01/lobi_tournament_Hearthstone',
				newslink1:'プレスリリース',
				newslink2:'VR',
				newslink3:'In The Press',
				newslink4:'Vietnam',
				showLink1:true,
				showLink2:true,
				showLink3:true,
				color:'font-azure',
				type:'Service',
				pickup: false
			},
			{
				imageShow: false,
				box: 'small-box',
				date: '2016.07.12',
				title: 'KAYAC to invest into Huber., provider of TOMODACHI GUIDE matching service for visitors to Japan',
				link: 'https://www.kayac.com/en/news/2016/07/huber_investment',
				newslink1:'M&A',
				newslink2:'プレスリリース',
				newslink3:'In The Press',
				newslink4:'Kamakura',
				showLink1:true,
				showLink2:true,
				showLink3:true,
				color:'font-green',
				type:'Corporate',
				pickup: false
			},
			{
				imageShow: false,
				box: 'small-box',
				date: '2016.07.06',
				title: 'Lobi fully launched in Taiwan, Hong Kong, and Macau! First wave is tie-up with White Cat Project, Black Cat Wiz, and Battle Girl High School!',
				link: 'https://www.kayac.com/en/news/2016/07/lobi_taiwan_launch',
				newslink1:'Lobi',
				newslink2:'プレスリリース',
				newslink3:'In The Press',
				newslink4:'Overseas Expansion',
				showLink1:true,
				showLink2:true,
				showLink3:true,
				color:'font-azure',
				type:'Service',
				pickup: false
			},
			{
				imageShow: false,
				box: 'small-box',
				date: '2016.03.16',
				title: 'iichi and one of Asia’s largest designers’ markets, Pinkoi, have formed a capital and operating alliance',
				link: 'https://www.kayac.com/en/news/2016/03/iichi_pinkoi_alliance',
				newslink1:'iichi',
				newslink2:'Overseas Expansion',
				newslink4:'Asset purchase',
				showLink1:true,
				showLink2:true,
				showLink3:false,
				color:'font-azure',
				type:'Service',
				pickup: false
			},
			{
				imageShow: true,
				box: 'big-box',
				date: '2016.03.16',
				title: 'Shinkukan Dolls developed by Gulti has been released! More than 200,000 advance registrations!',
				link: 'https://www.kayac.com/en/news/2016/04/shinkukandolls_android_release',
				background:'pict_news10.png',
				newslink4:'Gulti',
				showLink1:false,
				showLink2:false,
				showLink3:false,
				color:'font-purple',
				type:'Games',
				pickup: false
			},
			{
				imageShow: false,
				box: 'small-box',
				date: '2015.12.15',
				title: 'Chanrio Maker wins Grand Prix! Ego Search wins Silver and iPad diploma receives Bronze! This year’s Yahoo! JAPAN Creative Awards announced',
				link: 'https://www.kayac.com/en/news/2015/12/yahoo_award_2015_en',
				newslink4:'Awards',
				showLink1:false,
				showLink2:false,
				showLink3:false,
				color:'font-magenta',
				type:'Information',
				pickup: false
			},
			{
				imageShow: false,
				box: 'small-box',
				date: '2015.09.01',
				title: 'KAYAC’s Lobi forms business partnership with So-Net Taiwan to rejuvenate smartphone games in Taiwan, Hong Kong, and Macau!',
				link: 'https://www.kayac.com/en/news/2015/09/lobi_taiwan_en',
				newslink4:'Lobi',
				showLink1:false,
				showLink2:false,
				showLink3:false,
				color:'font-azure',
				type:'Service',
				pickup: false
			},
			{
				imageShow: true,
				box: 'big-box',
				date: '2015.08.04',
				title: 'Attracting 4,200 people at one program! JAGMO launches fan club “JAGMO Patronage Program” Also launching “JAGMO WORLD PROJECT” for worldwide performance.',
				link: 'https://www.kayac.com/en/news/2015/08/jagmo_world',
				background:'pict_news11.png',
				newslink4:'JAGMO',
				showLink1:false,
				showLink2:false,
				showLink3:false,
				color:'font-azure',
				type:'Service',
				pickup: false
			},
			{
				imageShow: true,
				box: 'big-box',
				date: '2015.07.15',
				title: 'Chanrio Maker debuts! Become resident in Sanrio Puroland world!',
				link: 'https://www.kayac.com/en/news/2015/07/chanrio',
				background:'pict_news12.jpg',
				newslink1:'Chanrio Maker',
				newslink4:'Hot',
				showLink1:true,
				showLink2:false,
				showLink3:false,
				color:'font-orange',
				type:'Client Work',
				pickup: false
			},
			{
				imageShow: true,
				box: 'big-box',
				date: '2015.05.20',
				title: 'Smartphone and projector change class teaching! Sakawa, KAYAC to release Kocri in July 2015',
				link: 'https://www.kayac.com/en/news/2015/05/kocri_expo_eng',
				background:'pict_news13.png',
				newslink4:'Kocri',
				showLink1:false,
				showLink2:false,
				showLink3:false,
				color:'font-orange',
				type:'Client Work',
				pickup: false
			}
		]
	}
})