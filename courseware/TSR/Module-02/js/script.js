

/*

var camera = $('#camera');
	var shown = false;
	camera.animate({
			bottom:-1
			},{duration:1});
			
	$('.arrowDwn').fadeOut('fast');
	var shown = true;
	$('.camTop').click(function(){		
		$('.tooltip').fadeOut('fast');
		alert(2);
		if(shown){
			camera.animate({
				bottom:383 /*It's controll top animation height
			});
			$('.arrowUp').fadeOut('fast');
			$('.arrowDwn').fadeIn('fast');
			
		}
		else {
			alert(3);
			camera.animate({
				bottom:-1
				
			},{easing:'easeOutExpo',duration:'slow'});
			$('.arrowUp').fadeIn('fast');
		$('.arrowDwn').fadeOut('fast');
		
		}
		shown = !shown;
	});

	/*$('.tooltip').mouseenter(function(){
		$(this).fadeOut('fast');
	});
*/
	/*---------------------- 
		Callbacks
	----------------------*/	
	
	function togglePane(){
		var visible = $('#camera .buttonPane:visible:first');
		var hidden = $('#camera .buttonPane:hidden:first');
		
		visible.fadeOut('fast',function(){
			hidden.show();
		});
	}
	
// Backup Code if any changes in upper script:------

//$(document).ready(function(){
//	
//	var camera = $('#camera');
//	var shown = false;
//	camera.animate({
//				bottom:-507
//			},{duration:1});
//	$('.arrowDwn').fadeOut('fast');
//	var shown = true;
//	$('.camTop').click(function(){		
//		/*$('.tooltip').fadeOut('fast');*/
//		
//		if(shown){
//			camera.animate({
//				bottom:-125 /*It's controll top animation height*/
//			});
//			$('.arrowUp').fadeOut('fast');
//			$('.arrowDwn').fadeIn('fast');
//		}
//		else {
//			camera.animate({
//				bottom:-507
//				
//			},{easing:'easeOutExpo',duration:'slow'});
//			$('.arrowUp').fadeIn('fast');
//		$('.arrowDwn').fadeOut('fast');
//		}
//		shown = !shown;
//	});
//
//	/*$('.tooltip').mouseenter(function(){
//		$(this).fadeOut('fast');
//	});
//*/
//	/*---------------------- 
//		Callbacks
//	----------------------*/	
//	
//	function togglePane(){
//		var visible = $('#camera .buttonPane:visible:first');
//		var hidden = $('#camera .buttonPane:hidden:first');
//		
//		visible.fadeOut('fast',function(){
//			hidden.show();
//		});
//	}
//});

/*------------------------------------- 
//		Console Script do not remove 
//	-------------------------------------*/

function getCookie(c_name)
	{
	var i,x,y,ARRcookies=document.cookie.split(";");
	for (i=0;i<ARRcookies.length;i++)
	  {
	  x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
	  y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
	  x=x.replace(/^\s+|\s+$/g,"");
	  if (x==c_name)
		{
		return unescape(y);
		}
	  }
	}

	
	var newWin;
	function fnBugPopup(url)
	{
		var prjDet=getCookie("BDCookie");
		
		var role=(prjDet.substring(prjDet.lastIndexOf("&") + 1, prjDet.length)).split("=")[1];
		var strhead="";

		if (role.toUpperCase() == "CL") {
			strhead = 4;
		} else if (role.toUpperCase() == "ID") {
			strhead = 1;	
		} else if (role.toUpperCase() == "QA") {
			strhead = 3;			
		} else if (role.toUpperCase() == "VS") {
			strhead = 2;			
		} else if ((role.toUpperCase() == "PM") || (role.toUpperCase() == "PL")) {
			strhead = 5;			
		} else if (role.toUpperCase() == "DEV") {
			strhead = 4;
		} 
		
		var movieURL = document.location.toString();	
		var pageId = movieURL.substring(movieURL.lastIndexOf("/") + 1, movieURL.lastIndexOf("."));
	
		var url = "https://dw.coecipl.com/BugTracker1/newissuelist.asp?strHeading="+strhead+"&page="+pageId+"&"+prjDet;
		closePopup();
		newWin=window.open(url,"Review_Panel","_blank,scrollbars=yes, width=650, height=500,status=no, toolbar=no, menubar=no, location=no");
	}
	
	function closePopup()
	{
		if(newWin){
			newWin.close();
		}
	}
	
	
	
