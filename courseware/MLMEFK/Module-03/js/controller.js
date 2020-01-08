// JavaScript Document
var pageCounter=0;
var currPageObj={};
var currMod=-1;
var currPage=-1;
var firstVisit="";
var iOS=false;

function loadPage(pn){
	
	 $.blockUI({ css: { 
            border: 'none', 
            padding: '15px', 
            backgroundColor: '#000', 
            '-webkit-border-radius': '10px', 
            '-moz-border-radius': '10px', 
            opacity: .4, 
            color: '#fff' 
        } }); 
		
		
	pageCounter=pn;
	var md=getPageInfo(pn);
	currMod=md[0];
	currPage=md[1];
	currPageObj=getPageObject(currMod,currPage);
	setBreadCrumb(currMod,currPage);
	setPgCtr();
	setNav();
	$('#pageHolder').html('Loading please wait ... ');
	if(currPageObj.pageId!=""){
		 $('#pageHolder').attr('src',"pages/"+currPageObj.pageId);
	}
                   
	  $('.start-menu').addClass('close').removeClass('open');
	  $('#login-trigger').addClass('open').removeClass('close');
	  	
	setVisitedArray(pn);	   
	saveData(pn); 

	
	 
	$('.audio_iconS').show();
	$('.audio_iconPP').hide();
	$('.audio_iconP').hide();
	
	
	//$('.iosTxt').hide();
	if(currPageObj.hasAudio==1){
		$('.audio_iconPP').show();
		$('.audio_iconS').hide();	
		$('.audiotxtD').hide();
		$('.audiotxt').show();
	}
	
	setTimeout("findAudio()",800);	
}

function findAudio(){
	$.unblockUI();
	
	$('#pageHolder').contents().find('audio').each(function(){
			song = $(this).get(0);
			 
				if(song.paused){	
						song.play();  
				}
			 
			song.addEventListener("ended",soundFinished,false);
	})	
}

function setCrsName(txt){
	//document.getElementById('headerText').innerHTML=txt;
}

function setBreadCrumb(m,p){
	//var txt= getModName(m)+" > "+getPageName(m,p);
	var txt="Module: "+ getModName(m);
	document.getElementById('brdcrumb').innerHTML=txt;
}

function setPgCtr(){
	var txt= "Page "+ (currPage+1) +" of "+getTotalPages(currMod);
	document.getElementById('pageCtr').innerHTML=txt;
}

function setNav(){
	$('#backBtnD').hide();
	if(currPage==0){
		$('#backBtnD').show();
		$('#backBtnD').css('display','block');
		$('#backBtn').hide();
		$('#nextBtn').show();		
		$('#nextBtnD').hide();
	}else if(currPageObj.pageType=="last"){
		$('#nextBtn').hide();		
		$('#nextBtnD').show();
		$('#nextBtnD').css('display','block');
		$('#backBtnD').hide();
		$('#backBtn').show();	
		$('#backBtn').css('display','block');
	}else{
		$('#nextBtn').show();
		$('#nextBtn').css('display','block');		
		$('#nextBtnD').hide();
		$('#backBtnD').hide();
		$('#backBtn').show();
		$('#backBtn').css('display','block');	
	}
}