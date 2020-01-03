// JavaScript Document
var pageCounter=0;
var currPageObj={};
var currMod=-1;
var currPage=-1;
var firstVisit="";
	
function createMenu()
{
	getMenuHtml($('#browser'));
			$("#browser").treeview({collapsed: true});
		
	$('.triggerControl').on("click", "", function() {
		loadPage($(this).attr('pageid'));
	});
	
	
	/*$('.triggerControl').live('click',function(){
				loadPage($(this).attr('pageid')); 
					  //$(this).addClass('pageVisited');		
				});*/
	$('#mod0').on('click',markPageVisited())
}
	
setTimeout(createMenu,1500);

function loadPage(pn){
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
				 $('.arrowDwn').trigger('click');
			}
                   
					// $('.triggerControl').trigger('click');
					
	setVisitedArray(pn);
	markPageVisited();	   
	saveData(pn);  
	//console.log("stored "+localStorage.visitedArray);
}

function setCrsName(txt){
	document.getElementById('headerText').innerHTML=txt;
}

function setBreadCrumb(m,p){
	var txt= getModName(m)+" > "+getPageName(m,p);
	//var txt= getModName(m);
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
		$('#backBtn').hide();
		$('#nextBtn').show();		
		$('#nextBtnD').hide();
	}else if(currPageObj.pageType=="last"){
		$('#nextBtn').hide();		
		$('#nextBtnD').show();
		$('#backBtnD').hide();
		$('#backBtn').show();	
	}else{
		$('#nextBtn').show();		
		$('#nextBtnD').hide();
		$('#backBtnD').hide();
		$('#backBtn').show();
	}
}