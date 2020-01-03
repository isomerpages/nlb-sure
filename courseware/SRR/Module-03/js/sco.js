// SCO.js// 
/* 
	Mukesh Mehra 
	Modified on Jan, 7 2013.
	These functions will be called from Launcher to set the values in LMS.
	These functions are dependents on the SCO API Wrapper functions in SCOAPIWrapper.js
	
*/


// global vars 
var CourseTime = 0;
var StartTime = 0;
var startDate=0;
var courseStatus="incomplete";

/*******************************************************************************/
// sco load action - function called as soon as sco loads.
var result1="";
function sco_load(){
	result1 = doLMSInitialize();
	if (result1 == "false")
	{
			return "false";
	}else
	{
			startTimer();
			return "true";
	}
	
}


// lmsInit - function called  to check if scorm is initialised

function lmsInit(){
   
   if (!LMSIsInitialized())
   {
	   return "false";
   }else{
      return "true";
   }
}

/*******************************************************************************/
// setPageData - function called on each content page swf load - it sets the current page and saves the visited frame data in LMS
function setPageData(screenNum,suspendedData) {
    if (!LMSIsInitialized()) {
        sco_restart();    
    }
	
	
	console.log(screenNum + " <toLMS> "+suspendedData);
	
	
	doLMSSetValue("cmi.core.lesson_location", (screenNum));
   	doLMSCommit("");
	
	
	if(suspendedData!=""){
		doLMSSetValue("cmi.suspend_data",suspendedData);
		doLMSCommit("");
	}
	
	setScore(suspendedData.split(","));
		
}
/*******************************************************************************
	Functions currently being used in this Shell

	getVisitedData= returns the string of 0's and 1's of visited pages
	
	setCompInfo= sets the lesson status to completed or incomplete depending on Strategy if cyu score the paas/fail is stored
	
	getLessonLocation= returns the string of page last visited by the user in modNum.secNum.pageNum form

*******************************************************************************/
function getVisitedData(){
	
	var suspendData = doLMSGetValue("cmi.suspend_data");
    return suspendData;
	
}


function setCompInfo(status){
	if(status=="completed"){
		doLMSSetValue("cmi.core.lesson_status", "completed");
	}else{
		doLMSSetValue("cmi.core.lesson_status", "incomplete");
	}
	
	/*if(courseStatus=="completed"){
			if(percent>=80){
				doLMSSetValue("cmi.core.lesson_status", "passed");
			}else{
				doLMSSetValue("cmi.core.lesson_status", "failed");
			}
		}else{
			doLMSSetValue("cmi.core.lesson_status", "incomplete");
	}*/
		
	doLMSCommit("");
}
 
function getLessonLocation(){
	var LMSlessonLocation = doLMSGetValue("cmi.core.lesson_location");	 
	return LMSlessonLocation;
}


function setScore(cyuArr){
	var total = cyuArr.length;

	var passed = 0;
		for (var j = 0; j<total; j++) {
			if (cyuArr[j] == 1) {
				passed++;
			}
		}
		var percent = Math.round((passed/total)*100);
		courseStatus=doLMSGetValue("cmi.core.lesson_status");
		if(percent>=100){
			setCompInfo("completed")
		}else{
			setCompInfo("incomplete")
		}		
	doLMSSetValue("cmi.core.score.raw",percent);
	doLMSCommit("");
}



function getScore(){
	var crsScore = doLMSGetValue("cmi.core.score.raw");
	return crsScore;
}

function startTimer()
{
   startDate = new Date().getTime();
}

// function called on course exit
function sco_exitHandler() {
	var temp = computeTime();
	doLMSSetValue("cmi.core.session_time", temp);
	doLMSCommit("");
	
	if (!LMSIsInitialized()) {
		sco_restart();
    }
    doLMSFinish();
}


function computeTime()
{
   if ( startDate != 0 )
   {
      var currentDate = new Date().getTime();
      var elapsedSeconds = ( (currentDate - startDate) / 1000 );
      var formattedTime = convertTotalSeconds(elapsedSeconds );
   }
   else
   {
      formattedTime = "00:00:00";
   }
   return formattedTime;
}

function convertTotalSeconds(ts)
{
   var sec = (ts % 60);

   ts -= sec;
   var tmp = (ts % 3600);  //# of seconds in the total # of minutes
   ts -= tmp;              //# of seconds in the total # of hours

   // convert seconds to conform to CMITimespan type (e.g. SS.00)
   sec = Math.round(sec*100)/100;
   
   var strSec = new String(sec);
   var strWholeSec = strSec;
   var strFractionSec = "";

   if (strSec.indexOf(".") != -1)
   {
      strWholeSec =  strSec.substring(0, strSec.indexOf("."));
      strFractionSec = strSec.substring(strSec.indexOf(".")+1, strSec.length);
   }
   
   if (strWholeSec.length < 2)
   {
      strWholeSec = "0" + strWholeSec;
   }
   strSec = strWholeSec;
   
  /* if (strFractionSec.length)
   {
      strSec = strSec;
   }
*/

   if ((ts % 3600) != 0 )
      var hour = 0;
   else var hour = (ts / 3600);
   if ( (tmp % 60) != 0 )
      var min = 0;
   else var min = (tmp / 60);

   if ((new String(hour)).length < 2)
      hour = "0"+hour;
   if ((new String(min)).length < 2)
      min = "0"+min;

  var rtnVal = hour+":"+min+":"+strSec;
  return rtnVal;

}




function fn_pass(score)
{
if (!LMSIsInitialized()) {
		sco_restart();    
	    }
doLMSSetValue("cmi.core.score.raw", score)
doLMSSetValue("cmi.core.lesson_status", "passed");	
	doLMSCommit("");

}
function fn_fail(score)
{
if (!LMSIsInitialized()) {
		sco_restart();    
}
doLMSSetValue("cmi.core.score.raw", score)
doLMSSetValue("cmi.core.lesson_status", "failed");	
doLMSCommit("");
}



/*******************************************************************************/
// Restart the SCO.
function sco_restart() {
    return doLMSInitialize();
}
/*******************************************************************************/


