// author: Heng Cheai Wen
// last modified date: 2015-01-27

	// for tracking purpose
	// scorm variables
	var scorm = pipwerks.SCORM;
	var lmsConnected = false;
	var completeStatus;
	var successStatus;
	var visitedPages = [];

	// DOM elements
	var header = $('header');
	var mainContent = $('#main_content');
	var content = $('#content');
	var screenshot = $('#screenshot');
	var footer = $('#footer');
	var preloader = $('.preloader');
	var sideMenu = $('#side_menu');
	var menuList = $('.pageUL li');
	var playPauseBtn = $('#playpause_btn');
	var prevBtn = $('#previous_btn');
	var pgIndicator = $('#page_num');
	var nextBtn = $('#next_btn');
	// variables 
	var sectionNum = 0;
	var sectionPg = 0;
	var currentPg = 0;
	var totalPgs = 0;
	// multi dimensional array to store different sections, sequence will affect the listing 
	//var sections = [['adult1_1', 'adult1_2', 'adult1_3_video1', 'adult1_3_1_links', 'adult1_4', 'adult1_5_video1', 'adult1_5_1_links', 'adult1_5_video2', 'adult1_6_video1', 'adult1_6_1_links','adult1_7_video1','adult1_7_1_links','adult1_8','adult1_8_1_links','quiz']];
	var sections = [['adult3_1', 'adult3_2_video1', 'adult3_2_1_links','adult3_2_video2','adult3_3','quiz']];
	var videoOriginalWidth = 1024; // video original width
	var videoOriginalHeight = 528;// video original height
	var queue = new createjs.LoadQueue();
	queue.installPlugin(createjs.Sound);
	queue.on("complete", filesLoaded, this);
	
	// quiz
	var questionsData;
	var quizQnsNum = 0 ;
	var quizIntro;
	var quizInstructions;
	var quizScore = 0;
	var options;
	
	// survey
	var surveyQnsNum = 1;
	
	// links
	var linksData;
	
	
	$.each(sections, function( index, value ) {
		totalPgs += value.length;
	});
	
	// cheat code for ios7 ipad height
	// detect if current device is iPad running iOS7 firmware, for iOS7 landscape inner height bug
	if (navigator.userAgent.match(/iPad;.*CPU.*OS 7_\d/i)) {
		$('html').addClass('ipad ios7');
	} else if (navigator.userAgent.match(/iPod|iPhone|iPad/i)) {
		$('html').addClass('iOS');	
	}

	// load files
	createjs.Sound.alternateExtensions = ["ogg"];
	queue.loadManifest([
		{id: "questions", src:"data/quiz.json", type: createjs.LoadQueue.JSON},
		{id: "links", src:"data/links.json", type: createjs.LoadQueue.JSON}
		]);
	
	resizeWindow();
	window.addEventListener("resize", resizeWindow);
	window.addEventListener("orientationchange", resizeWindow);
	
	
	// files loaded
	function filesLoaded() {
		 questionsData = queue.getResult("questions").questions;
		 quizID = queue.getResult("questions").quizID;
		 quizResourceID = queue.getResult("questions").resourceID;
		 
		 linksData = queue.getResult("links");
		 
		 // init scorm 
		lmsConnected = scorm.init();
		//console.log(lmsConnected)
		if(lmsConnected){
			initialiseScorm();
		} else {
			var lastLocation = docCookies.getItem('lastLocation');
			 if(lastLocation != undefined) {
				 if (window.confirm("Do you want to resume?")) { 
					sectionPg = parseInt(lastLocation);
					currentPg = sectionPg;
					visitedPages = docCookies.getItem('visitedPages').split("=")[1].split(',');
				 }
			 }		 
		}
		
		for(var i in visitedPages) {			
			$(menuList.get(visitedPages[i])).children('span.incomplete').hide();
			$(menuList.get(visitedPages[i])).children('span.completed').css('display', 'inline-block');
		}
		 
		loadContent();
	 }
	 
	 // ---------------------------------------------- scorm connection --------------------------------------------
	 function initialiseScorm() {
		var i;
		// check courseware completion status
		scorm.set("cmi.exit","suspend");
		completeStatus = scorm.get("cmi.completion_status");
		sucessStatus = scorm.get("cmi.success_status");
		// get last access page
		var lastBookmark = Number(scorm.get("cmi.location"));
		//alert("last bookmark: " + lastBookmark)
		if(lastBookmark != 0) {
			sectionPg = lastBookmark-1;
			sectionPg = currentPg;
			// get all visited pages
			var supendData = scorm.get("cmi.suspend_data");
			visitedPages = supendData.substring(supendData.indexOf('=')+1, supendData.length).split(',');
			for(i = 0; i < visitedPages.length; i++) {
				visitedPages[i] = parseInt(visitedPages[i]);
			}
			scorm.save();
		}
	 }
	 
	// ------------------------------------------------------ buttons functions ------------------------------------------------------	
	$('#playBtn').click(function(e) {
		// hide splash screen
		header.show();
		mainContent.show();
		footer.show();
		content.show();
		content.css('opacity', 0);
		preloader.show();
		loadContent();
		resizeWindow();
    });
	
	$('#sitemap_btn').click(function(e) {
		var video = document.getElementById('videoPlayer');
		$('#resources').hide();
		if(sideMenu.css('display') == "none") {
			$('#title').text("Sitemap");	
			mainContent.hide();
			if(video){ 
				video.pause();
			}
		} else {
			$('#title').text("Module 3: " + $('title').text());	
			mainContent.show();
			if(video){ 
				video.play();
			}
		}
		sideMenu.css('z-index', 15);
        sideMenu.slideToggle('fast');
    });
	
	// activate click for side menu
	menuList.click(function(e) {
		e.stopPropagation();
		sideMenu.slideUp('fast');
		$('#title').text("Module 3: " + $('title').text());	
		clearContent();
		sectionPg = menuList.index($(this));
		currentPg = sectionPg;
		loadContent();		
    });
	
	// collaspible folder
	$('.folder').click(function(e) {
		e.stopPropagation();
		if($(this).hasClass('folder')) {
			$(this).children('ul').toggle();
			$(this).children('span').toggleClass('folder-close');
			$(this).children('span').toggleClass('folder-open');
		}
    });
	
	$('#resources_btn').click(function(e) {
		sideMenu.hide();
		var resourcesPanel = $('#resources');
		var video = document.getElementById('videoPlayer');
		if(resourcesPanel.css('display') == "none") {
			$('#title').text("Resources");	
			mainContent.hide();
			if(video){ 
				video.pause();
			}
		} else {
			$('#title').text("Module 3: " + $('title').text());	
			mainContent.show();
			if(video){ 
				video.play();
			}
		}
		resourcesPanel.css('z-index', 15);
        resourcesPanel.slideToggle('fast');
    });

	
	// prev btn
	prevBtn.click(function(e) {
		sideMenu.slideUp('fast');
		clearContent();
        currentPg--;
		sectionPg--;
		if(sectionPg == -1) {
			sectionNum--;
			sectionPg = sections[sectionNum].length - 1;
		}
		loadContent();
    });
	
	// next btn
	nextBtn.click(function(e) {
		sideMenu.slideUp('fast');
		clearContent();
        currentPg++;
		sectionPg++;
		if(sectionPg == sections[sectionNum].length) {
			sectionNum++;
			sectionPg = 0;
		}
		loadContent();
    });
	
	function updatePagination() {
		// disable prev btn upon reaching 1st page
		nextBtn.removeClass('disabled');
		prevBtn.removeClass('disabled');
		if(currentPg == 0) {
			prevBtn.addClass('disabled');
		} else if(currentPg == totalPgs-1) {
			nextBtn.addClass('disabled');
		}
	}
	
	function highlightCurrentSection() {
		menuList.removeClass('selected');
		$(menuList[currentPg]).addClass('selected');	
	}

	// --------------------------------------------------- end buttons functions -----------------------------------------------------------
	
	// ------------------------------------------------------------- pg num ----------------------------------------------------------
	function updatePgIndicator() {
		pgIndicator.text("Page " + (currentPg+1) + " of " + totalPgs);
		updatePagination();
		highlightCurrentSection();
	}
	
	// --------------------------------------------------------- end pg num --------------------------------------------------------------
	
	 // check page num and load the correct page
	 function loadContent() {
		 mainContent.show();
		 if(visitedPages.indexOf(currentPg) == -1) {
		 	visitedPages.push(currentPg);
			visitedPages.sort(function(a, b){return a-b});
		 }
		 
		 if(lmsConnected) {
			 scorm.set("cmi.suspend_data", 'VisitedPages=' + visitedPages.toString());
			if(visitedPages.length == totalPgs) {
				completeStatus = scorm.set("cmi.completion_status", 'completed');
				completeStatus = scorm.set("cmi.success_status", 'passed');
			}
			scorm.save();
		 } else {
			 docCookies.setItem('lastLocation', currentPg);
			 docCookies.setItem('visitedPages', 'VisitedPages='+visitedPages);
		 }
		 
		$('#resources').hide();
		 sideMenu.hide();
		 
		$(menuList.get(currentPg)).children('span.incomplete').hide();
		$(menuList.get(currentPg)).children('span.completed').css('display', 'inline-block');
        mainContent.css('background-colour', '#fff');
		switch(sections[sectionNum][sectionPg]) {
			case 'quiz':
				mainContent.css('overflow', 'auto');
				loadQuiz();
				break;
			default:
			
				if(sections[sectionNum][sectionPg].search(/links/) == -1) {
                    mainContent.css('overflow', 'hidden');
					// load video					
					loadVideo();
				} else {
                    mainContent.css('overflow', 'auto');
					// load cont'd image
					loadLinks();
				}
				break;	
		}
		
		updatePgIndicator();
	 }
	 
	 function clearContent() {
		 //console.log(sections[sectionNum][sectionPg])
		switch(sections[sectionNum][sectionPg]) {
			case 'quiz':
				clearQuiz();
				break;
			default:
				if(sections[sectionNum][sectionPg].search(/links/) == -1) {
					// clear video
					clearVideo();
				}
				break;	
		}
		preloader.hide();
		content.empty();
	 }
	 
	 // create new video tag and append to content
    function loadVideo() {
		//content.css('opacity', 0);
		//preloader.show();		
		
		// pure js to append video instead of jquery appendto as it has bug of duplicating the video element
		var videoName = sections[sectionNum][sectionPg];
		var video = document.createElement('video');
		video.id = 'videoPlayer';
		video.preload = 'auto';
		video.controls = true;
		video.autoplay = true;
	
		document.getElementById('content').appendChild(video);
		addSourceToVideo(video, 'videos/' + videoName + '.webm', 'video/webm');
		addSourceToVideo(video, 'videos/' + videoName + '.mp4', 'video/mp4');
      	video.addEventListener('canplay', videoPlayable);
		preloader.hide();	
		/*if($('html').hasClass('iphone')) {
			preloader.hide();	
			content.css('opacity', 1);
		}*/

		$('body').scrollTop(0);
		resizeVideo();
    }
	

    function loadLinks() {	
        var pageLinks = linksData[sections[sectionNum][sectionPg]];
		
		if(pageLinks.instructions=="" && pageLinks.header=="")
		{
		$('#content').append('<div class="links-container"><ul class="links-list"></ul></div>');
		}
		else if(pageLinks.header=="")
		{
		$('#content').append('<div class="links-container"><p>' + pageLinks.instructions + '</p><ul class="links-list"></ul></div>');
		}
		
		else{
		
		$('#content').append('<h1 class="links-header">' + pageLinks.header + '</h1><div class="links-container"><p>' + pageLinks.instructions + '</p><ul class="links-list"></ul></div>');

		}
		
        for(var i = 0; i < pageLinks.links.length; i++) {
            $('.links-list').append('<li><a href="' + pageLinks.links[i].URL + '" target="_blank">' + pageLinks.links[i].title + '</a></li>');
        }
        mainContent.css('background-color', '#396E86');
        
		preloader.hide();	
		/*if($('html').hasClass('iphone')) {
			preloader.hide();	
			content.css('opacity', 1);
		}*/

		$('body').scrollTop(0);
		 //resizeVideo();
    }
	
	function clearVideo() {
		var video = document.querySelector('#videoPlayer');
		video.pause();
		video.removeEventListener('canplay', videoPlayable);
	}
	 
	 // add video source
	function addSourceToVideo(element, src, type) {
		var source = document.createElement('source');
	
		source.src = src;
		source.type = type;
	
		element.appendChild(source);
	}
	 
	 // video load ready, able to play
	 function videoPlayable() {
		 video = document.getElementById('videoPlayer');
        if (video.readyState >= 2) {
			preloader.hide()
			content.css('opacity', 1);
        }
	 }
	 
	// ---------------------------------------------------------------- QUIZ ---------------------------------------------------------------
	// quiz generator
	function loadQuiz() {
		// hide player buttons
		content.css('opacity', 1);
		// check if files are loaded
		if(!queue.loaded) {
			content.css('opacity', 0);
			preloader.show();
		} else {
			preloader.hide();
			// change bg colour
			mainContent.css('background-color', 'white');
			userSelection = [];
			quizScore = 0;
			quizQnsNum = 0;
			displayQns();
		}
		
	}
	
	function displayQns() {	
		content.empty();
		$('body').scrollTop(0);
		content.append('<div class="quiz_panel"><div class="qns_header">Question ' + (quizQnsNum+1) + '</div><div class="quiz_instructions">Select the correct answer and click on "Submit" button</div><div class="qns_txt"><div class="inner_qns"></div></div><div class="options"></div><button id="submitBtn" class="quiz_btn">Submit</button></div>');
		$('.inner_qns').append(questionsData[quizQnsNum].qnsTxt);
		for(var i = 0; i < questionsData[quizQnsNum].options.length; i++) {
			var optionTxt = questionsData[quizQnsNum].options[i];
			$('.options').append('<div id="option' + (i+1) +  '" class="option row"><input type="radio" id="optionInput' + (i+1) +'" class="radio" name="option" value="' + (i+1) + '"><label for="optionInput' + (i+1) + '" class="option_txt">' + optionTxt + '</label></div>');
		}
		
		//console.log("ans", questionsData[quizQnsNum].ans)
		columnsEqualHeight();
		
		
		$('input[name="option"]').click(function(e) {
			$('#submitBtn').show();
		});
		
		$('#submitBtn').click(function(e){
			var optionID = $('input:radio:checked').val();
			userSelection.push(optionID);
			$('input[name="option"]').off('click');
			
			content.empty();
			var feedback;
			var feedbackTxt;
			var icon;
			$('body').scrollTop(0);
			if(optionID == questionsData[quizQnsNum].ans) {
				feedback = "correct";
				icon = "fa fa-check-circle fa-5x";
				feedbackTxt = "Correct!";
				quizScore++;
			} else {
				feedback = "incorrect";	
				icon = "fa fa-times-circle fa-5x";
				feedbackTxt = 'Incorrect!<br><br><p>The correct answer is: <br>' + String(questionsData[quizQnsNum].options[parseInt(questionsData[quizQnsNum].ans)-1]) + '</br></p>';

				//feedbackTxt = 'Incorrect!<br><br><p>The correct answer is: <p><b>' + String(questionsData[quizQnsNum].options[parseInt(questionsData[quizQnsNum].ans)-1]) + '</b>.</p></p>';
			}
			
			content.append('<div class="' + feedback + '"><i class="' + icon + '"></i></div><div class="qns_header">Explanation</div><div class="feedback">' + feedbackTxt + '</div><div id="next_qns_btn" class="quiz_btn">Next Question</div><div class="spacer"></div>');
			
			if(quizQnsNum == questionsData.length-1) {
				$('#next_qns_btn').hide();
				$('.feedback').append('<div class="completion">You have completed the activity for this module.</div>')
			}
			
			$('#next_qns_btn').click(function(e) {
				content.empty();
				quizQnsNum++;
				$(this).off('click');
				if(quizQnsNum < questionsData.length) {
					displayQns();
				} else {
					//showResults();	
				}
			});
		});
		
		/*$('.option').click(function(e) {
            var optionID = String($(this).attr('id')).substr(6,1);
			userSelection.push(optionID);
			$('option').off('click');
			content.empty();
			var feedback;
			var feedbackTxt;
			var icon;
			$('body').scrollTop(0);
			if(optionID == questionsData[quizQnsNum].ans) {
				feedback = "correct";
				icon = "fa fa-check-circle fa-5x";
				feedbackTxt = "Correct!";
				quizScore++;
			} else {
				feedback = "incorrect";	
				icon = "fa fa-times-circle fa-5x";
				feedbackTxt = 'Incorrect!<br><br><p>The correct answer is "<b>' + String(questionsData[quizQnsNum].options[parseInt(questionsData[quizQnsNum].ans)-1]).toLowerCase() + '</b>".</p>';
			}
			
			content.append('<div class="' + feedback + '"><i class="' + icon + '"></i></div><div class="qns_header">Explanation</div><div class="feedback">' + feedbackTxt + '</div><div id="next_qns_btn" class="quiz_btn">Next Question</div><div class="spacer"></div>');
			
			if(quizQnsNum == questionsData.length-1) {
				$('#next_qns_btn').hide();
			}
			
			$('#next_qns_btn').click(function(e) {
				content.empty();
				quizQnsNum++;
				$(this).off('click');
				if(quizQnsNum < questionsData.length) {
					displayQns();
				} else {
					//showResults();	
				}
			});
        });	*/
	}
	
	function showResults() {
		content.append('<div class="quiz_panel"><div class="explanation_header">Results</div><div class="qns_txt"><div class="inner_qns">Your Score: ' + Math.round(quizScore/questionsData.length*100) +'% (' + quizScore + '/' + questionsData.length + ')</div></div><div id="retry_btn" class="quiz_btn">Retry Quiz</div></div>');
		
		if(quizScore == questionsData.length) {
			$('#particulars_btn').click(function(e) {
				window.open('user_info.html', 'blank');
			});
		} else {
			$('#particulars_btn').hide();
		}
		
		$('#retry_btn').click(function(e) {
			loadQuiz();
		});
		
		var endTime = timeDateFormat();
		var response = "";
		// compile qns response
		for(var i = 0; i < userSelection.length; i++) {
			var qnsID = String(questionsData[i].qnsID);
			if(i == 0) {
				response += qnsID + "," + Base64.encode(userSelection[i].toString());
			} else {
				response += '<|>' + qnsID + "," + Base64.encode(userSelection[i].toString());
			}
		}

		submitQuiz(quizID, resourceStartTime, endTime, response);
		
		blinkNextBtn();
	}
	
	function columnsEqualHeight() {
		$('.option_num').each(function(index, element) {
            $(element).height($($('.option_txt').get(index)).height());
        });	
	}
	
	
	function recalculateOptionsHeight() {
		var maxHeight = 0;
		if(options != null) {
			options.height('auto')
			options.each(function(index, element) {
				var elementHeight = $(element).height();
				if(elementHeight > maxHeight) {
					maxHeight = elementHeight;
				}
			});
		
			options.height(maxHeight);
		}
	}
	
	function clearQuiz() {
		//quizInstructions.stop();
		$('option').off('click');
		$('#next_qns_btn').off('click');
	}
	
	
	function compileAns() {
		var response = "";
	
		for (var i = 0; i < selectedArr.length; i++) {
			if (i == 0) {
				response += questID.toString() + ',' + Base64.encode(selectedArr[i].toString());
			} else {
				response += '<|>' + questID.toString() + ',' + Base64.encode(selectedArr[i].toString());
			}
	
			questID++;
		}
	
		return response;
	}
	
	
	
	
	// -------------------------------------- recalculate interface element functions ------------------------------------------------------
	function resizeWindow() {
		mainContent.height(window.innerHeight - header.height() - footer.height() - 1);
		switch(sections[sectionNum][sectionPg]) {
			case 'quiz':
				columnsEqualHeight();
				break;
			default:
                if(sections[sectionNum][sectionPg].search(/links/) == -1) {
				    resizeVideo();
                }
				break;
		}
	}
		
	function resizeVideo() {
		var ratio;
		var width, height;
		var vidNewWidth, vidNewHeight;
		var quizHeight;
		width = mainContent.width();
		height = mainContent.height();
		
		if(width > height) {
			// height is smaller than width
			ratio = height/videoOriginalHeight;
			vidNewHeight = height;
			vidNewWidth = Math.round(videoOriginalWidth*ratio);
			
			if(vidNewWidth > width) {
				ratio = width/videoOriginalWidth;
				vidNewWidth = width;
				vidNewHeight = Math.round(videoOriginalHeight*ratio);
			}
			
		} else {
			ratio = width/videoOriginalWidth;
			vidNewWidth = width;
			vidNewHeight = Math.round(videoOriginalHeight*ratio);
			
			if(vidNewWidth > height) {
				ratio = height/videoOriginalHeight;
				vidNewHeight = height;
				vidNewWidth = Math.round(videoOriginalWidth*ratio);
			}
		}
		
		if(document.getElementById('videoPlayer') != null) {
			var video = $('#videoPlayer');
			video.width(vidNewWidth);
			video.height(vidNewHeight);
			
			// align video to vertical middle
			video.css('margin-top', (height-vidNewHeight)/2 + 'px');
		}
	}
	