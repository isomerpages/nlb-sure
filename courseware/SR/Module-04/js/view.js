// JavaScript Document to control the various UI controls
/*
	Checking if local storage is available
*/
if(typeof(Storage)!=="undefined")
{

}else{
		  alert("Your Browser is not HTML 5 compatible.");
}


var isLMSReady;

function initShell(){
	isLMSReady=sco_load();
	setCrsName(courseName);
	var pageToLoad=0;
	if(isLMSReady=="true"){
		var lessonLocLMS=getLessonLocation();
		if(lessonLocLMS==""||lessonLocLMS==null||lessonLocLMS==undefined){
			pageToLoad=0;
		}else{
			pageToLoad=Number(getLessonLocation());
			if(pageToLoad>0){
				var resume=confirm("Do you want to resume?");
				if(!resume){
					pageToLoad=0;
				}
			}
			visitedArray=getVisitedData().split(',');
		}
		
		//console.log(visitedArray);
	}else{
		
		if(localStorage.firstVisit104==undefined){
			localStorage.firstVisit104="visited";
		}else{	
			
			visitedArray=localStorage.visitedArray104.split(',');
			pageToLoad=Number(localStorage.crsLoc104);
			if(pageToLoad>0){
				var resume=confirm("Do you want to resume?");
				if(!resume){
					pageToLoad=0;
				}
			}
		}
	}
	
	loadPage(pageToLoad);
}

function nextPage(){
	pageCounter++;
	loadPage(pageCounter);
}

function prevPage(){
	pageCounter--;
	loadPage(pageCounter);
}

function openGlossary(){
	 openPopUp("glossary/glossary.html","Glossary");
}

function openSummary(){
	 openPopUp("resources/DYS_Summary.pdf","Summary");
}

function openReference(){
	 
	 openPopUp("resources/DYS_References.pdf","References");
}

function openHelp(){
	openPopUp("resources/DYS_Help.pdf","Help");
}

function openTranscript(){
	openPopUp("resources/DYS_Transcript.pdf","Transcript");
}

function openBugConsole(){
	alert("Under Construction");
}

var popUp;
function openPopUp(url,name){
	if(name=""){
		name="Pop up";
	}
	popUp=window.open(url,name,"width=800px, height=600px, scrollbars=yes, menubar=no, location=no, resizable=no");
	popUp.resizeTo(10,10);
	popUp.moveTo(50,50);
	popUp.resizeTo(830,700);
}